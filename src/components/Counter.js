import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from '../actions/counterAction';

const Counter = ({ counter, inc, dec }) => {
  return (
    <div>
      <button
        onClick={() => {
          inc();
        }}
      >
        +
      </button>
      {counter}
      <button
        onClick={() => {
          dec();
        }}
      >
        -
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  inc: () => dispatch(increment()),
  dec: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
