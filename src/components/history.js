import React, {Component} from 'react';
import {Typography} from "@material-ui/core";

class History extends Component {
  render() {
    return (
      <div className="row align-items-center" style={{padding: 16}}>
        <div>
          <img src="https://wdcnet-usa.com/wp-content/uploads/2020/10/dsc1-01.png" style={{width: "100px"}}/>
        </div>
        <div style={{width: '30%'}}>
          <Typography>Керамическая плитка настенная ВКЗ 35х25</Typography>
        </div>
        <div style={{width: 5, height: 100, backgroundColor: '#D6D6D6'}}/>
        <div style={{width: '30%'}}>
          <Typography>Продано: -800</Typography>
        </div>
        <div style={{width: 5, height: 100, backgroundColor: '#D6D6D6'}}/>
        <div style={{width: '30%'}}>
          <Typography>+ 8900 сом</Typography>
        </div>
      </div>
    );
  }
}

export default History;
