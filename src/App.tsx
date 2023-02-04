import { Router, Route } from 'wouter'
import { LandingPage } from './pages';
import { Navbar } from './components';

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Router base="/personal-website">
        <Route path="/"><LandingPage /></Route>
      </Router>
    </div>
  );
}
