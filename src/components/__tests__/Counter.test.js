import React from 'react';
import { mount } from 'enzyme';
import Counter from '../Counter.component';

describe('Counter', () => {
  const onCountChange = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = mount(<Counter onCountChange={onCountChange} />);
  });

  it('should render', () => {
    expect(wrapper).not.toBeNull();
  });

  it('should show my default text', () => {
    expect(wrapper.find('#p-count').text()).toEqual('Count: 0');
  });

  it('should increment count by 1', () => {
    wrapper.find('#btn-count').simulate('click');
    expect(wrapper.find('#p-count').text()).toEqual('Count: 1');
  });

  it('should increment count by 4', () => {
    wrapper.find('#btn-count').simulate('click');
    wrapper.find('#btn-count').simulate('click');
    wrapper.find('#btn-count').simulate('click');
    wrapper.find('#btn-count').simulate('click');
    expect(wrapper.find('#p-count').text()).toEqual('Count: 4');
  });

  it('should call onCountChange', () => {
    expect(onCountChange).toBeCalledTimes(1);
    wrapper.find('#btn-count').simulate('click');
    expect(onCountChange).toBeCalledTimes(2);
  });
});
