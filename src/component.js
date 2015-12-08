import React from 'react';

export default class Component extends React.Component {
  static defaultProps = {
    foo: 1
  };

  render() {
    return <div {...this.props}>{this.props.children}</div>;
  }
};
