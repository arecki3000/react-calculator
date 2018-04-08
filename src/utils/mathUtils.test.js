import mathUtils from '../utils/mathUtils';

describe('#mathUtils', () => {
  describe('isNumeric', () => {
    // TODO: Write tests.
  });
  describe('When I invoke "evaluate" function passing math equation as parameter', () => {
    describe('should returns proper result for:', () => {
      it('the equations of addition', () => {
        expect(mathUtils.evaluate('0 + 0')).toEqual(0);
        expect(mathUtils.evaluate('0 + 1')).toEqual(1);
        expect(mathUtils.evaluate('1 + 2')).toEqual(3);
        expect(mathUtils.evaluate('3 + 2')).toEqual(5);
        expect(mathUtils.evaluate('0.1 + 0.2')).toEqual(0.3);
        expect(mathUtils.evaluate('15 + -120')).toEqual(-105);
        expect(mathUtils.evaluate('-100 + 289')).toEqual(189);
        expect(mathUtils.evaluate('-100 + -200')).toEqual(-300);
        expect(mathUtils.evaluate('15.34 + 120')).toEqual(135.34);
        expect(mathUtils.evaluate('100 + 200 + 54.34')).toEqual(354.34);
        expect(mathUtils.evaluate('43 + -2.00 + 234.3333')).toEqual(275.3333);
        expect(mathUtils.evaluate('0.000000000001 + 0.000000000002')).toEqual(
          3e-12
        );
        expect(
          mathUtils.evaluate(
            '1000000000000000000000000000000000000 + 2000000000000000000000000000000'
          )
        ).toEqual(1.000002e36);
      });
      it('the equations of subtraction', () => {
        expect(mathUtils.evaluate('0 - 0')).toEqual(0);
        expect(mathUtils.evaluate('1 - 0')).toEqual(1);
        expect(mathUtils.evaluate('7 - 4')).toEqual(3);
        expect(mathUtils.evaluate('7 - -4')).toEqual(11);
        expect(mathUtils.evaluate('70 - 128')).toEqual(-58);
        expect(mathUtils.evaluate('12.05 - 0.04')).toEqual(12.01);
        expect(mathUtils.evaluate('1024 - 10.25')).toEqual(1013.75);
        expect(mathUtils.evaluate('130 - 0.0005')).toEqual(129.9995);
        expect(mathUtils.evaluate('2048 - 1024 - 512')).toEqual(512);
        expect(mathUtils.evaluate('-345.2355 - -345.2354')).toEqual(-0.0001);
        expect(mathUtils.evaluate('0.00000123 - 0.00000123 - -1')).toEqual(1);
      });
      it('the equations of multiplications', () => {
        expect(mathUtils.evaluate('0 × 0')).toEqual(0);
        expect(mathUtils.evaluate('0 × 1')).toEqual(0);
        expect(mathUtils.evaluate('2 × 4')).toEqual(8);
        expect(mathUtils.evaluate('4 × -3')).toEqual(-12);
        expect(mathUtils.evaluate('15.5 × 4')).toEqual(62);
        expect(mathUtils.evaluate('128 × 2 × 4')).toEqual(1024);
        expect(mathUtils.evaluate('400 × -3 × 2.5')).toEqual(-3000);
        expect(mathUtils.evaluate('-14.1 × 2 × 5')).toEqual(-141);
        expect(mathUtils.evaluate('-0.0003 × 10000')).toEqual(-3);
        expect(mathUtils.evaluate('-0.0003 × 10000 × -1')).toEqual(3);
        expect(mathUtils.evaluate('-0.234 × -0.5434 × -0.543535')).toEqual(
          -0.069113519046
        );
      });
      it('the equations of division', () => {
        expect(mathUtils.evaluate('0 ÷ 0')).toEqual(NaN);
        expect(mathUtils.evaluate('1 ÷ 0')).toEqual(Infinity);
        expect(mathUtils.evaluate('0 ÷ 1')).toEqual(0);
        expect(mathUtils.evaluate('256 ÷ 4')).toEqual(64);
        expect(mathUtils.evaluate('12.5 ÷ 0.5')).toEqual(25);
        expect(mathUtils.evaluate('12.5 ÷ 0.5 ÷ 5')).toEqual(5);
        expect(mathUtils.evaluate('245 ÷ -1 ÷ 50')).toEqual(-4.9);
        expect(mathUtils.evaluate('-45 ÷ 34 ÷ 1.53453')).toEqual(
          -0.862498231879
        );
      });
      it('the equations of power', () => {
        expect(mathUtils.evaluate('0 ^ 0')).toEqual(1);
        expect(mathUtils.evaluate('0 ^ 1')).toEqual(0);
        expect(mathUtils.evaluate('1 ^ 0')).toEqual(1);
        expect(mathUtils.evaluate('128 ^ 0')).toEqual(1);
        expect(mathUtils.evaluate('2 ^ 5')).toEqual(32);
        expect(mathUtils.evaluate('2 ^ 6')).toEqual(64);
        expect(mathUtils.evaluate('4 ^ 2 ^ 2')).toEqual(256);
        expect(mathUtils.evaluate('0.34 ^ 2')).toEqual(0.1156);
        expect(mathUtils.evaluate('2 ^ 0.34')).toEqual(1.26575659397);
        expect(mathUtils.evaluate('2 ^ -0.34')).toEqual(0.790041311863);
        expect(mathUtils.evaluate('128 ^ -2')).toEqual(0.000061035156);
        expect(mathUtils.evaluate('-0.33 ^ 2')).toEqual(-0.1089);
        expect(mathUtils.evaluate('0.5 ^ -0.5 ^ 0.3')).toEqual(1.755950768112);
        expect(mathUtils.evaluate('0.5 ^ -0.5 ^ -0.3')).toEqual(2.347531331991);
      });
      it('the combined equations with parentheses', () => {
        expect(mathUtils.evaluate('20 × 8 - 3')).toEqual(157);
        expect(mathUtils.evaluate('(43 + 2) × 2')).toEqual(90);
        expect(mathUtils.evaluate('-20 + 40 - 3 × 2')).toEqual(14);
        expect(mathUtils.evaluate('2 ^ (-20 + (-35 + 58))')).toEqual(8);
        expect(mathUtils.evaluate('(2 × 4 ÷ 4 - 5 + 6) ^ 2')).toEqual(9);
      });
    });
  });
});
