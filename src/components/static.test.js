import Static from './static';
import React from 'react';
import { mount, shallow } from 'enzyme';

describe('<Static />', () => {
  it('allows us to set props', () => {
    const wrapper = mount( < Static txt = "baz" / > );
    expect(wrapper.props().txt).to.equal('baz');
    wrapper.setProps({ txt: 'foo' });
    expect(wrapper.props().txt).to.equal('foo');
  });
});

describe('test', () => {
  it('works', () => {
    expect(Static).to.exist;
  });
  it('works again', () => {
    expect('hi').to.equal('hi');
    //throw (new Error('Property does not exist in model schema.'));
  });
});