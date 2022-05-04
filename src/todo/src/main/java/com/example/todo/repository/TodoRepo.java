package com.example.todo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.todo.model.TodoList;

@Repository
public interface TodoRepo extends JpaRepository<TodoList,Integer> {

	List<TodoList> findAllByOrderByIdAsc();

	List<TodoList> findAllByOrderByIdDesc();

}
