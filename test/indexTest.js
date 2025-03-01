const { shout, whisper, logShout, logWhisper, sayHiToHeadphonedRoommate } = require("../index");

describe("shout(string)", function () {
  it("receives one argument and returns it in all caps", function () {
    expect(shout("hello")).toEqual("HELLO");
  });
});

describe("whisper(string)", function () {
  it("receives one argument and returns it in all lowercase", function () {
    expect(whisper("HELLO")).toEqual("hello");
  });
});

describe("logShout(string)", function () {
  it("takes a string argument and logs it in all caps using console.log()", function () {
    console.log = jest.fn();
    logShout("hello");
    expect(console.log).toHaveBeenCalledWith("HELLO");
  });
});

describe("logWhisper(string)", function () {
  it("takes a string argument and logs it in all lowercase using console.log()", function () {
    console.log = jest.fn();
    logWhisper("HELLO");
    expect(console.log).toHaveBeenCalledWith("hello");
  });
});

describe("sayHiToHeadphonedRoommate(string)", function () {
  it("returns \"I can't hear you!\" if `string` is lowercase", function () {
    expect(sayHiToHeadphonedRoommate("hello")).toEqual("I can't hear you!");
  });

  it("returns \"YES INDEED!\" if `string` is uppercase", function () {
    expect(sayHiToHeadphonedRoommate("HELLO")).toEqual("YES INDEED!");
  });

  it("returns \"I would love to!\" if `string` is \"Let's have dinner together!\"", function () {
    expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual("I would love to!");
  });
});
