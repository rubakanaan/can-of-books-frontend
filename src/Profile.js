import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import BestBook from './BestBook';
import BookForm from './BookForm';
import UpdateForm from './UpdateForm';


export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.auth0.user.name,
            userEmail: this.props.auth0.user.email,
            userPic: this.props.auth0.user.picture,
            userData: [],
            bookName: '',
            description: '',
            status: '',
            showForm: false,
            nameUpdate:'',
            bookIndex:0
        }
    }



    componentDidMount = async () => {
        console.log(`${process.env.REACT_APP_SERVER_URL}/books?email=${this.state.userEmail}`)
        await axios.get(`${process.env.REACT_APP_SERVER_URL}/books?email=${this.state.userEmail}`).then(res => {
            this.setState({
                userData: res.data[0].books
            })

        }).catch(
            error => {
                alert(error.mesaage);
            }
        );
    }


    updateBookName = (book) => {
        this.setState({
            bookName: book,
        })

    }

    updateBookNameForm =(book) => {
        this.setState({
            nameUpdate: book,
        })

    }
    createMyBook = (e) => {
        e.preventDefault();
        const reqBody = {
            email: this.state.userEmail,
            name: this.state.bookName,
            description: 'Some description about the book',
            status: 'Avilabile'
        }
        axios.post(`${process.env.REACT_APP_SERVER_URL}/books`, reqBody).then(res => {
            this.setState({
                userData: res.data.books
            })

        })
            .catch(
                error => {
                    alert(error.mesaage);
                }
            );


    }

    updateBook = (e) => {
        e.preventDefault();
        const reqBody = {
            email: this.state.userEmail,
            name: this.state.nameUpdate,
            description: 'Some description about the book',
            status: 'Avilabile'
        }
        axios.put(`${process.env.REACT_APP_SERVER_URL}/books/${this.state.bookIndex}`, reqBody).then(res => {
            this.setState({
                userData: res.data.books,
                showForm: false
            })

        })
            .catch(
                error => {
                    alert(error.mesaage);
                }
            );
    }

    deleteBook = (index) => {


        axios.delete(`${process.env.REACT_APP_SERVER_URL}/books/${index}?email=${this.state.userEmail}`).then(res => {
            this.setState({
                userData: res.data.books,
                showForm: false
            })

        })
            .catch(
                error => {
                    alert(error.mesaage);
                }
            );

    }

    showUpdateForm =(book,index)=>{
        this.setState({
           showForm: !this.state.showForm,
            nameUpdate:book.name,
            bookIndex:index
        })
    }


    render() {
        return (
            <div>
                <div>
                <h2>{this.state.userName}</h2>
                <p>{this.state.userEmail}</p>
                <Image src={this.state.userPic} rounded alt={this.state.userName} />
                    <BookForm
                        updateBookName={this.updateBookName}
                        createMyBook={this.createMyBook}
                    />

                </div>
            {this.state.showForm &&
            <div>

                <UpdateForm 
                updateBook={this.updateBook}
                updateBookNameForm={this.updateBookNameForm}
                nameUpdate={this.state.nameUpdate}
                />


            </div>

            }
                
                <BestBook
                    userData={this.state.userData}
                    userEmail={this.state.userEmail}
                    deleteBook={this.deleteBook}
                    showUpdateForm={this.showUpdateForm}
                />

            </div>
        )
    }
}

export default withAuth0(Profile);
