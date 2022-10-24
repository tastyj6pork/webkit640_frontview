import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import history from './history';
import KakaoRedirectHandler from '../service/KakaoRedirectHandler';
import App from '../App';
import Home from '../routes/Main/Main'
import Login from '../routes/Login/Login'

function AppRouter(){
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/auth/Oauth/kakao" component={KakaoRedirectHandler}/>
            </Switch>
        </ConnectedRouter>
    )
}

export default AppRouter;