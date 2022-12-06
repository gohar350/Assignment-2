import Sut from '../src/simple';


//Gohar's


test('Adding 0 and 0 should equal 0', () => {
  expect(Sut(0, 0)).toEqual(0);
});

test('Adding 0 and 1 should equal 1', () => {
  expect(Sut(0, 1)).toEqual(1);
});

test('Adding 1 and 1 should equal 2', () => {
  expect(Sut(1, 1)).toEqual(2);
});

test('Adding 1000 and 1000 should equal 2000', () => {
  expect(Sut(1000, 1000)).toEqual(2000);
});

const tests = [
  { inputs: [0, 0], expected: 0 },
  { inputs: [0, 1], expected: 1 },
  { inputs: [1, 1], expected: 2 },
  { inputs: [1000, 1000], expected: 2000 },
  { inputs: [100000000000000000, 100000000000000000], expected: 200000000000000000 },
  { inputs: [false, false], expected: false },
  { inputs: [null, null], expected: false },
  { inputs: [undefined, undefined], expected: false },
  { inputs: [NaN, NaN], expected: false },
  { inputs: [false, false], expected: false },
];

tests.forEach((config) => {
  test(`Adding ${config.inputs[0]} and ${config.inputs[1]} should equal ${config.expected}`, () => {
    expect(Sut.apply(this, config.inputs)).toEqual(config.expected);
  });
});

// Zara's

test('Adding 100000000000000000 and 100000000000000000 should equal 200000000000000000', () => {
  expect(Sut(100000000000000000, 100000000000000000)).toEqual(200000000000000000);
});

test('Adding false and false should equal false', () => {
  expect(Sut(false, false)).toEqual(false);
});

test('Adding null and null should equal false', () => {
  expect(Sut(null, null)).toEqual(false);
});

test('Adding undefined and undefined should equal false', () => {
  expect(Sut(undefined, undefined)).toEqual(false);
});

test('Adding NaN and NaN should equal false', () => {
  expect(Sut(NaN, NaN)).toEqual(false);
});
test('ensure the class has been setup properly', () => {
  const sut = new Sut(mockFetch.fetch); 
  expect(sut).toEqual({ 'ajax': mockFetch.fetch, data });
});

test('ensure that when the getData function is called, data comes back as a response', () => {
  const sut = new Sut(mockFetch.fetch); 
  const spy = jest.spyOn(sut, 'getData'); 

  expect(sut.data).toEqual(data); 

  sut.getData().then((data) => {
    expect(spy).toHaveBeenCalledTimes(1); 
    expect(sut.data).toEqual(mockGitHubData); 
})

});