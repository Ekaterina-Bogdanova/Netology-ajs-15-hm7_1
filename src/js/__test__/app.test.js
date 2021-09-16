import '../app';

test('check 1', () => {
  const person = new Validator('DHv90')
  const result = person.validateUsername();
  expect(result).toEqual(false);
});

test('check 2', () => {
  const person = new Validator('DHv90-')
  const result = person.validateUsername();
  expect(result).toEqual(false);
});

test('check 3', () => {
  const person = new Validator('DHv9_')
  const result = person.validateUsername();
  expect(result).toEqual(false);
});

test('check 4', () => {
  const person = new Validator('-DHv90')
  const result = person.validateUsername();
  expect(result).toEqual(false);
});
test('check 5', () => {
  const person = new Validator('0DHv90')
  const result = person.validateUsername();
  expect(result).toEqual(false);
});

test('check 6', () => {
  const person = new Validator('_DHv90')
  const result = person.validateUsername();
  expect(result).toEqual(false);
});

test('check 7', () => {
  const person = new Validator('DHv9055j')
  const result = person.validateUsername();
  expect(result).toEqual(false);
});

test('check 8', () => {
  const person = new Validator('DH%v90')
  const result = person.validateUsername();
  expect(result).toEqual(false);
});
