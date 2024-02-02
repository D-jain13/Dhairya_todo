// Import the necessary components and modules
import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
        this.remove = this.remove.bind(this);   
    }

    componentDidMount() {
        // Fetch the tasks from the backend API
        fetch('/api/tasks')
            .then(response => response.json())
            .then(data => this.setState({ tasks: data }));
            
    }

    async remove(id) {
        // Remove a task based on its ID
        await fetch(`/api/tasks/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            // Update the state after successful deletion
            let updatedTasks = [...this.state.tasks].filter(task => task.id !== id);
            this.setState({ tasks: updatedTasks });
        });
        window.location.reload();
    }

    async toggleCompletion(id, completed) {
        try {
            // Update only the completed attribute
            const updatedTask = { completed: !completed };
    
            // Update the todo on the backend using the updated JSON
            await fetch(`/api/tasks/${id}`, {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedTask)
            });
    
            // Update the state to reflect the changed completion status
            const updatedTasks = this.state.tasks.map(task =>
                task.id === id ? { ...task, completed: !completed } : task
            );
    
            this.setState({ tasks: updatedTasks });
            window.location.reload();
        } catch (error) {
            console.error('Error toggling completion:', error);
        }
    }
    
    
    render() {
        const { tasks } = this.state;

        const tasksList = tasks.map(task => (
            <tr key={task.id}>
                <td style={{ whiteSpace: 'nowrap' }}>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.due_date}</td>
                <td>{task.completed.toString()}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={`/api/tasks/${task.id}`}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(task.id)}>Delete</Button>
                        <Button
                            size="sm"
                            color={task.completed ? 'success' : 'warning'}
                            onClick={() => this.toggleCompletion(task.id, task.completed)}
                        >
                            {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                        </Button>
                    </ButtonGroup>
                </td>
            </tr>
        ));

        return (
            <div>
                <AppNavbar />
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/api/tasks/new" style={{ position: 'fixed', top: '60px', right: '20px' }}>Add Todo</Button>
                    </div>
                    <h3>Todos</h3>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th width="20%">Title</th>
                                <th width="20%">Description</th>
                                <th width="20%">Due Date</th>
                                <th width="20%">Completed</th>
                                <th width="40%">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasksList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default TaskList;
