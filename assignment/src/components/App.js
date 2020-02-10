import React from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'antd';
import { getTimeline, getUserPic } from '../actions/index';
import dotenv from 'dotenv';
import Timeline from './Timeline';
import 'antd/dist/antd.css';

function App(props) {
  dotenv.config();
  //props.getUserPic('phlpchn');
  //props.getTimeline({ screen_name: 'phlpchn', count: 10 });
  return (
    <div className="App">
      <Timeline></Timeline>
    </div>
  );
}

export default connect(null, { getTimeline, getUserPic })(App);
