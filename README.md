# PANDA
Panda Payroll Test made using VanillaJS - HTML5 - WebComponents - Webpack - SASS - PUG
Mostly for Modern Browsers

## Instructions

### REQUIREMENTS

- Node 8.2 or higher
- npm 5.2.0 or higher

### DEVELOP

- To install npm dependencies: npm i
- To run the application: npm start

### BUILD

- When building, the output files will be generated in './dist' folder
- To generate a build as PROD version: npm run build
- To generate a build as DEV version: npm run build-dev

### DEPLOY

- Just copy the files in './dist' to './docs'(We are hosting the app at Github.io)

## Getting started

### Project Structure

- index.js = main app entrypoint
- polyfill.js = polyfill to support some features in older browsers
- app.scss = main style file
- common.scss = variables/shared styles
- components folder = components implementation
   - index.js = defines WebComponent
   - style.scss = WebComponent style
   - template.pug = WebComponent Template

### App Example

- You can check the app here:  https://hcbelias.github.io/panda

