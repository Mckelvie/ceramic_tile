import './App.css';
import Dashboard from "./components/Dashboard";
import Sales from "./components/Sales";
import React, {Component} from "react";
import data from "./data.json";
import {Button, Container} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import {NavLink, Route} from 'react-router-dom';
import Add_product from "./components/Add_product";
import History from "./components/history";

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
            <div style={{margin: "0 150px"}}>
                <div className="bg-light py-2 mb-2" style={{
                    borderRadius: "0 0 5px 5px",
                    position: "sticky",
                    top: "0",
                    zIndex: 2,
                    boxShadow: "0 0 15px rgba(0,0,0,0.5)"
                }}>
                    <Container className="row d-flex mb-1 align-items-center justify-content-between"
                               style={{position: 'sticky', top: 0}}>
                        <div className="row align-items-center">
                            <NavLink to="/"  style={{textDecoration: "none", color: "black"}}>
                                <h1 style={{fontFamily: "Poppins", fontWeight: 900, marginLeft: 50}}>CeramicTile</h1>
                            </NavLink>
                        </div>
                        <div className="d-flex row align-items-flex-end">

                            <NavLink to="/admin">
                                <Button
                                    className="mr-2 ml-2"
                                    variant="contained"
                                    color="primary"
                                >добавить товар</Button>
                            </NavLink>

                            <NavLink to="/history">
                                <Button
                                    variant="contained"
                                    color="primary"
                                >История заказов</Button>
                            </NavLink>


                        </div>
                    </Container>
                </div>

                <Container className="App" style={{backgroundColor: '#eee', padding: 4, borderRadius: 10}}>

                    <Route path='/' exact
                           render={() =>
                               <div>
                                   <Dashboard/>
                                   <Sales warehouse={this.state.warehouse}/>
                               </div>}/>

                    <Route path='/admin'
                           render={() => <Add_product/>}/>

                    <Route path='/history'
                           render={() => <History/>}/>

                </Container>

                <div className="bg-light d-flex align-items-center justify-content-center" style={{
                    borderRadius: "5px 5px 0 0",
                    marginTop: 15,
                    height: 100,
                }}>
                    <h1> © Lorem ipsum dolor</h1>
                </div>
            </div>
        );
    }
}

export default App;
