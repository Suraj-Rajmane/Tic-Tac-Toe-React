import React from "react";
import "./griditem.css"

class GridItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="cell" onClick=
            {() => { this.props.handleClick(this.props.rowIndex, this.props.colIndex) }}>
            {this.props.colText}
        </div>
    }
}

export default GridItem;