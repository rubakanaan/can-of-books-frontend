import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class UpdateForm extends Component {
    render() {
        return (
            <div>
                 <Form onSubmit={(e)=> this.props.updateBook(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Add New Book</Form.Label>
                        <Form.Control value={this.props.nameUpdate}
                         onChange={(e) => this.props.updateBookNameForm(e.target.value)}
                         type="text" placeholder="Enter book name" />

                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                </Form>
            </div>
        )
    }
}

export default UpdateForm
