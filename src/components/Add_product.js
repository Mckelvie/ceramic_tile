import React, {Component} from 'react';
import firebase from "firebase";

class MyComponent extends Component {

    render() {
        const inputs = {
            width: 250,
            fontsize: 25
        }
        const div_inp = { width: 400, display: "flex", justifyContent: "space-between", margin: "10px 0"}
        return (
            <div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <div style={div_inp}>
                        <label>Название плитки:</label>
                        <input style={inputs} type="text"/>
                    </div>
                    <div style={div_inp}>
                        <label>Количество плитки:</label>
                        <input style={inputs} type="number"/>
                    </div>
                    <div style={div_inp}>
                        <label>Цена плитки:</label>
                        <input style={inputs} type="number"/>
                    </div>
                    <div style={div_inp}>
                        <label>Картинка плитки:</label>
                        <input style={inputs} type="file"/>
                    </div>
                </div>
            </div>
        );
    }
}


export default MyComponent;
