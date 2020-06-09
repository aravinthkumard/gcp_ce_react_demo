import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = ({
      year: '',
      M_month: '',
      month: 1,
      day: 1,
      week: 1,
      hour: 12,
      Minute: 1,
      second: 1,
      Zodiac: 'Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces'.split(','),
      M_months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Spt", "Oct", "Nov", "Dec"],
    })
  }

  componentWillMount() {
    setInterval(() => {
      let time = new Date()
      this.setState({
        year: this.state.Zodiac[time.getUTCFullYear() % 12],
        M_month: this.state.M_months[time.getUTCMonth()],
        month: time.getMonth(),
        day: time.getDate(),
        week: time.getDay(),
        hour: time.getHours(),
        Minute: time.getMinutes(),
        second: time.getSeconds()
      })
    }, 1000)

  }
  array = length => Array.from({ length }).map((v, k) => k).map(x => x + 1);
  addPreZero = num => {
    if (num >= 10) return num
    return '0' + num
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='msg'>
            <div className='year'>
              <span>
                AWS React Demo</span>
            </div>
          </div>
          <div className='box'>
            {this.array(12).map((x, index) => {
              return (
                <div key={index} className={`month item ${index === (this.state.month - 1) ? "active" : ""}`} style={{ transform: `rotate(${index * 30 - 30 * (this.state.month - 1)}deg)` }}>
                  {`${x} Month`}
                </div>
              )
            })}

            {this.array(30).map((x, index) => {
              return (
                <div key={index} className={`day item ${index === (this.state.day - 1) ? "active" : ""}`} style={{ transform: `rotate(${index * 12 - 12 * (this.state.day - 1)}deg)` }}>
                  {`${x} Days`}
                </div>
              )
            })}

            {this.array(24).map((x, index) => {
              return (
                <div key={index}
                  className={`hour item ${index === (this.state.hour - 1) ? "active" : ""}`}
                  style={{ transform: `rotate(${index * (360 / 24) - (360 / 24) * (this.state.hour - 1)}deg)` }}>
                  {`${x} Hr`}
                </div>
              )
            })}

            {this.array(60).map((x, index) => {
              return (
                <div key={index}
                  className={`Minute item ${index === (this.state.Minute - 1) ? "active" : ""}`}
                  style={{ transform: `rotate(${index * (360 / 60) - (360 / 60) * (this.state.Minute - 1)}deg)` }}>
                  {`${x} Min`}
                </div>
              )
            })}

            {this.array(60).map((x, index) => {
              return (
                <div key={index}
                  className={`second item ${index === (this.state.second - 1) ? "active" : ""}`}
                  style={{ transform: `rotate(${index * (360 / 60) - (360 / 60) * (this.state.second - 1)}deg)` }}>
                  {`${x} Sec`}
                </div>
              )
            })}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
