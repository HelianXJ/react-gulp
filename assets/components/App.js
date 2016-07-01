import React from 'react';
import { Link } from 'react-router';
import { version } from '../../package.json';

const App = ({ children }) => (
  <div>
    <header>
      <h1>React Starterify {version}</h1>
      <Link to="/about">About</Link>
      <Link to="/dependencies">Powered by</Link>
    </header>
    <section>
      {children || 'Welcome !'}
    </section>
  </div>
);

App.propTypes = { children: React.PropTypes.object };

export default App;
