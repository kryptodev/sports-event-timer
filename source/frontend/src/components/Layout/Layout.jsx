import React from "react";
import PropTypes from "prop-types";

import Header from "../Header/Header";
import RaceTable from "../RaceTable/RaceTable";
import SimulationTypeSelector from "../SimulationTypeSelector/SimulationTypeSelector";

// Layout component holds the entire Layout of the application.
const Layout = props => (
  <div className="container">
    <div className="row">
      <div className="col-lg-10 mx-auto">
        <Header />

        <SimulationTypeSelector
          changeSimulationTypeHandler={props.changeSimulationTypeHandler}
          simulationType={props.simulationType}
          raceInProgress={props.raceInProgress}
        />

        <div className="text-center">
          <span className="badge badge-pill badge-primary text-center">
            800m = Inside Finish Corridor
          </span>
          <span className="badge badge-pill badge-primary text-center">
            1000m = Finish Line
          </span>
        </div>

        <RaceTable
          athletes={props.athletes}
          raceInProgress={props.raceInProgress}
          lastKnownError={props.lastKnownError}
          manualStop={props.manualStop}
        />

        {props.children}
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  athletes: PropTypes.array,
  changeSimulationTypeHandler: PropTypes.func,
  children: PropTypes.any,
  lastKnownError: PropTypes.string,
  raceInProgress: PropTypes.bool,
  simulationType: PropTypes.symbol
};

export default Layout;
