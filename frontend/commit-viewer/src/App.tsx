import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import './App.scss';
import { Commits } from './pages/Commits';
import { RelayEnvironment } from './features/services/commits.service';

const App: React.FC = () => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={<Spinner animation="border" role="status" />}>
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
      </Suspense>
    </RelayEnvironmentProvider>
  );
};

export default App;
