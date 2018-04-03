import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Banner from './banner';
import NewTask from './new-task';

export default function Main(props) {
  return (
    <div>
      <Route path="/" exact={true} render={() =>
        <Banner tasks={props.tasks} user={props.user} />
      } />
      <Route path="/tasks" exact={true} render={() =>
        <NewTask />
      } />
    </div>
  );
}