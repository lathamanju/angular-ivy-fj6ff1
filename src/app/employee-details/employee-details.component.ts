import { Component, OnInit } from '@angular/core';
import { EmployeeServicesService } from '../employee-services.service';

@Component({
  selector: 'app-employee-details',
  template: `<h1>Emplyoee Details</h1>
<ul *ngFor="let employee of employees">
<li>{{employee.title}}</li></ul>

  `,
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {

public employees=[];
  constructor(private _employeeService:EmployeeServicesService ) {}

  ngOnInit() {

    this._employeeService.getEmployeeDetails()
    .subscribe(data => this.employees = data);
  }
}
