import React from 'react';
import { mount } from 'enzyme';
import Counter from '../Counter.component';

describe('Counter', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Counter />);
  });

  it('should render', () => {
    expect(wrapper).not.toBeNull();
  });

  it('should show my default text', () => {
    expect(wrapper.find('#span-count').text()).toEqual('1');
  });

  it('should increment count by 1', () => {
    wrapper.find('#btn-increment').simulate('click');
    expect(wrapper.find('#span-count').text()).toEqual('2');
  });

  it('should increment count by 4', () => {
    wrapper.find('#btn-increment').simulate('click');
    wrapper.find('#btn-increment').simulate('click');
    wrapper.find('#btn-increment').simulate('click');
    wrapper.find('#btn-increment').simulate('click');
    expect(wrapper.find('#span-count').text()).toEqual('5');
  });
});
