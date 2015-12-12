# REACT COMPONENT BOILERPLATE (WIP)

[![Build Status](https://travis-ci.org/leandrowd/react-component-boilerplate.svg?branch=master)](https://travis-ci.org/leandrowd/react-component-boilerplate)

[![Coverage Status](https://coveralls.io/repos/leandrowd/react-component-boilerplate/badge.svg?branch=master&service=github)](https://coveralls.io/github/leandrowd/react-component-boilerplate?branch=master)

Easy way to start your new react component.

This boilerplayte provides everything you need to start developing and testing your new component.

### TODOs
- [x] tests
- [x] coverage
- [x] build
- [x] task for tests
- [x] task for tests and coverage
- [ ] task for publishing to npm
- [ ] task for publishing to gh-pages
- [x] editorConfig
- [x] coveralls
- [x] travis
- [x] eslint
- [x] add gulp tasks for performing everything

## Getting started

From your terminal:

- `git clone git@github.com:leandrowd/react-component-boilerplate.git`
- `npm install`
- `gulp dev`


### Setting up Continuous integration using Travis

After pushing your repo to bitbucket or github, go to [travis-ci](https://travis-ci.org), link and enable your new repo to be built. Your next git push will trigger the build.

### Setting up Test Coverage using Coveralls

Go to [coveralls](https://coveralls.io), get a token and enable your repo for coverage. Then go back to travis and add your token as an environment variable. Your next build will trigger coverage.


### List of gulp tasks (used for development workflow)

  | Task          | Description |
  |---------------|-------------|
  | default       |
  | clean         | remove generated folders |
  | dev           | runs everything you need and keep watching for changes |
  | lint          | lint js files |
  | build         | clean and build the project  |
  | re-build      | build changed files |
  | tests         | run the tests |
  | watch         | watch for file changes to perform needed actions |


### List of npm tasks (mostly used from the services)

  | Task          | Description |
  |---------------|-------------|
  | postinstall   |
  | start         |
  | lint          | lint js files |
  | build         | build the project |
  | test          | run the tests |
  | tdd           | run the tests and keep watching |
  | coverage      | collect coverage from the tests |
  | coveralls     | sends coverage reports to coveralls |

