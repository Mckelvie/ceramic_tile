import React, {Component} from 'react';


class MyComponent extends Component {
    render() {
        return (
            <div>
                <div className="d-flex align-items-center justify-content-center">
                    <div>
                        <label>Name</label>
                        <input type="text"/>
                    </div>
                </div>
            </div>
        );
    }
}

MyComponent.propTypes = {};

export default MyComponent;
