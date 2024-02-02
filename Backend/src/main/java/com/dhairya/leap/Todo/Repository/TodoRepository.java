package com.dhairya.leap.Todo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dhairya.leap.Todo.Entity.Task;

@Repository
public interface TodoRepository extends JpaRepository<Task, String>{
	

}
