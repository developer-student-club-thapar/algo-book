<div align = "center">

<img height=200px src="https://github.com/developer-student-club-thapar/officialWebsite/blob/master/src/assets/dsc_logo.png">

# DEVELOPER STUDENT CLUB TIET

<a href="https://medium.com/developer-student-clubs-tiet"><img src="https://github.com/aritraroy/social-icons/blob/master/medium-icon.png?raw=true" width="60"></a>
<a href="https://twitter.com/dsctiet"><img src="https://github.com/aritraroy/social-icons/blob/master/twitter-icon.png?raw=true" width="60"></a>
<a href="https://www.linkedin.com/company/developer-student-club-thapar"><img src="https://github.com/aritraroy/social-icons/blob/master/linkedin-icon.png?raw=true" width="60"></a>
<a href="https://facebook.com/dscthapar"><img src="https://github.com/aritraroy/social-icons/blob/master/facebook-icon.png?raw=true" width="60"></a>
<a href="https://instagram.com/dsc.tiet"><img src="https://github.com/aritraroy/social-icons/blob/master/instagram-icon.png?raw=true" width="60"></a>

</div>

This is the repo for the **Algo Book** by Developer Student Club, TIET, Patiala, Punjab.

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
    
## Contribution to the project

As a community driven project, we welcome contribution from everyone, but before you contribute please go through our [Contribution Guidelines](CONTRIBUTING.md).

All feedback and suggestions are welcome!

- 💬 Join the community on [Discord](https://discord.gg/3C4TESX)
