// TaskEdit.js
import React from 'react';
import { Container } from 'reactstrap';
import AppNavbar from './AppNavbar';
import TaskEditForm from './TaskEditForm';

const TaskEdit = () => {
    return (
        <div>
            <AppNavbar />
            <Container>
                <h2>Add Todo</h2>
                <TaskEditForm />
            </Container>
        </div>
    );
}

export default TaskEdit;
