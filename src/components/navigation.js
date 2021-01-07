import React , { Component } from 'react';
import App from '../App';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a href="" className="text-white">
                    { this.props.titulo }
                    <span className="badge badge-pill badge-light ml-2">
                        { this.props.ntodos }
                    </span>
                </a>
            </nav>
        )
    }
}

export default Navigation;