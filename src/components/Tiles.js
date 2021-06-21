import React, {useState} from "react";
import firebase from "firebase";
import {Button, Card, makeStyles, TextField, Typography} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";



const useStyles = makeStyles({
    root: {
        transition: "transform 0.15s ease-in-out"
    },
    cardHovered: {
        transform: "scale3d(1.05, 1.05, 1)"
    }
});

const Tiles = (props) => {
    debugger
    const classes = useStyles();
    const [state, setState] = useState({
        raised:false,
        shadow:1,
    })

    const [order, setOrder] = useState(0);



    const db = firebase.firestore();
    const ref = db.collection('products');

    const click = async () => {
        try {
            const r = await ref.where('id', '==', props.tile.id).get();
            // console.log(r)
            if (r.size > 0) {
                const s = await r.docs[0].data();
                await ref.doc(r.docs[0].id).update({
                    ...s,
                    count: +s.count - order,
                });
            }

            const d = await db.collection('orders').doc('order').set({
                count: +props.state.orders.count + 1
            })

            const er = await db.collection('number_of_slabs_sold').doc('slabs').set({
                count: +props.state.slabs.count + order
            })

            const rtx = await db.collection('total_revenues').doc('proceeds').set({
                sum: +props.state.total_revenues.sum + (order + props.tile.price) - 1
            })



            console.log(d);
            props.handleShow();
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className="col-3">
            <div className="tile">
                <Card elevation={5} style={{padding: 8, marginBottom: 24, backgroundColor: '#f8f1f1'}}
                      classes={{root: state.raised ? classes.cardHovered : ""}}
                      onMouseOver={()=>setState({ raised: true, shadow:5})}
                      onMouseOut={()=>setState({ raised:false, shadow:1 })}
                      raised={state.raised} zdepth={state.shadow}
                >
                    <div>
                        <img src={props.tile.image} style={{width: "100px"}}/>
                    </div>
                    <div>
                        <Typography>{props.tile.name} </Typography>
                        <div>Количество на складе: {props.tile.count} шт</div>
                        <div>Цена за 1 шт: {props.tile.price} сом</div>
                    </div>
                    <div>
                        <TextField fullWidth onChange={(e) => setOrder(+e.target.value)} size='small' type='number'  id="outlined-basic" label="Введите количество" variant="outlined" />
                        <Button
                            onClick={click}
                            className={'mt-2'}
                            fullWidth
                            variant="contained"
                            color="primary"
                            endIcon={<SendIcon/>}
                        >Оформить заказ</Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Tiles;
