import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { moveIn, fallIn } from '../shared/router.animation';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
// import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { BackendService } from '../services/backend.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {MatLegacyPaginator as MatPaginator} from '@angular/material/legacy-paginator';
import {MatSort} from '@angular/material/sort';
import {MatLegacyTableDataSource as MatTableDataSource} from '@angular/material/legacy-table';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit, OnDestroy {

    members: any[];
    dataSource: MatTableDataSource<any>;
    myDocData;
    data$;
    emplData: any;
    toggleField: string;
    state: string = '';
    savedChanges = false;
    error: boolean = false;
    errorMessage: String = "";
    dataLoading: boolean = false;
    private querySubscription;

    pCDs = ['Allowance', 'Deduction'];
    freqCDs = ['Bi-Weekly', 'Monthly', 'Yearly', 'One-time', 'OTHER'];
    total_amount = 0;
    addDataForm: FormGroup;
    editDataForm: FormGroup;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    displayedColumns = ['code', 'descr', 'emplid', 'empldescr', 'empllastname', 'paiddata', '_id'];

    constructor(private _backendService: BackendService, private _fb: FormBuilder, private _router: ActivatedRoute) { }

    ngOnInit() {
        let id = this._router.snapshot.paramMap.get('id');
        this.getEmployee(id);
        this.toggleField = (!id) ? "searchMode" : "addMode";
        //this.toggleField = "searchMode";
        this.error = false;
        this.errorMessage = "";
        this.dataSource = new MatTableDataSource(this.members);
        this.addDataForm = this._fb.group({
            emplid: ['', Validators.required],
            emplskey: ['', Validators.required],
            empldescr: ['', Validators.required],
            empllastname: ['', Validators.required],
            emplsalcode: ['', Validators.required],
            paiddata: ['', Validators.required],
            code: ['', Validators.required],
            descr: ['', Validators.required],
            bsalary: ['', Validators.required],
            line: this._fb.array([]),
            /**
            line: this._fb.array([this._fb.group({
                frequency: ['', Validators.required],
                ptype: ['', Validators.required],
                payval: ['', Validators.required],
                amount: ['', [Validators.pattern("^[0-9]*$")]]
            })]),
            */
            gamount: ''
        });
        this.editDataForm = this._fb.group({
            _id: ['', Validators.required],
            emplid: ['', Validators.required],
            emplskey: ['', Validators.required],
            empldescr: ['', Validators.required],
            empllastname: ['', Validators.required],
            emplsalcode: ['', Validators.required],
            paiddata: ['', Validators.required],
            code: ['', Validators.required],
            descr: ['', Validators.required],
            bsalary: ['', Validators.required],
            line: this._fb.array([]),
            gamount: ''
        });
    }

    getEmployee(id) {
     this.querySubscription = this._backendService.getDoc('EMPLOYEE', id).subscribe((res) => {
      this.addDataForm.controls["emplid"].patchValue(res["_id"]);
            this.addDataForm.controls["emplskey"].patchValue(res["SKEY"]);
            this.addDataForm.controls["empldescr"].patchValue(res["descr"]);
            this.addDataForm.controls["empllastname"].patchValue(res["LAST_NAME"]);
            this.addDataForm.controls["emplsalcode"].patchValue(res["SALARY_CODE"]);

      this._backendService.getDoc("SALARY_CD", res["SALARY_CODE"]).subscribe((res2) => {
          if (res2["code"] !== "") {
              this.data$ = res2;
              this.addDataForm.patchValue(this.data$);
              this.addDataForm.controls["code"].patchValue("");

              for (let i = 0; i < this.data$["line"].length; i++) {
                  this.LINES('addDataForm').push(this._fb.group(this.data$["line"][i]));
              }
              this.calculateTotal(('addDataForm'));
          }
      });
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

    LINES(formName) {
        return this[formName].get('line') as FormArray;
    }
    addLINES(formName) {
        this.LINES(formName).push(this._fb.group({
            frequency: ['', Validators.required],
            ptype: ['', Validators.required],
            payval: ['', Validators.required],
            amount: ['', [Validators.pattern("^[0-9]*$")]]

        }));
        this.calculateTotal(formName);
    }
    deleteLINES(index, formName) {
        this.LINES(formName).removeAt(index);
        this.calculateTotal(formName);
    }
    calculateTotal(formName) {
        this.total_amount = 0;
        for (let i = 0; i <= this[formName].value.line.length; i++) {
            if (this[formName].value.line[i]) {
                if (this[formName].value.line[i].ptype == 'Allowance') {
                    this.total_amount += +this[formName].value.line[i].amount;
                } else {
                    this.total_amount -= +this[formName].value.line[i].amount;
                }
            }
        }
        this.total_amount += parseFloat(this[formName].controls['bsalary'].value);
        this[formName].controls['gamount'].setValue(this.total_amount.toFixed(2));
    }

    toggle(filter?) {
        if (!filter) { filter = "searchMode" }
        else { filter = filter; }
        this.toggleField = filter;
        this.dataLoading = false;
    }

    getData(formData?) {
      this.dataLoading = true;
      this.querySubscription = this._backendService.getDocs('SALARY', formData).subscribe((res) => {
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

    setData(formData) {
      this.dataLoading = true;
      this.querySubscription = this._backendService.setDoc('SALARY', formData).then(res => {
        if (res) {
          this.savedChanges = true;
          this.error = false;
          this.errorMessage = "";
          this.dataLoading = false;
        }
      }
      ).catch(err => {
        if (err) {
          this.error = true;
          this.errorMessage = err.message;
          this.dataLoading = false;
        }
      }
      );
    }

    updateData(formData) {
      this.dataLoading = true;
      this.querySubscription = this._backendService.updateDoc('SALARY', formData._id, formData).then(res => {
        if (res) {
          this.savedChanges = true;
          this.error = false;
          this.errorMessage = "";
          this.dataLoading = false;
        }
      }
      ).catch(err => {
        if (err) {
          this.error = true;
          this.errorMessage = err.message;
          this.dataLoading = false;
        }
      });
    }

    getDoc(docId) {
      this.dataLoading = true;
      this.data$ = this._backendService.getDoc('SALARY', docId).subscribe(res => {
        if (res) {
          this.data$ = res;
          this.editDataForm = this._fb.group({
            _id: ['', Validators.required],
            emplid: ['', Validators.required],
            emplskey: ['', Validators.required],
            empldescr: ['', Validators.required],
            empllastname: ['', Validators.required],
            emplsalcode: ['', Validators.required],
            paiddata: ['', Validators.required],
            code: ['', Validators.required],
            descr: ['', Validators.required],
            bsalary: ['', Validators.required],
            line: this._fb.array([]),
            gamount: ''
        });
        this.editDataForm.patchValue(this.data$);

        for (let i = 0; i < this.data$["line"].length; i++) {
            this.LINES('editDataForm').push(this._fb.group(this.data$["line"][i]));
        }
        this.calculateTotal(('editDataForm'));
        this.toggle('editMode');
          this.dataLoading = false;
        }
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

    deleteDoc(docId) {
      if (confirm("Are you sure want to delete this record ?")) {
        this.dataLoading = true;
        this._backendService.deleteDoc('SALARY', docId).then(res => {
          if (res) {
            this.error = false;
            this.errorMessage = "";
            this.dataLoading = false;
          }
        }
        ).catch(err => {
          if (err) {
            this.error = true;
            this.errorMessage = err.message;
            this.dataLoading = false;
          }
        }
        );
      }
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