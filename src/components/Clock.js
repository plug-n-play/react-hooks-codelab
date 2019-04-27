import React from 'react';

class ClockClass extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isTimeHourBased: true
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  changeTimeFormat() {
    this.setState({
      isTimeHourBased: !this.state.isTimeHourBased
    })
  }

  render() {
    let format = this.state.isTimeHourBased ? undefined : 'en-us';

    return (
      <div>
        <h1>OLX Office Mein Time Check Kar Le!</h1>
        <h2>{this.state.date.toLocaleTimeString(format)}</h2>

        <button className="btn">Toggle Format</button>
      </div>
    );
  }
}

export default function Clock() {
  return (
    <>
      <ClockClass />
    </>
  );
}
