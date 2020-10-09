import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf } from '../actions/actions';
import Smurf from "./Smurf";

const SmurfList = ({ getSmurf, isFetching, error, smurfs }) => {

    useEffect(() => {
        getSmurf();
       }, [getSmurf]);

  return (
  <div>
      {isFetching ? (
        <h3>Promise to be smurfin' fast!...</h3>
      ) : (
        <div>
          {smurfs.map((smurf) => {
            return <Smurf key={smurf.id} smurf={smurf} />;
          })}
        </div>
      )}
      {error !== "" ? <h4 className="error">{error}</h4> : null}
  </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error,
  };
};

const mapDispatchToProps = { getSmurf };

export default connect(mapStateToProps, mapDispatchToProps)(SmurfList);