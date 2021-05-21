import React, {useState} from "react";
import {Button, Card, Grid, Icon, makeStyles, TextField, Typography} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
    root: {
        transition: "transform 0.15s ease-in-out"
    },
    cardHovered: {
        transform: "scale3d(1.05, 1.05, 1)"
    }
});


const Tiles = (props) => {
    const classes = useStyles();
    const [state, setState] = useState({
        raised:false,
        shadow:1,
    })
    debugger
    return (
        <div className="col-3">
            <div className="tile">
                <Card elevation={5} style={{padding: 8, marginBottom: 24, backgroundColor: '#e0dfdf'}}
                      classes={{root: state.raised ? classes.cardHovered : ""}}
                      onMouseOver={()=>setState({ raised: true, shadow:5})}
                      onMouseOut={()=>setState({ raised:false, shadow:1 })}
                      raised={state.raised} zdepth={state.shadow}
                >
                    <div>
                        <img src={props.tile.image} style={{width: "100px"}}/>
                    </div>
                    <div>
                        <Typography>{props.tile.name} {props.tile.description.size}</Typography>
                        <div>Количество на складе: {props.tile.description.count} шт</div>
                        <div>Цена за 1 шт: {props.tile.price} сом</div>
                    </div>
                    <div>
                        <TextField fullWidth size='small' type='number' id="outlined-basic" label="Введите количество" variant="outlined" />
                        <Button
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


const Sales = (props) => {
    const {warehouse} = props;

    let tilesElements = warehouse.map(t => <Tiles tile={t}/>);
    return (
        <div className={"container my-5"}>
            <div className={"row"}>
                {tilesElements}
            </div>
        </div>
    )
}

export default Sales;
