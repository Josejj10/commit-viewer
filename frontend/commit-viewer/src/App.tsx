import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import './App.scss';
import { Commits } from './pages/Commits';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container className="mt-4">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/commits" component={Commits} exact />
          <Redirect to="/" />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
