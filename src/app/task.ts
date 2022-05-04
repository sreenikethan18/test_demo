export class Task {
    id: any;
    todoname: any;
    desc: any;
    status: string;
  
    constructor(id: any, todoname: any, desc: any, status:string) {
      this.id = id;
      this.todoname = todoname;
      this.desc = desc;
      this.status = status
    }
  
  }