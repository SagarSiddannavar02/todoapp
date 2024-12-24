import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task.model'; 
@Injectable({
  providedIn: 'root'
})
export class TaskService {
private apiurl='http://localhost:3000/tasks'
 
  constructor(private httpclient:HttpClient) { }

    createTask(newtask: Task):Observable<Task>{
      return this.httpclient.post<Task>(this .apiurl,newtask);
      
    }
    getAllTasks():Observable<Task[]>{
      return this.httpclient.get<Task[]>(this.apiurl);
    }
  }





