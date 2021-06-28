# Meal Planner
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#issues-and-roadmap">Issues and Roadmap</a></li>
      <ul>
        <li><a href="#issues">Issues</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
      </ul>
  </ol>
</details>

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
  ```sh
  npm install npm@latest -g
  ```
Additionally, you will need the meal-planner-api, please checkout the ReadMe for this on [meal-planner-api.git](https://github.com/louannl/meal-planner-api.git)

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/louannl/meal-planner.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Copy .env.example and rename it to .env. Enter the meal-planner-API in `.env`. E.g.
   ```env
   REACT_APP_BASEURL=http://localhost:5000
   ```

<!-- USAGE EXAMPLES -->
## Usage
Creating a meal in the planner:
https://user-images.githubusercontent.com/63197150/123423141-13a14680-d5b7-11eb-8124-6b0f70cd4c6a.mp4


Editing and deleting meals in the planner
https://user-images.githubusercontent.com/63197150/123423244-34699c00-d5b7-11eb-81aa-fc5932d3c263.mp4


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
- If you add an invalid BaseURL, the modal will constantly load instead of rendering an error fetching data

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