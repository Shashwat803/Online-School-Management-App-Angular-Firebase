import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// angular material imports
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatBottomSheetModule, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DomSanitizer } from '@angular/platform-browser';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatBadgeModule } from '@angular/material/badge';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
// import {
//         MatButtonModule,
//         MatCheckboxModule,
//         MatFormFieldModule,
//         MatDialogModule,
//         MatTabsModule,
//         MatProgressSpinnerModule,
//         MatMenuModule,
//         MatIconModule,
//         MatInputModule,
//         MatSelectModule,
//         MatToolbarModule,
//         MatCardModule,
//         MatChipsModule,
//         MatListModule,
//         MatTooltipModule,
//         MatNativeDateModule,
//         MatDatepickerModule,
//         MatTableModule,
//         MatPaginatorModule,
//         MatProgressBarModule,
//         MatSortModule,
//         MatSnackBarModule,
//         MatStepperModule,
//         MatGridListModule,
//         MatBadgeModule,
//         MatExpansionModule,
//         MatRadioModule
//         } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {DomSanitizer} from '@angular/platform-browser';
// import {MatIconRegistry} from '@angular/material';
@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        // MatButtonModule,
        // MatCheckboxModule,
        // MatFormFieldModule,
        // MatDialogModule,
        // MatTabsModule,
        // MatProgressBarModule,
        // MatMenuModule,
        // MatIconModule,
        // MatInputModule,
        // MatSelectModule,
        // MatToolbarModule,
        // MatCardModule,
        // MatChipsModule,
        // MatListModule,
        // MatTooltipModule,
        // // MatNativeDateModule,
        // MatDatepickerModule,
        // MatTableModule,
        // MatPaginatorModule,
        // MatProgressBarModule,
        // MatSortModule,
        // MatSnackBarModule,
        // MatStepperModule,
        // MatGridListModule,
        // MatBadgeModule,
        // MatExpansionModule,
        // MatRadioModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatTabsModule,
        MatProgressBarModule,
        MatMenuModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatToolbarModule,
        MatCardModule,
        MatChipsModule,
        MatListModule,
        MatTooltipModule,
        // MatNativeDateModule,
        MatDatepickerModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressBarModule,
        // MatSortModule,
        MatSnackBarModule,
        MatStepperModule,
        // MatGridListModule,
        MatBadgeModule,
        MatExpansionModule,
        MatRadioModule
        // MatRadioModule
    ],
    declarations: []
})
export class ElishCustomMaterialModule {
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon(
            'more_vert',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/more_vert.svg'));
        iconRegistry.addSvgIcon(
            'facebook',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/fb.svg'));
        iconRegistry.addSvgIcon(
            'linkedin',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));
        iconRegistry.addSvgIcon(
            'github',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
        iconRegistry.addSvgIcon(
            'menu',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg'));
        iconRegistry.addSvgIcon(
            'dashboard-black',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dashboard-black.svg'));
        iconRegistry.addSvgIcon(
            'star',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/star.svg'));
        iconRegistry.addSvgIcon(
            'phone',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/phone.svg'));
        iconRegistry.addSvgIcon(
            'email',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/email.svg'));
        iconRegistry.addSvgIcon(
            'account_circle',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/account_circle.svg'));
        iconRegistry.addSvgIcon(
            'event',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/event.svg'));
        iconRegistry.addSvgIcon(
            'track_changes',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/track_changes.svg'));
        iconRegistry.addSvgIcon(
            'language',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/language.svg'));
        iconRegistry.addSvgIcon(
            'search',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg'));
        iconRegistry.addSvgIcon(
            'book',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/book.svg'));
        iconRegistry.addSvgIcon(
            'business',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/business.svg'));
        iconRegistry.addSvgIcon(
            'place',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/place.svg'));
        iconRegistry.addSvgIcon(
            'code',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/code.svg'));
        iconRegistry.addSvgIcon(
            'help',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/help.svg'));
        iconRegistry.addSvgIcon(
            'clear',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/clear.svg'));
        iconRegistry.addSvgIcon(
            'vpn',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/vpn.svg'));
        iconRegistry.addSvgIcon(
            'new',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/new.svg'));
        iconRegistry.addSvgIcon(
            'cloud',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cloud.svg'));
        iconRegistry.addSvgIcon(
            'backspace',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/backspace.svg'));
        iconRegistry.addSvgIcon(
            'add',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/add.svg'));
        iconRegistry.addSvgIcon(
            'edit',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/edit.svg'));
        iconRegistry.addSvgIcon(
            'delete',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete.svg'));
        iconRegistry.addSvgIcon(
            'cached',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cached.svg'));
        iconRegistry.addSvgIcon(
            'create',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/create.svg'));
        iconRegistry.addSvgIcon(
            'employee',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/person.svg'));
        iconRegistry.addSvgIcon(
            'employer',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/group.svg'));
        iconRegistry.addSvgIcon(
            'home',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/home.svg'));
        iconRegistry.addSvgIcon(
            'equalizer',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/equalizer.svg'));
        iconRegistry.addSvgIcon(
            'security',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/security.svg'));
        iconRegistry.addSvgIcon(
            'radio_on',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/radio_on.svg'));
        iconRegistry.addSvgIcon(
            'radio_off',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/radio_off.svg'));
        iconRegistry.addSvgIcon(
            'salary',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/salary.svg'));
        iconRegistry.addSvgIcon(
            'drop_down',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/drop_down.svg'));
    }
}