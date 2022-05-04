import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import { Task } from 'src/app/task';
import { TaskFetch } from 'src/app/task-fetch';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  [x: string]: any;

  public TaskGroup !: FormGroup;
  displayedColumns: string[] = ['id', 'todoname', 'description', 'status', 'action'];
  Task: Task[] = [];
  tf:TaskFetch
  created:any="Created";
  inProgress:string = "In Progress";
  onHold:string = "On Hold";
  completed:string = "Completed";
  status:string=''
  

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private rs: RestService) { }

  ngOnInit(): void {
    this.TaskGroup = this.formBuilder.group({
      todoname: ['', Validators.required],
      desc: ['', Validators.required],
      // status:['',Validators.required]
    });
    this.rs.getTaskDetails().subscribe((res) => {
      this.Task = res;
    },
      (err) => {
        console.log("Error occures", err);
      }
    );
  }

  addTask() {
    this.http.post<any>("http://localhost:8080/addTodo", this.TaskGroup.value).subscribe(res => {
       this.TaskGroup.reset();
       this.TaskGroup.disable();
      // //  window.location.reload
      window.location.reload();
    },
      err => {
        console.log("Somsething went wrong" + err);
      }
      
    );

  }
  

  // removeItem(element: any) {
  //   this.Task.forEach((value, index) => {
  //     if (value == element) {
  //       this.Task.splice(index, 1);
  //     }
  //   });
  // }

  deleteRow(val: number) {
      this.rs.deleteTaskDetails(val).subscribe(data => {

      });

       this.rs.getTaskDetails().subscribe((res) => {
        this.Task = res;
       });

      this.TaskGroup.enable();
  }

  hold(element:any){
    this.created = this.onHold
    var selectedElement = this.Task.filter(i => i.id === element);
    selectedElement.forEach((value, index) => {
      // value.status = 'hold';
      this.updateTaskStatus(value, "On hold");
      this.Task.push(value);
      
    });
  }
  
  updateTaskStatus(task: any, status: string) {
    task.status = status;
    this.rs.updateTaskDetails(task).subscribe((res) => {
      console.log(res);
    });
  }
    

  

  complete(element:any){
    this.created= this.completed
    this.Task.forEach((value, index) => {
      if (value.id == element) {
        // this.Task.splice(index, 1);
        this.updateTaskStatus(value, "Completed");
      }
    });
  }

  Inprocess(element:any){
    this.created = this.Inprocess
    var selectedElement = this.Task.filter(i => i.id === element);
    selectedElement.forEach((value, index) => {
      // value.status = 'hold';
      this.updateTaskStatus(value, "In process");
      // this.Task.push(value);
      
    });

  }

  update(element:number){
    this.router.navigate(['/update',element])
  }
  
}

