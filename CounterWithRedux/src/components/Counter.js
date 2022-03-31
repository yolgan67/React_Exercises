import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "react-bootstrap";
import { increaseCount, decreaseCount } from "../actions/counterAction";

const Counter = (props) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Button onClick={props.decreaseCount} variant="danger me-3">
        Decrease
      </Button>
      <span>{props.count} </span>
      <Button onClick={props.increaseCount} variant="primary ms-3">
        Increase
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { count: state.count };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ increaseCount, decreaseCount }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
