import React from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facbook extends React.Component {

    state = {
        isLoggedIn: false,
        userId: '',
        name: '',
        email: '',
        picture: ''
    }
    componentClicked = () => console.log('clicked')

    responseFacebook = (response) => {
        console.log(response)
        this.setState({
            isLoggedIn: true,
            userId: response.userId,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
    }

    render() {
        let fbContent;
        if (this.state.isLoggedIn) {
            fbContent = (
                <div style={{
                    width:'400px',
                    margin:'auto',
                    backgroundColor:'#f1f1f1'
                }}>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>{this.state.name}</h2>
                    <h2>{this.state.email}</h2>
                </div>
            )
        } else {
            fbContent = (
                <FacebookLogin
                    appId="965282110609014"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook}
                />
            )
        }
        return (
            <div>{fbContent}</div>
        )
    }
}