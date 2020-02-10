import React from 'react';
import './TimelineInfo.css';
import { Card } from 'antd';
function TimelineInfo(props) {
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title={props.title} bordered={false} style={{ width: 300 }}>
        <p>Message No.{props.messageNum}</p>
        <p>Tweeter: {props.tweeter}</p>
        <p>Text: {props.text}</p>
        <p>Date: {props.date}</p>
      </Card>
    </div>
  );
}

export default TimelineInfo;
