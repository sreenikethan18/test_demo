import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import { Task } from 'src/app/task';
import { TaskFetch } from 'src/app/task-fetch';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(public route:ActivatedRoute, public router:Router, public rs:RestService) { }

  val:any;
  Task:Task[] = []
  tf:TaskFetch
  ngOnInit(): void {
    let sub = this.route.params.subscribe(params =>{
      this.val = params['id']
    })
    this.rs.getTaskDetailsById(this.val).subscribe(data =>{
      this.tf = data
    })
  }

  update(){
    this.rs.updateTaskDetails(this.tf).subscribe(data => {
      this.getTaskDetails()
    })
    this.router.navigate(['/task'])
  }

  getTaskDetails(){
    this.rs.getTaskDetails().subscribe((res) =>{
      this.Task =res
    })
  }
}




//  this.task.status='in process'