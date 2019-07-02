googleDatabase = [
  "cats.com",
  "dogs.com",
  "morecats.com",
  "otherdogs.com",
  "myfavouritememesite.com",
  "elpais.com"
];

const googleSearch = search => {
  const results = googleDatabase.filter(site => {
    return site.includes(search);
  });
  return results.length > 3 ? results.slice(0, 3) : results;
};

console.log(googleSearch("cats"));
