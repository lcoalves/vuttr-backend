<h1 align="center">
  <img alt="Vuttr" title="Vuttr" src=".github/vuttr-logo.png" width="200px" />
</h1>

<h3 align="center">
  Desafio Bossabox: Vuttr - O projeto é um sistema backend e web simples, para visualização, inclusão e remoção de ferramentas de desenvolvimento. Nesse repositório você encontrará toda a estrura utilizada para o backend.
</h3>

<p align="center">See in action: <a href="https://vuttr-lucas-backend.herokuapp.com/tools">click here</a></p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/lcoalves/vuttr-backend?color=%2304D361">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/lcoalves/vuttr-backend/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/lcoalves/vuttr-backend?style=social">
  </a>
</p>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
- [NodeJS](https://nodejs.org/en/) - Environment runtime
- [Yarn](https://yarnpkg.com/en/docs/install) - Packager manager
- [Docker](https://docs.docker.com/install/) - Make it easier to create, deploy, and run applications by using containers
- [Docker Compose](https://docs.docker.com/compose/install/) - Relies on Docker Engine for any meaningful work, so make sure you have Docker Engine installed either locally or remote, depending on your setup.

What things you need to install the software and how to install them

```
$> git clone https://github.com/lcoalves/vuttr-backend.git
```

### Installing

A step by step series of examples that tell you how to get a development env running

#### Databases
First install back-end dependencies
```
$> cd vuttr-backend && yarn
```
Next thing you must do is setup all your database settings. To do it, I have created a docker-compose.yml file do help you
```
$> docker-compose up -d
```

#### AdonisJS
Installing AdonisJs is a simple process and will only take a few minutes. Install it globally via npm like so:
```
$> npm i -g @adonisjs/cli
```

#### Back-end
Run migrations
```
$> adonis migration:run
```
Run seeds (automatically create a user 'admin@vuttr.com' and password '123456')
```
$> adonis seed
```
Start back-end service
```
$> yarn dev
```

#### Back-end (Running TESTS)
First run
```
$> adonis test
```
After run tests if you want to run backend app
```
$> adonis migration:run
```

#### Authentication (JWT)
* Send a post to route '/sessions';
* Send 'email' (admin@vuttr.com) and 'password' (123456) on body;
* You will receive the JWT authentication token.
```
POST:
'/sessions'
{
  email: 'admin@vuttr.com',
  password: '123456'
}
```

## Built With

* [AdonisJS](https://adonisjs.com/docs/4.1/installation) - A restful API framework

## Authors

* **Lucas Alves** - *Full Stack Developer* - [GitHub profile](https://github.com/lcoalves)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/lcoalves/vuttr-backend/blob/master/LICENSE) file for details

## Acknowledgments

* AdonisJS
* MVC design pattern
* JWT
* Docker
* ESLint
* Prettier
