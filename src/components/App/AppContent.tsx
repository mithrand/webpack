import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loading from 'components/Loading';

const AppContent = () => (
  <div className="layout-viewport">
    <Switch>
      <Route exact path="/" render={props => <Loading {...props} show={false} local={true}/> } />
      <Route exact path="/ips" render={props => <Loading {...props} show={false} local={true}/> } />
      <Route exact path="/alerts" render={props => <Loading {...props} show={true} local={true}/> } />
      <Route exact path="/domains" render={props => <Loading {...props} show={true} local={true}/> } />
      <Route exact path="/certificates" render={props => <Loading {...props} show={true} local={true}/> } />
      <Route exact path="/github" render={props => <Loading {...props} show={true} local={true}/> } />
      <Route exact path="/pastebin" render={props => <Loading {...props} show={true} local={true}/> } />
      <Route exact path="/email" render={props => <Loading {...props} show={true} local={true}/> } />
    </Switch>
  </div>
);

export default AppContent;
