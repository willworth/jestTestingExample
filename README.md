# Jest testing example

This is for development, so install appropriately:

```javascript

npm install --save-dev jest
```

To run the test, it'll work based on what you've set up in `package.json`, and the standard command is

```javascript
npm test
```

Jest will look for any files in form `whatever.test.js` (or spec in place of test).

You can set up jest to watch folders:

`"test": "jest --watch *.js"`

and then just run it before you work and it'll auto run after every save.
