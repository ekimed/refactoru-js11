describe("join", function() {
  it("should join an array of strings with space delimiter", function() {
    expect(join(['hello', 'Eunice'], ' ')).toEqual('hello Eunice');
  });

  it("should return an empty string ", function(){
  	expect(join([],',')).toEqual('');
  });

  it("should return an array of numbers as a joined string", function(){
  	expect(join([1,2,3], ",")).toEqual('1,2,3');
  });

  it("should return string with no spaces if given no delimiter", function(){
  	expect(join(["hello", "eunice"])).toEqual('helloeunice');
  });

  it("should return undefined if given more than 2 arguments", function(){
  	expect(join([1,2,3], " ", " ")).toEqual(undefined);
  });
});