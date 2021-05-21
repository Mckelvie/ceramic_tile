import React from "react";
import {Button, Card, Grid, Icon, TextField, Typography} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

const Tiles = (props) => {
    debugger
    return (
        <div className="col-3">
            <div className="tile">
                <Card elevation={5} style={{padding: 8}}>
                    <div>
                        <img src={props.tile.image} style={{width: "100px"}}/>
                    </div>
                    <div>
                        <Typography>{props.tile.name} {props.tile.size}</Typography>
                        <div>Количество на складе: {props.tile.description.count}</div>
                        <div>Цена за 1 шт: {props.tile.price}</div>
                    </div>
                    <div>
                        <TextField fullWidth size='small' type='number' id="outlined-basic" label="Введит количество" variant="outlined" />
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
