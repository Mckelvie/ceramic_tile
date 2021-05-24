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
            <Grid container style={{marginTop: 12, position: 'sticky', top: 0}}>
                <Grid item xs={4}>
                    <Card style={{backgroundColor: '#FFD700', marginInline: 8}}>
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
                <Grid item xs={4}>
                    <Card style={{backgroundColor: '#42aae3', marginInline: 8}}>
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
                <Grid item xs={4}>
                    <Card style={{backgroundColor: '#31f34a', marginInline: 8}}>
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
            </Grid>
        </Container>
    )
}

export default Dashboard;
