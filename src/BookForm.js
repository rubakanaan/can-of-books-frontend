import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export class BookForm extends Component {
    render() {
        return (
            <div>
                 <Form onSubmit={(e)=> this.props.createMyBook(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Add New Book</Form.Label>
                        <Form.Control 
                         onChange={(e) => this.props.updateBookName(e.target.value)}
                         type="text" placeholder="Enter book name" />

                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default BookForm
