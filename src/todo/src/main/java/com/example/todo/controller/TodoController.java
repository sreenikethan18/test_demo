package com.example.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.todo.model.TodoList;
import com.example.todo.repository.TodoRepo;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders="*")
@RestController
public class TodoController {
	@Autowired
	public TodoRepo repo;
	
	@PostMapping("addTodo")
	public TodoList addTodo(@RequestBody TodoList todo) {
		return repo.save(todo);
	}
	
	@GetMapping("getTodo")
	public List<TodoList> getTodo(){
		return repo.findAllByOrderByIdAsc();
	}
	
	@GetMapping("getTodoById/{id}")
	public TodoList getTodoById(@PathVariable int id){
		return repo.findById(id).orElse(null);
	}
	
	
	@DeleteMapping("deleteTodo/{id}")
	public String deleteTodo(@PathVariable int id) {
		repo.deleteById(id);
		return "Todo Deleted";
	}
	
	@PutMapping("updateTodo/{id}")
	public TodoList updateTodo(@RequestBody TodoList todo) {
		TodoList existingTodo = repo.findById(todo.getId()).orElse(todo);
		existingTodo.setTodoname(todo.getTodoname());
		existingTodo.setDesc(todo.getDesc());
		existingTodo.setStatus(todo.getStatus());
		return repo.save(existingTodo);
	}
}
