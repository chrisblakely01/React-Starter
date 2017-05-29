import expect from 'expect';
import React from 'react';
import {mount,shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import HomePage from './HomePage';

function setup(saving){
  return shallow(<HomePage />);
}

describe('HomePage renders correctly', () => {
  it('renders hero, header, and button', () => {
    const wrapper = setup(false);
    expect(wrapper.find('.jumbotron').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('React Starter Kit by Chris');
    expect(wrapper.find('.btn').length).toBe(1);
  });
});
