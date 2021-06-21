import React, { Component } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card'


export class BestBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: []
        }
    }


    componentDidMount = async () => {
        console.log(`${process.env.REACT_APP_SERVER_URL}/books?email=${this.props.userEmail}`)
        await axios.get(`${process.env.REACT_APP_SERVER_URL}/books?email=${this.props.userEmail}`).then(res => {
            this.setState({
                userData: res.data[0].books
            })

        }).catch(
            error => {
                alert(error.mesaage);
            }
        );
    }
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>My Books</Card.Title>
                        {this.state.userData.length > 0 && this.state.userData.map((book, idx) => (

                            <Card.Text>
                                {book.name}
                            </Card.Text>
                        ))}
                    </Card.Body>
                </Card>




            </div>
        )
    }
}

export default BestBook
