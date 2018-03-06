import React, { Component } from 'react';
import '../stylesheets/TennisDayCount.css';

class TennisDayCount extends Component {
  render() {
    return (
      <div className="TennisDayCount">
        <div className="total-days">
          <span>Total Days: {this.props.total}</span>
        </div>
        <div className="competition-days">
          <span>Competition Days: {this.props.competition}</span>
        </div>
        <div className="casual-days">
          <span>Casual Days: {this.props.casual}</span>
        </div>
        <div className="goal-days">
          <span>Goal: {this.props.goal}</span>
        </div>
      </div>
    )
  }
}

export default TennisDayCount;
