import React from "react";
import logoImage from "../assets/logo.png";
import AccountDropdown from "./AccountDropdown";

class Header extends React.Component {
    render () {
        return (
            <header style={headerStyle}>
                <img src={logoImage} width="auto" height="35px" alt="waiter" />
                <p style={headerTitleStyle}>Auto-Garcon</p>
                <AccountDropdown className="px-3"></AccountDropdown>
            </header>
        );
    }
}

export default Header;

var headerTitleStyle = {
    'margin': '0',
    'margin-left': '10px',
    'flex': '1'
}

var headerStyle = {
    backgroundColor: '#ffffff',
    display: "flex",
    fontSize: "2em",
    height: '58px',
    padding: "5px 0 5px 10px",
    alignItems: "center",
    fontWeight: "300"
};

//export { headerStyle };