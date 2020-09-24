## ALGO-BOOK

##### To Start

```
1. Clone the repository
2. npm i or yarn install
3. npm start
```

##### Scripts

1. **Dev frontend server (no SSR or api server)**

    > npm run dev (all axios requests are proxied to 'http:localhost:\${process.env.SERVER_HOST}/api')(configured in webpack.development.js)

2. **Dev backend server (only api server)**

    > npm run dev:server
    > (make sure there is a .env.dev file with server=true and SERVER_PORT set)

3. **Prod build**

    > npm run prod

4. **Run linter**

    > npm run lint

5. **Run prettier**

    > npm run format

6. **Start Server and Use SSR**

    > npm start
