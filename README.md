# generic-carousel

Table of Contents
=================

* [Prerequisites](#prerequisites)
* [Design Choices](#design-choices)
* [Install](#install)
* [Run](#run)
* [Build](#build)
* [Test](#test)
* [Lint](#lint)
* [TODO](#todo)

## Prerequisites

You need to have the following programs installed on your machine:
- [Node.js](https://nodejs.org/) (>= 8.12.0)
- [Yarn](https://yarnpkg.com/)

You have to sign up for [Pixabay](https://pixabay.com/en/accounts/register/) and get an actual API key as the carousel component uses that service under the hood and the underlying endpoint (https://pixabay.com/api/docs/#api_search_images) has a mandatory query parameter (_key_) which has to be set. Once you obtained that key you need to set it as an environment variable as the application resolves its value from that:

```sh
REACT_APP_API_KEY=s4mpl3-k3y
```

## Design Choices

- [TypeScript](https://www.typescriptlang.org) is being used for tpye safety
- `CarouselService` abstract class has to be extended like `PixabayService` if someone wants to write a new service which relies on an other image provider because their API and response DTO will be different therefore the data has to be transformed accordingly
- `withPixabayService` HOC is being used to decouple the image fetching logic from the the component itself
- In the desktop layout the images keep their aspect ratio with a fixed width to prevent distortion

## Install

```sh
yarn
```

## Run

```sh
REACT_APP_API_KEY=[API key] yarn start
```

## Build

```sh
yarn build
```

## Test

```sh
yarn test

# With coverage report
yarn test:coverage
```

## Lint

```sh
yarn lint

# With an attempt to fix selected rules
yarn lint:fix
```

## TODO

- [ ] Implement a transition effect when changing images
- [ ] Improve accessibility
- [ ] Add an option to the Carousel which limits the number of maximum items
- [ ] Implement unit tests for `withPixabayService` HOC
- [ ] Implement error handling for `PixabayService`