<div  align="center">
<h1>React Checkbox Tree Example</h1>
</div>

An example of a tree-style checkbox list, using a recursive component.

## Features

- Includes reusable components for checkbox, select/remove all components and checklist items.
- The main page will show the expandable/collapsible checklist and a display of selected items.
- Selecting/deselecting a parent will propogate to children as well.
- Select/remove all controls will be shown above the checklist.
- More information is included in code comments, in important files.

## Screenshots

**Initial View:**

![image](https://user-images.githubusercontent.com/6166712/118623425-dd1d2280-b7e5-11eb-9666-2338a1655e47.png)

**Items Selected:**

![image](https://user-images.githubusercontent.com/6166712/118623483-ead2a800-b7e5-11eb-8199-3898298ed33f.png)

## Possible Improvements

- Fetching data using redux and an API.
- Adding tests for components and functions.

## How to run

1. `git clone git@github.com:sachie/react-checkbox-tree-example.git`

2. `cd react-checkbox-tree-example`

3. `yarn` or `npm i`

4. `yarn start` or `npm start`

## Scripts

**Note: `npm` or `npm run` can be used instead of `yarn` if preferred**

- **`yarn start`** - Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

- **`yarn test`** - Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- **`yarn test:no-watch`** - Runs tests without watch mode. Is used for the pre-push git hook, and can be used with continuous integration.

- **`yarn test:coverage`** - Runs tests without watch mode and outputs coverage reports to `/coverage`.

- **`yarn build`** - Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

- **`yarn eject`** - Ejects the create-react-app configurations (webpack, Babel, ESLint, etc.) into your project as dependencies in `package.json`. Should be used if the provided configurations aren't working for you.

- **`yarn lint`** - Runs eslint, stylelint and prettier checks, but **does not** fix any issues.

- **`yarn lint:fix`** - Runs eslint, stylelint and prettier checks, and fixes possible issues. Some issues might still require manual fixing.

The following scripts are also included if the linters need to be used separately.

**`eslint, eslint:fix, stylelint, stylelint:fix, prettier, prettier:fix`**
