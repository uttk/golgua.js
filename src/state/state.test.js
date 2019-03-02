import chai from 'chai';
import { State } from './state';
import { Types } from '../types/types';

/* eslint-disable */

const assert = chai.assert;

class TestState extends State {
  constructor() {
    super();

    this.types = {
      test: Types.string({ default_value: 'hello' }),
      id: Types.number({ default_value: 8000 }),
    };
  }
}

describe('State Method Test', () => {
  let test_state = null;

  before(() => {
    test_state = new TestState();
    test_state.state = test_state.defaultValue();
  });

  context('defaultValue function', () => {
    it('equal default value', () => {
      const default_value = test_state.defaultValue();
      assert.deepEqual(default_value, { test: 'hello', id: 8000 });
    });

    it('deep copy', () => {
      const default_value = test_state.defaultValue();
      const default_value2 = test_state.defaultValue();

      assert.isFalse(default_value === default_value2);
    });
  });
});

/* eslint-disable */
