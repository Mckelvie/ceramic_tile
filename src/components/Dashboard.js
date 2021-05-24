import React from "react";
import {
    Card,
    CardActionArea,
    CardContent,
    Container,
    Grid,
    Typography
} from "@material-ui/core";
import AssessmentIcon from '@material-ui/icons/Assessment';
import PaymentIcon from '@material-ui/icons/Payment';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const Dashboard = () => {
    return (
        <Container>
            <Grid container className={"row"} style={{marginTop: 12, position: 'sticky', top: 0,  display: 'flex', justifyContent: 'space-around'}}>
               <div className="col">
                   <Grid item >
                       <Card style={{backgroundColor: '#FFD700', marginInline: 8, height: 160}}>
                           <CardActionArea>
                               <CardContent>
                                   <AssessmentIcon fontSize={"large"}/>
                                   <Typography gutterBottom variant="h5" component="h4">
                                       Количество проданных плит
                                   </Typography>
                                   <Typography variant="h6">
                                       0
                                   </Typography>
                               </CardContent>
                           </CardActionArea>
                       </Card>
                   </Grid>
               </div>
               <div className="col">
                   <Grid item >
                       <Card style={{backgroundColor: '#42aae3', marginInline: 8, height: 160}}>
                           <CardActionArea>
                               <CardContent>
                                   <PaymentIcon fontSize={"large"}/>
                                   <Typography gutterBottom variant="h5" component="h4">
                                       Общая выручка
                                   </Typography>
                                   <Typography variant="h6">
                                       0
                                   </Typography>
                               </CardContent>
                           </CardActionArea>
                       </Card>
                   </Grid>
               </div>
                <div className="col">
                    <Grid item >
                        <Card style={{backgroundColor: '#31f34a', marginInline: 8, height: 160}}>
                            <CardActionArea>
                                <CardContent>
                                    <AssignmentIndIcon fontSize={"large"}/>
                                    <Typography gutterBottom variant="h5" component="h4">
                                        Количество заказов
                                    </Typography>
                                    <Typography variant="h6">
                                        0
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </div>
            </Grid>
        </Container>
    )
}

export default Dashboard;
