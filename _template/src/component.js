import React from 'react';

export default class <%= component_name %> extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  }

  static defaultProps = {
    foo: 1
  }

  render() {
    return <div {...this.props}>{this.props.children}</div>;
  }
}
