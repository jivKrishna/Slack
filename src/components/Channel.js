import React, {Component} from "react";

class Channel extends Component{
    render(){
      return  <li>{this.props.name}</li>
    }
}

class ChannelList extends Component{
  render(){
    return(
      <ul>
        {this.props.channels.map((channel, index) => {
          return <Channel key={index} name={channel.name} />
        })}
      </ul>
    );    
  }
}

class ChannelForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      channelName: ""
    }
  }

  onSubmit(event){
    console.log(this.state.channelName)
    event.preventDefault()
  }

  onChange(event){
    this.setState({channelName: event.target.value});
  }

  render(){
    return(
      <form onSubmit={this.onSubmit.bind(this)}>
        <input type="text" value={this.state.channelName} onChange={this.onChange.bind(this)} />
      </form>
    );
  }
}

class ChannelSection extends Component{
  constructor(props){
    super(props);
    this.state = {
      channels: [{name: "Hardware Support"}, {name: "Software Support"}],
      channelName: ""
    }
  }

  render(){
    return(
      <div>
        <ChannelList channels={this.state.channels} />
        <ChannelForm  />
    </div>
    );
  }
}

export default ChannelSection;