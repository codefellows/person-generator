# Person Generator

A RESTful service that allows a client to request random "person" objects.

A person consists of:

```js
  firstName: String
  lastName: String
  phone: String
  email: String
```

All values are random using the Faker string generation library.

## Route Endpoints

### `/`

- Method:  `GET`
- Parameter `:name`
- Returns: a `person` as a JSON object using the `:name` parameter as the firstName property.

### `/search`

- Method: `GET`
- Parameter: `:name`
- Returns: an array of `persons` as a JSON object using the `:name` parameter as all the firstName properties.
  