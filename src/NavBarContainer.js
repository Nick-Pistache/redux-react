import React, {Component} from 'react';
import { connect } from 'react-redux';

const switchAction = {type : 'SWITCH'}

export class NavBar extends Component {
    render() {
        const {light} = this.props;
        return (
            <div className = "NavBar">
                <nav>{light}</nav>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    light : state
});

const NavBarContainer = connect(mapStateToProps)(NavBar);

export default NavBarContainer;