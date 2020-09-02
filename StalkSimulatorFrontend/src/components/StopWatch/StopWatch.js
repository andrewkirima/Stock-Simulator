import React,{Component} from 'react';
import './StopWatch.css';

export default class StopWatch extends Component {
  constructor(props){
    super(props);
    this.state = {
      clock:0
    };
    this.ticker = this.ticker.bind(this);
  }
  componentDidMount() {
    this.timer = setInterval(this.ticker,1000);
  }
  ticker() {
    this.setState({clock:new Date()-this.props.start})
  }
  render(){
    var clock = Math.round(this.state.clock/1000);
    return(
      <div>
        <p className='hereSince'>you have been here for</p><br/>
        <span className='seconds'>{clock}  Seconds</span>
        {/* <p>{this.props.start}</p> */}
      </div>
    );
  }
}
