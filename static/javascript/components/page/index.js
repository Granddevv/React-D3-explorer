import React from "react";
import Rx from "rxjs/Rx";
import { connect } from "react-redux";
import { HashRouter, Route } from 'react-router-dom';

import MainMenu from "./main-menu";
import BarCharts from "../bar-charts";
import CircleCharts from "../circles-charts";
import DynamicBarCharts from "../dynamic-data-charts";

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('this.props:', this.props);

    return (
      <HashRouter>
        <div>
          <Route path="/" component={MainMenu}/>

          <Route exact={true} path="/" component={BarCharts}/>
          <Route path="/bar" component={BarCharts}/>
          <Route path="/pie" component={null}/>
          <Route path="/circle" component={CircleCharts}/>
          <Route path="/dynamic" component={DynamicBarCharts}/>
        </div>
      </HashRouter>
    );
  }
}
