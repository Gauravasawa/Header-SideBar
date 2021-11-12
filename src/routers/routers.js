import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Headers from "../shared/Header1/Header";
import file1 from "../components/file1";
import file2 from "../components/file2";
import file3 from "../components/file3";

class routers extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="#" />
          <Route exact path="/" component={file1} />
          <Route exact path="/" component={Headers} />
          <Route exact path="/file2" component={file2} />
          <Route exact path="/file3" component={file3} />
       
          {/* for nested routes
             <Route exact path="/home/family" component={Family} />
          */}
        </Switch>
      </div>
    );
  }
}

export default routers;
