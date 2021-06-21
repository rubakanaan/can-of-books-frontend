import { withAuth0 } from '@auth0/auth0-react';
import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import BestBook from './BestBook';



export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.auth0.user.name,
            userEmail: this.props.auth0.user.email,
            userPic: this.props.auth0.user.picture,
            userData: []
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h2>{this.state.userName}</h2>
                    <p>{this.state.userEmail}</p>
                    <Image src={this.state.userPic} rounded alt={this.state.userName} />
                </div>
                <BestBook
                userEmail={this.state.userEmail} />
            </div>
        )
    }
}

export default withAuth0(Profile);
