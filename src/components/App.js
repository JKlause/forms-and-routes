import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../containers/HomePage';
import ListPage from '../containers/ListPage';
import DetailPage from '../containers/DetailPage';
import NotFound from '../components/NotFound';

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/listpage/:searchQuery" component={ListPage} />
          <Route path="/listpage" component={ListPage} />
          <Route path="/detailpage/:id" component={DetailPage} />
          <Route path="/" component={NotFound} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}
