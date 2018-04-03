import React from 'react';
import Task from './task';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Row } from 'reactstrap';

import EditTask from './task-edit';

export default function Banner(props) {
  let assigned = _.map(props.tasks, function(tt) {
    if (props.user == tt.user.id) {
      return <Task key={tt.id} task={tt} id={tt.id} type={"self"} />;
    }
  });
  let created = _.map(props.tasks, function(tt) {
    if (props.user == tt.creator.id && props.user != tt.user.id) {
      return <Task key={tt.id} task={tt} id={tt.id} type={"other"} />;
    }
  });

  return (
    <div>
      <Route path="/" exact={true} render={() =>
        <EditTask />
      } />
      <h3> Tasks You Are Responsible For Completing</h3>
      <Row>{assigned}</Row>
      <h3> Tasks You Created And Assigned</h3>
      <Row>{created}</Row>
    </div>
  );
}
