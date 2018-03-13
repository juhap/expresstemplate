# Small Node.js ExpressJS + Typescript template app

Borrows most of the configuration and code from the Microsoft TypeScript Node Starter app, https://github.com/Microsoft/TypeScript-Node-Starter

Probably you want to be using that one instead for your own usage. This is stripped down and customized to suit my taste. 

# Usage 
## Development
In development mode the system will monitor files for changes and run Typescript compilation and reload Node code when needed. 
```
yarn watch
```
## Production
```
yarn start
```

# Writing apps
Create new controllers to controllers folder. Refer to them in app.ts file 

# Configuration
Configuration is picked up from .env file using dotenv package. 
# Components

- ExpressJS, http://expressjs.com/en/api.html
- Morgan for request logging, https://github.com/expressjs/morgan
- Dotenv for config files, https://github.com/motdotla/dotenv