import React, {useState} from "react";
import {Button} from "@material-ui/core";
import {Modal} from "react-bootstrap";
import Tiles from "./Tiles";


function Sales(props) {
    const {products} = props;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let tilesElements = products.map(t => <Tiles handleShow={handleShow} key={t.id} tile={t}/>);
    return (
        <div className={"contwainer my-5"}>
            <div className={"row"}>
                {tilesElements}
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Информация</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Заказ оформлен успешно!
                </Modal.Body>
                <Modal.Footer>

                    <Button onClick={handleClose}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Sales;
