import { ApiService } from '../api.service';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {FormControl, Validators} from '@angular/forms';




@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements AfterViewInit {
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  // empleados: any = [];
  displayedColumns: string[] = ['id', 'name' ,'last_name' ,'birthday'];
  dataSource = [];


  empleados : any =[];
  constructor( private api: ApiService) { 
    this.getEmpleados();
  }

 
  ngAfterViewInit() {
    this.empleados.paginator = this.paginator;
  }

  getEmpleados() {
    this.api.getEmpleado()
      .subscribe(data => {
        this.empleados = new MatTableDataSource(data.data.employees);
    
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.empleados.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
  }

}




