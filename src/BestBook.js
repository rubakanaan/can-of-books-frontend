import React, { Component } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

export class BestBook extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>

                    <Card.Title>My Books</Card.Title>
                    {this.props.userData.length > 0 && this.props.userData.map((book, idx) => (
                        <Card.Body>
                            <Card.Text>
                                {book.name}

                            </Card.Text>
                            <Button onClick={(e) => this.props.deleteBook(idx)}
                                variant="primary" type="submit">
                                Delete Book
                            </Button>
                            <Button onClick={(e) => this.props.showUpdateForm(book,idx)}
                                variant="primary" type="submit">
                                Edit
                            </Button>
                        </Card.Body>
                    ))}

                </Card>




            </div>
        )
    }
}

export default BestBook
