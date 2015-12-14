import { expect } from 'chai';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import <%= component_name %> from '../src/<%= component_file_name %>';

describe('<%= component_name %>', () => {
  let instance;

  beforeEach(() => {
    const shallowRenderer = createRenderer();
    shallowRenderer.render(React.createElement(<%= component_name %>, {}, 'child text'));
    instance = shallowRenderer.getRenderOutput();
  });

  it('should be a div', () => {
    expect(instance.type).to.equal('div');
  });

  it('should have prop foo equals 1', () => {
    expect(instance.props.foo).to.equal(1);
  });
});
