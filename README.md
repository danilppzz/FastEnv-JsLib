Fast Env is a simple library for loading and accessing environment variables from a `.env` file. 
It is ideal for Node.js projects that require an easy way to manage environment configurations.

## Features

- Loads environment variables from a `.env` file in the project's root.
- Provides a convenient way to access the loaded environment variables.

## Installation

To start using Fast Env in your project, follow these steps:

Npm
```
npm install fenv
```

## How to use

```js
const Fenv = require('fenv');

const env = new Fenv();
env.load();

console.log(env.get('DATABASE_URL'));
```

## File Structure

The .env file must be in the root path
```md
my-project/
│
├── src/
│   ├── index.js
│   ├── ...
│
├── .env [!]
│
├── package.json
├── README.md
├── LICENSE
```