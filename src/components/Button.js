import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.props.handleClick.bind(this);
  }

  // handleClick() {
  //   alert("hello!!!!")
  // }

  render() {
    return (
      <button className="button middle calculate" onClick={this.props.handleClick}>
        {this.props.text}
      </button>
    );
  }
}

export default Button