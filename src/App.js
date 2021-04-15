import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../src/sass/index.scss';
import Home from './pages/Home';
import Login from './pages/Login';
import NewUser from './pages/NewUser';
import DocumentTitle from 'react-document-title';


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []); 
  return (
    <>
    <DocumentTitle title="Finn den råeste roomie med oss">
    <Router>
      <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Login" component={Login} />
                <Route path="/NewUser" component={NewUser} />
      </Switch>
      {/*<p>{!data ? "Loading..." : data }</p>*/}
    </Router>
    </DocumentTitle>
    </>
  );
}

export default App;
