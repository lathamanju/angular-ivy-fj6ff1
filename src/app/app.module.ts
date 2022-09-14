import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeServicesService } from './employee-services.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule,HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
  ],
  providers: [EmployeeServicesService],

  bootstrap: [AppComponent],
})
export class AppModule {}
