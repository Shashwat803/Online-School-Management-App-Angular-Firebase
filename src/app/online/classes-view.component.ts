import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { moveIn, fallIn } from '../shared/router.animation';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
// import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { BackendService } from '../services/backend.service';
import {MatLegacyPaginator as MatPaginator} from '@angular/material/legacy-paginator';
import {MatSort} from '@angular/material/sort';
import {MatLegacyTableDataSource as MatTableDataSource} from '@angular/material/legacy-table';

@Component({
  selector: 'app-classes-view',
  templateUrl: './classes-view.component.html',
  styleUrls: ['./classes-view.component.css'],
      animations: [moveIn(), fallIn()],
      host: { '[@moveIn]': '' }
})
export class ClassesViewComponent implements OnInit, OnDestroy {

    members: any[];
    dataSource: MatTableDataSource<any>;
    myDocData;
    data$: Observable<any>;
    toggleField: string;
    state: string = '';
    savedChanges = false;
    error: boolean = false;
    errorMessage: String = "";
    dataLoading: boolean = false;
    private querySubscription;
    showFileUpload: boolean = false;
    showDocument: boolean = false;
    docId: string;
    docUrl: Observable<string | null>;
    fileName: string;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    displayedColumns = ['code', 'descr', '_id'];
    enrollmentCDs$;

    constructor(private _backendService: BackendService) { }

    ngOnInit() {
        this.toggleField = "resMode";
        this.dataSource = new MatTableDataSource(this.members);
        this.getData();
    }

    toggle(filter?) {
        if (!filter) { filter = "searchMode" }
        else { filter = filter; }
        this.toggleField = filter;
        this.dataLoading = false;
    }

    getData(formData?) {
        this.dataLoading = true;
        //this.querySubscription = this._backendService.getDocs('CLASSES',formData).subscribe((res) => {
          this.querySubscription = this._backendService.getUserStudentTutsDoc('CLASSES').subscribe((res) => {
            this.dataSource = new MatTableDataSource(res);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        },
            (error) => {
                this.error = true;
                this.errorMessage = error.message;
                this.dataLoading = false;
            },
            () => {
                this.dataLoading = false;
            });
    }

    getDoc(docId) {
        this.docId = docId; // this is required to pass at file upload directive
        this.dataLoading = true;
        this.data$ = this._backendService.getDoc('CLASSES',docId);
        this.toggle('editMode');
        this.dataLoading = false;
    }
    getDocUrl(docUrl){
        this.fileName = docUrl;
        this.docUrl = this._backendService.getFileDownloadUrl(docUrl);
    }

    //mat table paginator and filter functions
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    // applyFilter(filterValue: string) {
    //     filterValue = filterValue.trim(); // Remove whitespace
    //     filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    //     this.dataSource.filter = filterValue;
    // }
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }
    ngOnDestroy() {
        // this is not needed when observable is used, in this case, we are registering user on subscription
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    }
}