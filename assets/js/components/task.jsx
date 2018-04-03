import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Card, CardBody, CardHeader, Row, Col, Button } from 'reactstrap';

import api from '../api';

function Task(props) {
  let task = props.task;
  let assign = props.type == "self" ?
    <p><b>Task Creator: </b>{task.creator.name} </p>
      : <p><b>Responsible For Completing Task: </b>{task.user.name} </p>

  function delete_task() {
    var answer = confirm("Are you sure you want to delete this task?");
    if (answer == true) {
    api.delete_task(task.id);
    return true;
    }
  }

  function edit_task() {
    $("#edit-form").show();
      props.dispatch({
        type: 'CLEAR_FORM',
      });
    $('input[name="id"]').val(task.id);
  }

  return (
    <Col md="6">
      <Card>
        <CardHeader>
          <Row>
            <Col md="7">
              Name Of Task: {task.title}
            </Col>
            <Col md="5">
              <Button type="button" onClick={edit_task}>Edit</Button>
              <Button type="button" color="warning" onClick={delete_task}>Delete</Button>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <div>
            {assign}
            <p><b>Task Description: </b>{task.description}</p>
            <p><b>Minutes Worked On Task: </b>{task.time_spent}</p>
            <p><b>Task Completed: </b>{task.completed ? "Yes" : "No"}</p>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}

function state2props(state) {
  return {
    form: state.form,
    users: state.users
  };
}

export default connect(state2props)(Task);
