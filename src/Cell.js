import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props){
    super(props)
    this.state = {
      color: props.value
    }
  }

  clickListener = () => {
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div className="cell" onClick={this.clickListener} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
