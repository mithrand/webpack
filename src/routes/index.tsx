import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loading from 'components/Loading';
import EntitySection from 'components/EntitySection';
import sectionsConfig from 'globals/SectionsConfig';

/* Routes will be generated using global/SectionsConfig */
const routes = sectionsConfig
                .map(section => (
                  <Route  path={section.routePath} 
                          render={props => <section.component {...props} {...section} />}
                    />
                ));

const AppContent = () => (
  <div className="layout-viewport">
    <Switch>
      {routes}
    </Switch>
  </div>
);

export default AppContent;
