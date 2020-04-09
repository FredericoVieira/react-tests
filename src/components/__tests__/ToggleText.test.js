import React from 'react';
import { shallow } from 'enzyme';
import ToggleText from '../ToggleText.component';

describe('ToggleText', () => {

  it('shoud show text', () => {
    const wrapper = shallow(<ToggleText />);
    const text = wrapper.find('#p-toggle');
    expect(text.text()).toBe('Text goes here');
  });

  it('shoud hide text when button is clicked', () => {
    const wrapper = shallow(<ToggleText />);
    const button = wrapper.find('#btn-toggle');
    button.simulate('click');
    const text = wrapper.find('#p-toggle');
    expect(text.length).toBe(0);
  });
});
