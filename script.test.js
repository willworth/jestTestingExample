const googleSearch = require("./script");

dbMock = [
  "cats.com",
  "dogs.com",
  "morecats.com",
  "otherdogs.com",
  "myfavouritememesite.com",
  "elpais.com"
];

it("explanatory string", () => {
  console.log("running");
  //   console.log(googleSearch("cats", dbMock));
});

// matchers:
// https://jestjs.io/docs/en/using-matchers

it("is searching", () => {
  expect(googleSearch("testtest", dbMock)).toEqual([]);
  expect(googleSearch("dogs", dbMock)).toEqual(["dogs.com", "otherdogs.com"]);
});
