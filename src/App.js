import './App.css';
import Dashboard from "./components/Dashboard";
import Sales from "./components/Sales";
import React, {Component} from "react";
import data from "./data.json";
import {Button, Container} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

class App extends Component {
    constructor() {
        super();
        this.state = {
            warehouse: data.warehouse
        }
    }

    componentDidMount() {
        console.log(this.state.warehouse)
    }

    render() {
        return (
            <div>
                <div className="bg-light">
                    <Container className="row d-flex mb-1 align-items-center" style={{position: 'sticky', top: 0}}>
                        <div  className="row align-items-center">
                            <img className={"mx-5"} style={{width: 100}}
                                 src={"https://lh3.googleusercontent.com/proxy/1rdkY9Ns7yhEZFM5pNRFWVcKgURyEOXAygZ2Xr6Ki_5X4g1F6MC_7URm07-4FAnz3MpDwVNmYrdXOLQtxoyWjOF7rgtZ4cm9_BDoYLfDKeLjpjaaao-i4HlP2iudL2c"}/>
                            <h3>Магазин оптовых продаж плит bbj Tile</h3>
                        </div>
                        <div className="d-flex row align-items-flex-end">
                            <Button
                                className="mr-2 ml-2"
                                variant="contained"
                                color="primary"
                                endIcon={<SendIcon/>}
                            >добавить товар</Button>
                            <Button
                                variant="contained"
                                color="primary"
                                endIcon={<SendIcon/>}
                            >История заказов</Button>
                        </div>
                    </Container>
                </div>
                <Container className="App" style={{backgroundColor: '#abb2ee', padding: 4, borderRadius: 10}}>

                    <Dashboard/>
                    <Sales warehouse={this.state.warehouse}/>
                </Container>
            </div>
        );
    }
}

export default App;
