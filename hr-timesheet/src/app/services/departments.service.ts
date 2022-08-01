import { Injectable } from '@angular/core';
import { Department } from '../interfaces/departments';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  departments: Department[] = [
    {id: '1', name: 'Customer Success'},
    {id: '2', name: 'Sales'},
    {id: '3', name: 'Finance'},
  ];
  constructor() { }

}
