import { getInitials, keepNumbers, trimLineBreak, BLANK_SPACE, EMPTY_STRING } from './stringUtils';

describe('getInitials', () => {
  it('When string >= 1', () => {
    expect(getInitials('Aquarius')).toMatch(/A/);
    expect(getInitials('Godzilla vs. Kong')).toMatch(/G v K/);
    expect(getInitials('It Must Be Heaven')).toMatch(/I M B H/);
  });

  it('When the first character is space', () => {
    expect(getInitials(' The War with Grandpa')).toMatch(/ T W w G/);
  });

  it('When the last character is the space', () => {
    expect(getInitials('The Seven Samurai ')).toMatch(/T S S /);
  });

  it('With multiple spaces in the string', () => {
    expect(getInitials('     Bonnie   and   Clyde     ')).toMatch(/ {5}B {3}a {3}C {5}/);
  });

  it('When the first character of a word is a special character', () => {
    expect(getInitials('Thelma & Louise')).toMatch(/T & L/);
  });

  it('When no args are passed', () => {
    expect(getInitials()).toBeUndefined();
  });

  it('With empty string', () => {
    expect(getInitials(EMPTY_STRING)).toBe(EMPTY_STRING);
  });

  it('With blank space', () => {
    expect(getInitials(BLANK_SPACE)).toMatch(BLANK_SPACE);
  });
});

describe('keepNumbers', () => {
  it('With int', () => {
    expect(keepNumbers(1998)).toMatch(/1998/);
    expect(keepNumbers(2001)).toMatch(/2001/);
  });

  it('With strings without numbers', () => {
    expect(keepNumbers('jcoa')).toBe(EMPTY_STRING);
    expect(keepNumbers('wolox')).toBe(EMPTY_STRING);
  });

  it('With strings with numbers', () => {
    expect(keepNumbers('jc1143')).toMatch(/1143/);
    expect(keepNumbers('1998 co')).toMatch(/1998/);
  });

  it('With float', () => {
    expect(keepNumbers(1.998)).toMatch(/1998/);
    expect(keepNumbers(0.23)).toMatch(/023/);
  });

  it('When no args are passed', () => {
    expect(keepNumbers()).toBe(EMPTY_STRING);
  });

  it('With empty strings and blank space', () => {
    expect(keepNumbers(EMPTY_STRING)).toBe(EMPTY_STRING);
    expect(keepNumbers(BLANK_SPACE)).toBe(EMPTY_STRING);
  });
});

describe('trimLineBreaks', () => {
  it('With strings without \\n', () => {
    expect(trimLineBreak('The Dark Knight')).toMatch(/The Dark Knight/);
  });

  it('With strings with \\n', () => {
    expect(trimLineBreak('Taxi \nDriver')).toMatch(/Taxi Driver/);
  });

  it('With only \\n', () => {
    expect(trimLineBreak('\n')).toBe(EMPTY_STRING);
  });

  it('With blank space and \\n', () => {
    expect(trimLineBreak(' \n')).toBe(BLANK_SPACE);
  });

  it('When no args are passed', () => {
    expect(trimLineBreak()).toBe(EMPTY_STRING);
  });

  it('With empty strings and spaces', () => {
    expect(trimLineBreak(EMPTY_STRING)).toBe(EMPTY_STRING);
    expect(trimLineBreak(BLANK_SPACE)).toBe(BLANK_SPACE);
  });
});
