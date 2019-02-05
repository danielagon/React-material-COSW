import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoApp} from "./TodoApp";
import {Login} from "./component/Login";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

localStorage.setItem('user', 'Daniela');
localStorage.setItem('password', '2019');
localStorage.setItem('isLoggedIn', false);

class App extends Component {

    state = {
        isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')),
        user: "",
        password: ""
    };

    LoginView = () => (
        <Login
            handleLogin={this.handleLogin}
            handleUserChange={this.handleUserChange}
            handlePasswordChange={this.handlePasswordChange}
        />
    );

    TodoView = () => (
        <TodoApp/>
    );

    render() {
        if (this.state.isLoggedIn) {
            return (
                <Router>
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <h1 className="App-title">TODO React App</h1>
                        </header>

                        <br/>
                        <br/>

                        <ul>
                            <li><Link to="/">Login</Link></li>
                            <li><Link to="/todo">Todo</Link></li>
                        </ul>

                        <div>
                            <Route exact path="/" component={this.TodoView}/>
                        </div>
                    </div>
                </Router>
            );
        }else {
            return (
                <Router>
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <h1 className="App-title">TODO React App</h1>
                        </header>

                        <br/>
                        <br/>

                        <ul>
                            <li><Link to="/">Login</Link></li>
                            <li><Link to="/todo">Todo</Link></li>
                        </ul>

                        <div>
                            <Route exact path="/" component={this.LoginView}/>
                        </div>
                    </div>
                </Router>
            );
        }
    }

    handleLogin = e => {
        if (this.state.user === localStorage.getItem("user") && this.state.password === localStorage.getItem("password")) {
            localStorage.setItem('isLoggedIn', true);
            this.setState({
                isLoggedIn: true
            });
            console.log('Logged');
        }else {
            console.log('incorrect username or password');
        }
    }

    handleUserChange = e => {
        this.setState({
            user: e.target.value
        });
    }

    handlePasswordChange = e => {
        this.setState({
            password: e.target.value
        });
    }
}

export default App;
