// TaskEditForm.js
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

class TaskEditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                title: '',
                description: '',
                due_date: '',
                completed: false
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    async componentDidMount() {
        // Fetch a specific task based on its ID
        if (this.props.match.params.id !== 'new') {
            const task = await (await fetch(`/api/tasks/${this.props.match.params.id}`)).json();
            this.setState({ item: task });
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        let item = { ...this.state.item };
        item[name] = value;
        this.setState({ item });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { item } = this.state;
        await fetch(`/api/tasks${item.id ? '/' + item.id : ''}`, {
            method: item.id ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/api/tasks');
    }

    render() {
        const { item } = this.state;

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                            <Label for="title">Title</Label>
                            <Input type="text" name="title" id="title" value={item.title || ''}
                                onChange={this.handleChange} autoComplete="title"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input type="text" name="description" id="description" value={item.description || ''}
                                onChange={this.handleChange} autoComplete="description"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="due_date">Due Date</Label>
                            <Input type="date" name="due_date" id="due_date" value={item.due_date || ''}
                                onChange={this.handleChange} autoComplete="due_date"/>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="completed" checked={item.completed || false}
                                    onChange={this.handleChange} autoComplete="completed"/> Completed
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Button color="primary" type="submit">Save</Button>{' '}
                            <Button color="secondary" tag={Link} to="/api/tasks">Cancel</Button>
                        </FormGroup>
            </Form>
        );
    }
}

export default withRouter(TaskEditForm);
