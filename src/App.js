import React, { useEffect } from 'react';
import { Switch, Route, Router, Redirect, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
// import './App.css';

// Functional Code
import { history } from './helpers';
import { alertActions } from './actions';
import { PrivateRoute } from './components';

// Pages
import { Login, Home, PageRedirect, Register, Dashboard } from './pages';
import { NavBar } from './components/NavBar';
import * as CodingProblems from './pages/coding-problems';



function App() {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }, []);

  return (

    <Container fluid>
      <div className="col-md-8 offset-md-2">
        {alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        <Router history={history}>
          <NavBar />


          <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <PrivateRoute path='/dashboard' component={Dashboard} type='private' />
            <Route path='/register/:invite_id' component={Register} />
            <Route path="/redirect" component={PageRedirect} />
            <Route path="/problem-one" component={CodingProblems.ProblemOne} />
            <Route path="/problem-two" component={CodingProblems.ProblemTwo} />
            <Route path="/problem-three" component={CodingProblems.ProblemThree} />
            <Route path="/problem-four" component={CodingProblems.ProblemFour} />
          </Switch>

        </Router >
      </div >
    </Container>
  );
}

export { App };
