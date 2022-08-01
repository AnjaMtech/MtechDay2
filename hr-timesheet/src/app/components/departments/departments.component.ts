import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  constructor(
    private departmentsService: DepartmentsService,
  ) { }

  ngOnInit(): void {
  }

}
