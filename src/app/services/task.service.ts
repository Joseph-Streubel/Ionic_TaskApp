import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Models/task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  baseURL: string = "https://localhost:7142/api/task";

  constructor(private http: HttpClient) { }

  GetAllTasks(){
    return this.http.get<Task[]>(this.baseURL);
  }


  GetTaskById(TaskId: number): Observable<any>{
    return this.http.get<Task>(this.baseURL + "/" + TaskId);
  }


  CreateNewTask(newTask: Task): Observable<any> {
    return this.http.post(this.baseURL, newTask);
  }


  UpdateTask(TaskId: number, updatedTask: Task): Observable<Task>{
    return this.http.put<Task>(this.baseURL + "/" + TaskId, updatedTask)
  }


  DeleteTaskById(TaskId: number | undefined): Observable<any>{
    return this.http.delete<any>(this.baseURL + "/" + TaskId)
  }

}
