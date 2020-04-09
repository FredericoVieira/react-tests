import React from 'react';
import { mount } from 'enzyme';
import useCounter from './useCounter.hook';
import { act } from 'react-dom/test-utils';
import cases from 'jest-in-case';

describe('useCounter', () => {
  let results;
  const renderHook = hook => {
    function HookWrapper() {
      results = hook();
      return null;
    }
    mount(<HookWrapper />);
    return results;
  }

  it('should increment by 1', () => {
    renderHook(useCounter)
    expect(results.count).toEqual(0)

    act(() => {
      results.increment();
    })

    expect(results.count).toEqual(1)
  });

  it('should decrement by 1', () => {
    renderHook(() => useCounter({ initialCount: 1 }))
    expect(results.count).toEqual(1)

    act(() => {
      results.decrement();
    })

    expect(results.count).toEqual(0)
  });

  it('should increment by 3', () => {
    renderHook(() => useCounter({ step: 3 }))
    expect(results.count).toEqual(0)

    act(() => {
      results.increment();
    })

    expect(results.count).toEqual(3)
  });

  cases(
    'useCounter operations',
    ({ step, initialCount, postIncrement, postDecrement }) => {
      renderHook(() => useCounter({ initialCount, step }))

      act(() => {
        results.increment();
      })

      expect(results.count).toEqual(postIncrement)

      act(() => {
        results.decrement();
      })

      expect(results.count).toEqual(postDecrement)
    },
    {
      basic: {
        postIncrement: 1,
        postDecrement: 0
      },
      initialCount: {
        initialCount: 2,
        postIncrement: 3,
        postDecrement: 2
      },
      step: {
        step: 2,
        postIncrement: 2,
        postDecrement: 0
      },
      'initial count and step': {
        initialCount: 5,
        step: 2,
        postIncrement: 7,
        postDecrement: 5
      }
    }
  )
});



