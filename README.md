## Installation
First, you need to execute `yarn install` so you can have all the dependencies installed.
**PS: You can find instructions to install yarn [here](https://yarnpkg.com/en/docs/install).**

## Start the server
```
yarn start
```
When you start the server, the default port would be `8080`, so you can access the project using http://localhost:8080

## Deploy to Github Pages
```
yarn deploy
```
I am using Github Pages to host [this project](https://thiagonzalez.github.io/bootstrap-template/). 
This command will commit the changes to the `gh-pages` branch and also push a deploy to Github Pages updating the environment.

## What I decided to use

### Yarn
Responsible for managing the project dependencies.

### Gulp
Easy way to automate tasks like building minified CSS from Sass files, generate HTML file, deploy our application to Github Pages, and run a local server. 

### Sass
Easy way to write CSS code. Open doors to use metodologies like BEM, which makes your code easier to read and maintain.

### HTML
Stardard markup language for creating web pages.

### GH Pages
A cloud environment provided by Github with almost zero configuration, which makes easier to provide a real URL for your project.