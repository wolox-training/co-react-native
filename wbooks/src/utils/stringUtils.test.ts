import { getInitials, keepNumbers, trimLineBreak, BLANK_SPACE, EMPTY_STRING } from './stringUtils';

describe('getInitials', () => {
  test('When string >= 1', () => {
    expect(getInitials('Aquarius')).toMatch(/A/);
    expect(getInitials('Godzilla vs. Kong')).toMatch(/G v K/);
    expect(getInitials('It Must Be Heaven')).toMatch(/I M B H/);
  });

  test('When the first character is space', () => {
    expect(getInitials(' The War with Grandpa')).toMatch(/ T W w G/);
  });

  test('When the last character is the space', () => {
    expect(getInitials('The Seven Samurai ')).toMatch(/T S S /);
  });

  test('With multiple spaces in the string', () => {
    expect(getInitials('     Bonnie   and   Clyde     ')).toMatch(/ {5}B {3}a {3}C {5}/);
  });

  test('When the first character of a word is a special character', () => {
    expect(getInitials('Thelma & Louise')).toMatch(/T & L/);
  });

  test('When no args are passed', () => {
    expect(getInitials()).toBeUndefined();
  });

  test('With empty string', () => {
    expect(getInitials(EMPTY_STRING)).toBe(EMPTY_STRING);
  });

  test('With blank space', () => {
    expect(getInitials(BLANK_SPACE)).toMatch(BLANK_SPACE);
  });
});

describe('keepNumbers', () => {
  test('With int', () => {
    expect(keepNumbers(1998)).toMatch(/1998/);
    expect(keepNumbers(2001)).toMatch(/2001/);
  });

  test('With strings without numbers', () => {
    expect(keepNumbers('jcoa')).toBe(EMPTY_STRING);
    expect(keepNumbers('wolox')).toBe(EMPTY_STRING);
  });

  test('With strings with numbers', () => {
    expect(keepNumbers('jc1143')).toMatch(/1143/);
    expect(keepNumbers('1998 co')).toMatch(/1998/);
  });

  test('With float', () => {
    expect(keepNumbers(1.998)).toMatch(/1998/);
    expect(keepNumbers(0.23)).toMatch(/023/);
  });

  test('When no args are passed', () => {
    expect(keepNumbers()).toBe(EMPTY_STRING);
  });

  test('With empty strings and blank space', () => {
    expect(keepNumbers(EMPTY_STRING)).toBe(EMPTY_STRING);
    expect(keepNumbers(BLANK_SPACE)).toBe(EMPTY_STRING);
  });
});

describe('trimLineBreaks', () => {
  test('With strings without \\n', () => {
    expect(trimLineBreak('The Dark Knight')).toMatch(/The Dark Knight/);
  });

  test('With strings with \\n', () => {
    expect(trimLineBreak('Taxi \nDriver')).toMatch(/Taxi Driver/);
  });

  test('With only \\n', () => {
    expect(trimLineBreak('\n')).toBe(EMPTY_STRING);
  });

  test('With blank space and \\n', () => {
    expect(trimLineBreak(' \n')).toBe(BLANK_SPACE);
  });

  test('When no args are passed', () => {
    expect(trimLineBreak()).toBe(EMPTY_STRING);
  });

  test('With empty strings and spaces', () => {
    expect(trimLineBreak(EMPTY_STRING)).toBe(EMPTY_STRING);
    expect(trimLineBreak(BLANK_SPACE)).toBe(BLANK_SPACE);
  });
});
