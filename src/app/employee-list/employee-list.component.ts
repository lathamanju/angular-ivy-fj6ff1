import { Component, OnInit } from '@angular/core';
import { EmployeeServicesService } from '../employee-services.service';

@Component({
  selector: 'app-employee-list',
  template: `<h2>Employee List</h2>

  <ul *ngFor="let employee of employees">
<li>{{employee.userId}} . {{employee.title}} , {{employee.id}}  </li></ul>
  `,

  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  public employees = [];

  constructor(private _employeeService: EmployeeServicesService) {}

  ngOnInit() {
    this._employeeService
      .getEmployeeDetails()
      .subscribe((data) => (this.employees = data));
  }
}
