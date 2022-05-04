import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from 'src/app/task';
import{ TaskFetch} from'src/app/task-fetch';
@Injectable({
  providedIn: 'root'
})

export class RestService {
  constructor(private http: HttpClient) { }

  headers = new HttpHeaders().set('content-type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  }


  getTask: string = "http://localhost:8080/getTodo";
  getTaskById: string = "http://localhost:8080/getTodoById"
  deleteTask: string = "http://localhost:8080/deleteTodo";
  updateTask: string = "http://localhost:8080/updateTodo";

  getTaskDetails() {
    return this.http.get<Task[]>(this.getTask);
  }

  getTaskDetailsById(id: number): Observable<Task> {
    const url = `${this.getTaskById}/${id}`;
    return this.http.get<Task>(url, this.httpOptions)
  }

  deleteTaskDetails(id: number): Observable<Task> {
    const url = `${this.deleteTask}/${id}`;
    return this.http.delete<Task>(url, this.httpOptions);
  }

  getUpdateTaskDetails(id: number): Observable<Task> {
    const url = `${this.updateTask}/${id}`;
    return this.http.get<Task>(url, this.httpOptions);
  }

  updateTaskDetails(tf: TaskFetch): Observable<Task> {
    const url = `${this.updateTask}/${tf.id}`;
    return this.http.put<Task>(url, tf, this.httpOptions).pipe(
      map(() => tf)
    )
  }

  
  
}