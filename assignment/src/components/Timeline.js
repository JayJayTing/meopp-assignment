import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getTimeline, getUserPic } from '../actions/index';
import { Button, Card, Avatar } from 'antd';

function Timeline(props) {
  const [username, setUsername] = useState('');

  const onSubmit = () => {
    props.getTimeline({ screen_name: username, count: 10 });
    props.getUserPic(username);
  };

  const renderCards = () => {
    return Object.values(props.timeline).length == 0
      ? []
      : Object.keys(props.timeline).map(key => {
          return (
            <div>
              <Card
                title={`Message No.${parseInt(key) + 1},  Date: ${
                  props.timeline[key].created_at
                }`}
                style={{ width: 500 }}>
                <p></p>

                <p>Message: {props.timeline[key].text}</p>
              </Card>
              <br></br>
            </div>
          );
        });
  };

  return (
    <div>
      <form>
        <input
          value={username}
          onChange={e => {
            setUsername(e.target.value);
          }}></input>
        <Button onClick={onSubmit}> Submit</Button>
      </form>

      <div>
        <h2>User: {username}</h2>
        <Avatar
          src={
            props.userPic.profile_image_url
              ? props.userPic.profile_image_url.replace('_normal', '')
              : null
          }
          shape="square"
          size={200}
          icon="user"
        />

        {renderCards()}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    timeline: state.timeline,
    userPic: state.userPic
  };
};

export default connect(mapStateToProps, { getTimeline, getUserPic })(Timeline);
