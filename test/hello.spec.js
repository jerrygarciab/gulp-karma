describe('greeter', function () {

  it('should say Hello to the World', function () {
    expect(greet('World')).toEqual('Hello, World!');
  });
});

describe('goodbye', function () {
  
  it('should say good bye', function () {
    expect(goodbye()).toEqual('goodbye');
  });
});

/*describe('sum', function () {
  
  it('should add 2 numbers', function () {
    expect(sum(1, 1)).toEqual(2);
  });
})*/
