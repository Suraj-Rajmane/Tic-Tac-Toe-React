import React from "react";
import "./footer.css";

class Footer extends React.Component {
    render() {
        return <div className="turn">It's Player {this.props.currentPlayer}'s turn</div>
    }
}

export default Footer;