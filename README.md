This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). See their docs, for Information about running this app.

## Working with dotgov-components

During the development phase of the dotgov-components project sometimes we need to make changes to the component as part of the prototype work. In order to do keep the two in sync, it is recommend you link dotgov-components to this project locally.

1. Open up your dotgov-components project (get the latest branch from integration)
2. Create a feature branch for whichever prototype feature you are working, something like {feature-tweaks}
3. Open up a terminal in the root of your project and run `npm link` this will link the dotgov npm package locally
4. Open up this project (get the latest from integration)
5. Create a feature branch for whichever prototype feature you are working, something like {feature}
6. Open up a terminal in the root of your project and run `npm link @baltimorecounty/dotgov-components` this will link the dotgov npm package locally

You are now linked locally instead of pulling components from [npmjs.com](https://www.npmjs.com/)

### Updating dotgov-components css

Go to the terminal and run `npm run-script watch-css`. By doing this as you make the css tweaks needed in the dotgov components project, your prototypes project will automatically be updated.

Note: These changes will only be visible on your machine, once we are happy with the changes, and both projects have been reviewed, development will push the changes to npm as a beta package until we hit a release.

### Updating dotgov-components react components

If you need to make any changes any changes you will need to run `npm run-script build-demo` in order for the prototype to pick up your changes. These changes are manual, not automatic like the css changes.