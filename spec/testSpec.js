describe("Object looper", function(){
  it("should equal 'no m&m's for you'", function(){
    expect(candies.mAndm).toEqual("no m&m's for you");
  });
});
describe("getName function", function(){
  it("Should exist", function(){
    expect(getName).toEqual(jasmine.any(Function));
  })
  it("Name should equal something what is passed in", function(){
    var res = getName();
    expect(res).toEqual("hello");
  })
})

describe("vowelCounter", function(){
  it("function should exist", function(){
    expect(vowelCounter).toEqual(jasmine.any(Function));
  })
  it("Counter should return the correct amount of vowels", function(){
    var name = getName();
    var res = vowelCounter(name);
    expect(res).toEqual(2);
  })
})
