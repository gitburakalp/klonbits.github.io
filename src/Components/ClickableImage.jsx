import React, { Component } from 'react';

export class ClickableImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a
        className={this.props.class}
        href={this.props.to}
        role="button"
      >
        <img
          className={this.props.imgClass}
          src={this.props.imgSource}
          alt={this.props.imgInfo}
        />
      </a>
    );
  }
}

export default ClickableImage;
