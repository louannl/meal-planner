# Meal Planner

<!-- ABOUT THE PROJECT -->
## About The Project

### Built With
- React
- MealPlanner-API
- Axios
- Ant Design

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
To run this project you will need to install npm 
* npm
  ```sh
  npm install npm@latest -g
  ``
Additionally, you will need the meal-planner-api, please checkout the ReadMe for this on [meal-planner-api.git](https://github.com/louannl/meal-planner-api.git)

### Installation
2. Clone the repo
   ```sh
   git clone https://github.com/louannl/meal-planner.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Copy .env.example and rename it to .env. Enter the meal-planner-API in `.env`. E.g.
   ```env
   REACT_APP_BASEURL=http://localhost:5000
   ```

<!-- USAGE EXAMPLES -->
## Usage
Meals:
You can plan your meals by adding in days you would be having said meals, the ingredients list will then automatically aggregate same ingredients and give you their total.

Tags: 
Add tags to your meals, for example, you could tag meals with high protein or just use tags to make it easier to identify your meal types, such as lunch/snacks/dinner.

<!-- ROADMAP -->
## Issues and Roadmap

### Issues

*Current issues*
- The are a few improvements necessary on the backend API, e.g.
  - it only takes in whole numbers (can't add 1/2 teaspoon etc.)
- Haven't added functionality yet to delete/create tags, so tags will exponentially grow. The functionality is available on the API.

*Previous issues*
- MealModal was rendered seven times on refresh/initialisation due to the modal being rendered on each day card.
Fixed: Replaced with a button that changes the state 'visibile' instead. 
Additional Point: I since moved 'add meal' to another part of the website, however the change above has still been helpful when making the modal visibile from different parts of the website, i.e. edit meal and add meal.

### Roadmap
*Non-core Functionality*
- Authentication (this will include using redux or context)
- Add functionality to allow the starting day to be selected (change order of days)
- Handle errors by not closing the form but showing an error if error is user made and not a server error.
- Colour coded tags

*Nice to haves*
- Change 'No data' icon to say no meals/ingredients and to have a different icon suited to meals
- Add Ingredients stored in database as selection options to Modal
- Ingredients doesn't show a validator error for ingredients, although it does throw an error.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
