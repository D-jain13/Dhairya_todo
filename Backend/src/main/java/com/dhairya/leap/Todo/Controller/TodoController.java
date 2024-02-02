package com.dhairya.leap.Todo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dhairya.leap.Todo.Entity.Task;
import com.dhairya.leap.Todo.Repository.TodoRepository;

@RestController
@RequestMapping("/api/tasks")
public class TodoController {
	
	@Autowired
	private TodoRepository todoRepo;

	
	@GetMapping()
	private List<Task> getAllTodos(){
		List<Task> todoList = todoRepo.findAll();
		return todoList;
	}
	
	@GetMapping("{id}")
	private ResponseEntity<Task> getTodo(@PathVariable String id){
		try {
			Task task = todoRepo.findById(id).orElse(null);
			
			if (task != null) {
                // Return the task with a 200 OK status
                return new ResponseEntity<>(task, HttpStatus.OK);
            } else {
                // Return a 404 Not Found status if the task is not found
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
		}
		catch (Exception e) {
            // Handle exceptions and return a 500 Internal Server Error status
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
		
	}
	@PostMapping()
	public Task createTodo(@RequestBody Task todo) {
		return todoRepo.save(todo);
	}
	
	@PutMapping("{id}")
	public ResponseEntity<Task> updateTodo(@PathVariable String id, @RequestBody Task updatedTodo){
		return todoRepo.findById(id).map(existingTodo -> {
            existingTodo.setTitle(updatedTodo.getTitle());
            existingTodo.setDescription(updatedTodo.getDescription());
            existingTodo.setDue_date(updatedTodo.getDue_date());
            existingTodo.setCompleted(updatedTodo.isCompleted());
            return ResponseEntity.ok(todoRepo.save(existingTodo));
        })
        .orElse(ResponseEntity.notFound().build());
	}
	
	@PatchMapping("{id}")
	public ResponseEntity<Task> updateAttributeTodo(@PathVariable String id, @RequestBody Task updatedTodo){
		return todoRepo.findById(id).map(existingTodo -> {
            existingTodo.setCompleted(updatedTodo.isCompleted());
            return ResponseEntity.ok(todoRepo.save(existingTodo));
        })
        .orElse(ResponseEntity.notFound().build());
	}
	
	@DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTodo(@PathVariable String id) {
        return todoRepo.findById(id)
                .map(existingTodo -> {
                    todoRepo.delete(existingTodo);
                    return ResponseEntity.ok().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
 