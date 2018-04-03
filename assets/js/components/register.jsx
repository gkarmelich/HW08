import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import Registration from './registration';

export default function Session(props) {
  function register() {
    $("#registration-form").show();
  }

  return (
    <div>
      <Row>
        <Col md="2"></Col>
        <Col md="8">
          <Route path="/" exact={true} render={() =>
            <Registration />
          } />
        </Col>
        <Col md="2"></Col>
      </Row>
    </div>
  );
}