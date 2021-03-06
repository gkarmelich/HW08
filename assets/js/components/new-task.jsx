import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Label, Input } from 'reactstrap';

import api from '../api';

function NewTask(props) {
  function update(ev) {
    let tgt = $(ev.target);
    let data = {};
    if (tgt.attr('name') == "completed") {
      data['completed'] = tgt.is(':checked') ? true : false;
    }
    else {
      data[tgt.attr('name')] = tgt.val();
    }
    let action = {
      type: 'UPDATE_FORM',
      data: data
    };
    props.dispatch(action);
  }

  function submit(ev) {
    api.submit_task(props.form);
  }

  let users = (_.map(props.users, (uu) =>
  <option key={uu.id} value={uu.id}>{uu.name}</option>));

  return (
    <div style={{padding: "4ex"}}>
      <h2>Create A New Task</h2>
      <FormGroup>
        <Label for="user_id">Responsible For Completing Task:</Label>
        <Input type="select" name="user_id" value={props.form.user_id}
          onChange={update}>
          {users}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="title">
          Name Of Task:
        </Label>
        <Input type="text" name="title" value={props.form.title}
          maxLength="75" onChange={update} />
      </FormGroup>
      <FormGroup>
        <Label for="description"> Task Description:</Label>
        <Input type="textarea" name="description" value={props.form.description}
          onChange={update} />
      </FormGroup>
      <FormGroup>
        <Label for="time_spent">Minutes Worked On Task: </Label>
        <Input type="number" name="time_spent" min="0" step="15"
          value={props.form.time_spent}  onChange={update} />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" name="completed" onChange={update}
            checked={props.form.completed ? "checked" : false} />
          Check To Mark Task Completed
        </Label>
      </FormGroup>
      <br />
      <Button onClick={submit} >Create Task</Button>
    </div>
  );
};

function state2props(state) {
  return {
    form: state.form,
    users: state.users
  };
}

export default connect(state2props)(NewTask);
