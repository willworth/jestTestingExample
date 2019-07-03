const googleSearch = require("./script");

dbMock = [
  "cats.com",
  "dogs.com",
  "morecats.com",
  "otherdogs.com",
  "myfavouritememesite.com",
  "elpais.com",
  "bigdogs.com",
  "weirddogs.com"
];

describe("googleSearch", () => {
  it("explanatory string", () => {
    console.log("running");
    //   console.log(googleSearch("cats", dbMock));
  });

  // matchers:
  // https://jestjs.io/docs/en/using-matchers

  it("is searching", () => {
    expect(googleSearch("testtest", dbMock)).toEqual([]);
    //   expect(googleSearch("dogs", dbMock)).toEqual(["dogs.com", "otherdogs.com"]);
  });

  it("works with undefined and null", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]),
      expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("doesn't return more than 3 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
