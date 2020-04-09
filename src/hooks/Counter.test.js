import React from 'react';
import { mount } from 'enzyme';
import useCounterHook from './Counter.hook';
import { act } from 'react-dom/test-utils';

describe('Counter Hook', () => {
  let results;
  const renderHook = hook => {
    function HookWrapper() {
      results = hook();
      return null;
    }
    mount(<HookWrapper />);
    return results;
  }

  it('should increment', () => {
    renderHook(useCounterHook);
    expect(results.count).toEqual(0)

    act(() => {
      results.increment();
    })

    act(() => {
      results.increment();
    })

    act(() => {
      results.increment();
    })

    expect(results.count).toEqual(3)
  });
});
