import React from "react";
import "./gridrow.css"
import GridItem from '../GridItem';

class GridRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        //console.log("my gridRow is ",this.props.row);
        //    let gridRow = [<GridItem />, <GridItem/>, <GridItem/>];
        return <div className="grid-row">
            {this.props.row.map((col, colIndex) => (
                <GridItem rowIndex={this.props.rowIndex}
                    colIndex={colIndex}
                    colText={col}
                    handleClick={this.props.handleClick}
                    key={colIndex} />
            ))}
        </div>
    }
}

export default GridRow;