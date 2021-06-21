import React, {Component} from 'react';
import firebase from "../firebase";
import { v4 as uuidv4 } from 'uuid';

class MyComponent extends Component {

    state = {
        loading: false,
        name: null,
        count: null,
        file: null,
        price: null
    }

    constructor(props) {
        super(props);

        this.firestore = firebase.firestore();

        this.products = this.firestore.collection('products');
        this.storage = firebase.storage();
        this.storage_ref = this.storage.ref();
    }

    add = async () => {
        this.setState({ loading: true });

        try {
            const item = await this.products.add({
                id: uuidv4(),
                name: this.state.name,
                count: this.state.count,
                price: +this.state.price,
            });

            if (this.state.file) {
                await this.storage_ref.child(`products/${item.id}${this.state.file.name}`).put(this.state.file);
                await this.products.doc(item.id).update({
                    image_ref: `products/${item.id}${this.state.file.name}`,
                    image: await this.storage_ref.child(`products/${item.id}${this.state.file.name}`).getDownloadURL(),
                });
            }

            alert('Товар добавлен успешно');
            console.log(item)
        } catch (e) {
            console.dir(e)
            alert('Произошла какая-то ошибка!');
        } finally {
            this.setState({ loading: false });
        }
    }



    render() {
        const inputs = {
            width: 250,
            fontsize: 25
        }
        const div_inp = { width: 400, display: "flex", justifyContent: "space-between", margin: "10px 0"}
        return (
            <div>
                {
                    this.state.loading ? <div style={{margin: "150px auto"}}>Подождите пожалуйста..</div>
                        :  <div className="d-flex flex-column align-items-center justify-content-center py-5">
                            <div className="p-4" style={{borderRadius: 8, backgroundColor: 'hsla(120,37%,87%,0.94)'}}>
                                <div style={div_inp}>
                                    <label>Название плитки:</label>
                                    <input style={inputs} onChange={(e) => this.setState({ name: e.target.value })} type="text"/>
                                </div>
                                <div style={div_inp}>
                                    <label>Количество плитки:</label>
                                    <input style={inputs} onChange={(e) => this.setState({ count: e.target.value })} type="number"/>
                                </div>
                                <div style={div_inp}>
                                    <label>Цена плитки:</label>
                                    <input style={inputs} onChange={(e) => this.setState({ price: e.target.value })} type="number"/>
                                </div>
                                <div style={div_inp}>
                                    <label>Картинка плитки:</label>
                                    <input style={inputs}  onChange={(e) => this.setState({ file: e.target.files[0] })} type="file"/>
                                </div>
                                <div style={div_inp}>
                                    <button className={"btn btn-success w-100"}  disabled={!this.state.file} onClick={()=>this.add()}>Добавить</button>
                                </div>
                            </div>
                        </div>
                }
            </div>
        );
    }
}


export default MyComponent;
