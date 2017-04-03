import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact.component';
import { ViewContactComponent } from './view-contact.component';

const routes: Routes = [
    { path: '', redirectTo: 'add', pathMatch: 'full' },
    { path: 'add', component: AddContactComponent },
    { path: 'view', component: ViewContactComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations: [AddContactComponent, ViewContactComponent],
    exports: [RouterModule]
})

export class ContactRouter {  }
