googleDatabase = [
  "cats.com",
  "dogs.com",
  "morecats.com",
  "otherdogs.com",
  "myfavouritememesite.com",
  "elpais.com"
];
// rather than hardcoding the db name, we allow dependency injection, making testing eaiser.
const googleSearch = (search, db) => {
  const results = db.filter(site => {
    return site.includes(search);
  });
  return results.length > 3 ? results.slice(0, 3) : results;
};

console.log(googleSearch("cats", googleDatabase));

module.exports = googleSearch;
