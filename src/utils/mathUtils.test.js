import React from 'react';
import mathUtils from '../utils/mathUtils';

it('mathUtils', () => {
  expect(mathUtils.evaluate('1 + 2')).toEqual(3);
  // expect(mathUtils.evaluate('0.1 + 0.2')).toEqual(0.3);
  expect(mathUtils.evaluate('3 + 2')).toEqual(5);
  expect(mathUtils.evaluate('7 - 4')).toEqual(3);
  expect(mathUtils.evaluate('20 * 8 - 3')).toEqual(157);
  expect(mathUtils.evaluate('(43 + 2) * 2')).toEqual(90);
  expect(mathUtils.evaluate('-20 + 40 - 3 * 2')).toEqual(14);
  expect(mathUtils.evaluate('2 ^ (-20 + (-35 + 58))')).toEqual(8);
  expect(mathUtils.evaluate('(2 * 4 / 4 - 5 + 6) ^ 2')).toEqual(9);
});
