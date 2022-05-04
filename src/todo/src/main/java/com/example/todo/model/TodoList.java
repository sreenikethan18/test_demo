package com.example.todo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class TodoList {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String todoname,desc,status;
	public TodoList() {
		super();
	}
	public TodoList(int id, String todoname, String desc, String status) {
		super();
		this.id = id;
		this.todoname = todoname;
		this.desc = desc;
		this.status = status;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTodoname() {
		return todoname;
	}
	public void setTodoname(String todoname) {
		this.todoname = todoname;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
}
