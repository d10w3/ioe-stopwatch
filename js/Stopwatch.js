let React = require('react');


module.exports = React.createClass({

  getInitialState: function(){
    return {
      currentTime: 0,
      currentTimeFormatted: "00:00",
      isRunning: false,
      intervalId: 0
    }
  },
  tick: function(){
    let newTime = this.state.currentTime+1;


    let minutes = Math.floor(newTime/60);
    let minutesFormatted = "";
    let seconds = (newTime%60);
    let secondsFormatted = "";


    if(minutes<10){
      minutesFormatted = "0"+minutes;
    }else{
      minutesFormatted = minutes;
    }

    if(seconds<10){
      secondsFormatted = "0"+seconds;
    }else{
      secondsFormatted = seconds;
    }

    let currentTimeFormatted = minutesFormatted+":"+secondsFormatted;

    this.setState({
          currentTime: newTime,
          currentTimeFormatted: currentTimeFormatted
    });

    console.log(currentTimeFormatted);
  },
  toggleStartStop: function(){
      let self = this;
      if(!this.state.isRunning){
        let intervalId=setInterval(function(){self.tick()}, 1000);
        this.setState({
          isRunning: true,
          intervalId: intervalId
        })
      }else{
        clearInterval(this.state.intervalId);
        this.setState({
          isRunning: false
        })
      }

  },
  reset: function(){
    this.setState({
      currentTime: 0,
      currentTimeFormatted: "00:00"
    })
  },
  render: function(){
        return <div className="jumbotron" style={{width: "200px",marginLeft: "auto", marginRight: "auto",textAlign: "center", marginTop: "30px"}}>
            <div className="label label-default pull-left" style={{fontSize: "22px",width: "190px", position: "relative", top: "-40px",left: "5px"}}><i className="fa fa-clock-o fa-lg"></i> Stopwatch!</div>
            <h1 style={{clear: "both"}}>{this.state.currentTimeFormatted}</h1>
            <button onClick={this.toggleStartStop} className="btn btn-primary" title="Start/Stop"><i className="fa fa-play fa-2x"></i><i className="fa fa-pause fa-2x"></i></button> <button onClick={this.reset} className="btn btn-danger" title="Reset"><i className="fa fa-undo fa-2x"></i></button>
        </div>
  }

});