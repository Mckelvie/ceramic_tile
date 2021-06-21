import './App.css';
import Dashboard from "./components/Dashboard";
import Sales from "./components/Sales";
import React, {Component} from "react";
import {Button, Container} from "@material-ui/core";
import {NavLink, Route} from 'react-router-dom';
import Add_product from "./components/Add_product";
import History from "./components/history";
import firebase from "./firebase";
import Admissions from "./components/Admissions";


class App extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            load: false,
            total_revenues: {},
            slabs: {},
            orders: {}
        }
    }

     componentDidMount() {
        firebase.firestore().collection('products').get().then(s =>{
            this.setState({
                products: s.docs.map(v => {
                    return {
                        ...v.data(),
                        original_id: v.id,
                    };
                })
             })
        });

         firebase.firestore().collection('number_of_slabs_sold').doc('slabs').get().then(s =>{
             this.setState({
                 slabs: s.data()
             })
         });

         firebase.firestore().collection('total_revenues').doc('proceeds').get().then(s =>{
             this.setState({
                 total_revenues: s.data()
             })
         });

         firebase.firestore().collection('orders').doc('order').get().then(s =>{
             this.setState({
                 orders: s.data()
             })
         });
    }

    render() {
        return (
           <div>
               {
                   this.state.load ? "Loading!" : <div style={{margin: "0 150px"}}>

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
                                          <Dashboard total_revenues={this.state.total_revenues} slabs={this.state.slabs} orders={this.state.orders}/>
                                          <Sales products={this.state.products} />
                                      </div>}/>

                           <Route path='/admin'
                                  render={() => <Add_product/>}/>

                           <Route path='/real'
                                  render={() => <Admissions/>}/>

                           <Route path='/history'
                                  render={() => <History/>}/>

                       </Container>

                       <div className="bg-light d-flex align-items-center justify-content-center" style={{
                           borderRadius: "5px 5px 0 0",
                           marginTop: 15,
                           height: "auto",
                       }}>
                           <div>
                               <h4 style={{textTransform: "uppercase", margin: "10px 0"}}>магистерская диссертация</h4>
                               <p>Группа: ИСТм-1-19</p>
                               <p>Студент: Саитмамат кызы  Рысгул</p>
                               <p>Тема: Информационные системы и технологии учета оптовых продаж дистрибьютора керамической плитки</p>
                           </div>
                       </div>
                   </div>
               }
           </div>
        );
    }
}

export default App;
