import React, { Component } from 'react';
import '../stylesheets/TennisDayCount.css';

class TennisDayCount extends Component {
  render() {
    return (
      <div className="TennisDayCount">
        <div className="total-days">
          <span>Total Days: 6</span>
        </div>
        <div className="competition-days">
          <span>Competition Days: 2</span>
        </div>
        <div className="casual-days">
          <span>Casual Days: 4</span>
        </div>
      </div>
    )
  }
}

export default TennisDayCount;
