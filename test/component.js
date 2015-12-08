import { expect } from 'chai';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import Component from '../src/component';

describe('Component', () => {
  let instance;

  beforeEach(() => {
    const shallowRenderer = createRenderer();
    shallowRenderer.render(React.createElement(Component, {}, 'child text'));
    instance = shallowRenderer.getRenderOutput();
  });

  it('Should pass', () => {
    console.log(instance);
    expect(instance.type).to.equal('div');
    expect(instance.props.foo).to.equal(1);
  });
});
