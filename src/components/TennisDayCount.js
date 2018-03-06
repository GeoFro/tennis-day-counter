import React, { Component } from 'react';
import '../stylesheets/TennisDayCount.css';

class TennisDayCount extends Component {
  calcPercentage(number) {
    return((number * 100) + "%")
  }
  calcGoalProgress(total, goal) {
    return this.calcPercentage(total/goal)
  }
  calcTotalDays(val, val2) {
    return (val + val2)
  }
  render() {

    const TotalDays = this.calcTotalDays(this.props.competition, this.props.casual);

    return (
      <div className="TennisDayCount">
        <div className="total-days">
          <span>Total Days: {this.calcTotalDays(this.props.competition, this.props.casual)}</span>
        </div>
        <div className="competition-days">
          <span>Competition Days: {this.props.competition}</span>
        </div>
        <div className="casual-days">
          <span>Casual Days: {this.props.casual}</span>
        </div>
        <div className="goal-days">
          <span>Days Goal: {this.props.goal}</span>
        </div>
        <div className="goal-progress">
          <span>Goal Progress: {this.calcGoalProgress(TotalDays, this.props.goal)}</span>
        </div>
      </div>
    )
  }
}

export default TennisDayCount;
