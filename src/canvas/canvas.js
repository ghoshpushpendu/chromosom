import React, { Component } from 'react';
import './canvas.css';

class Canvas extends Component {
    render() {
        return (
            <div className="canvas">
                <canvas ref="canvas" className="trueCanvas" width={300} height={300} />
            </div>
        );
    }
}

export default Canvas;
