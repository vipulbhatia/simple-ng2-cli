import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExtraComponent } from './extra.component';

const routes: Routes = [
    { path: '', redirectTo: 'contact', pathMatch: 'full' },
    { path: 'extra', component: ExtraComponent },
    { path: 'contact', loadChildren: './contact-router.module#ContactRouter' }
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    declarations: [ExtraComponent],
    exports: [RouterModule]
})

export class RoutingModule {  }
