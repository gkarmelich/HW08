import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Label, Input } from 'reactstrap';

import api from '../api';

function Registration(props) {
  function update(ev) {
    let tgt = $(ev.target);
    let data = {};
    data[tgt.attr('name')] = tgt.val();
    let action = {
      type: 'UPDATE_REGISTRATION_FORM',
      data: data
    };
    props.dispatch(action);
  }


  function submit(ev) {
      api.create_user(props.form);
  }


  return (
    <div id="registration-form" style={{padding: "4ex"}}>
      <h2 id="center" >Task Tracker: create an account below or log in at the top right if you already have one</h2>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" value={props.form.email}
          onChange={update} placeholder="enter your email address" />
      </FormGroup>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" value={props.form.name}
          onChange={update} placeholder="enter your name" />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password (8 characters or more)</Label>
        <Input type="password" name="password" value={props.form.password}
          onChange={update} placeholder="enter your password" />
      </FormGroup>
      <Button onClick={submit}>Create Account</Button>
    </div>
  );
};

function state2props(state) {
  console.log("STATE");
  console.log(state);
  return {
    form: state.register
  };
}

export default connect(state2props)(Registration);
