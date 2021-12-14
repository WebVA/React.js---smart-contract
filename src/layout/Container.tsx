import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../routes';

function Container({ ...props }: any) {
    const { classes } = props;
      const switchRoutes = (
        <Switch>
            {routes.map((prop, key) => {
                if (prop.layout === '/admin') {
                    return (
                        <Route
                            path={prop.layout + prop.path}
                            component={prop.component}
                            key={key}
                        />
                    );
                }
                return null;
            })}
        </Switch>
    );

    return (
        <div className={classes.content}>
            <div className={classes.container}>
                {switchRoutes}
            </div>
        </div>
    );
};
export default Container;