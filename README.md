# mongo-data-factory

- [mongo-data-factory](#mongo-data-factory)
- [Initialize Factory Seeder](#initialize-factory-seeder)
- [Run your factory 🚀](#run-your-factory-)

# Initialize Factory Seeder

first you need to define your **collecetion** (table) schema
for this example i have a table called `Country`

```javascript
const countryFactory = Factory.define(Country, (faker: Faker.FakerStatic) => {
  return {
    name: faker.address.country(),
    code: faker.address.countryCode(),
    currency: faker.finance.currencyCode(),
    timezone: faker.address.timeZone(),
  };
});
```

# Run your factory 🚀

After initialize it you just run one line of code

you could pass as argument your number of records you want to create
by default it creates only only **one** record

```javascript
countryFactory.create(); // will create one reacord

countryFactory.create(10); // will create 10 reacords

countryFactory.create().then(() => {
  // you could run some logic here to 😀
});
```
