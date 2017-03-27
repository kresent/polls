import React, { PropTypes, PureComponent } from 'react';



export default class TextAnswer extends PureComponent {
  render() {
    return (
      <div>
        <h1>{this.props.val}</h1>
      </div>
    );
  }
}

TextAnswer.propTypes = {
  val: PropTypes.string
};
