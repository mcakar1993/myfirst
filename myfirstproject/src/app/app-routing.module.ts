import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './pages/employee/employee.component';
import { CompanyComponent } from './pages/company/company.component';

const routes: Routes = [
{ path : '', component : EmployeeComponent },
{ path : 'employee', component : EmployeeComponent },
{ path : 'employee/:id/:mid', component : EmployeeComponent },
{ path : 'employee/:id', component : EmployeeComponent },


{ path : 'company', component : CompanyComponent },
{ path : 'company/:id', component : CompanyComponent },
{ path : '**', component:  EmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule 
{
}
