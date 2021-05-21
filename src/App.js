import './App.css';
import Dashboard from "./components/Dashboard";
import Sales from "./components/Sales";
import {Component} from "react";
import data from "./data.json";
import {Container} from "@material-ui/core";

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
            <Container className="App">
                <Dashboard/>
                <Sales warehouse={this.state.warehouse}/>
            </Container>
        );
    }
}

export default App;
