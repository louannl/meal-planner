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
The Meal-planner is designed to do just that, plan your meals. Along with dynamically displaying your meal list for the week, it renders a handy ingredient list with checkboxes.

Checkout a live sample of this app in use:
[Online sample](meal-planner.louannloizou.co.uk)

This utilises the meal-planner API I created, checkout the github readme for more information and the api roadmap:
[MealPlanner API Github](https://github.com/louannl/meal-planner-api.git)

### Built With
- React
- MealPlanner-API
- Ant Design

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
To run this project you will need to install NPM, checkout the NPM docs for how to download NPM [Link to NPM Docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm);

Additionally, you will need the meal-planner-api, please checkout the ReadMe for separate instructions on [meal-planner-api.git](https://github.com/louannl/meal-planner-api.git)

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/louannl/meal-planner.git
   ```
2. Install NPM packages (within the directory)
   ```sh
   npm install
   ```
3. Copy .env.example to .env. Then enter the meal-planner-API in `.env`
   ```
   cp .env.example .env
   ```

<!-- USAGE EXAMPLES -->
## Usage
Creating a meal in the planner:

![creating a meal](https://user-images.githubusercontent.com/63197150/123423141-13a14680-d5b7-11eb-8124-6b0f70cd4c6a.mp4)


Editing and deleting meals in the planner

![editing a meal](https://user-images.githubusercontent.com/63197150/123423244-34699c00-d5b7-11eb-81aa-fc5932d3c263.mp4)


- Meals:

Create a meal, select the days you plan to have that meal, add in the ingredients.

The API will then fetch an aggregated list of the ingredients for that week.

- Ingredients list:

Use the checkbox to mark off what ingredients you already have; then, when shopping, check off what ingredients you bought.

- Tags (optional): 

Add tags to your meals to help you identify them e.g. You can use 'lunch', 'dinner', 'snack' OR 'high in protein', 'low-fat'.

Whatever suits your needs.

<!-- ROADMAP -->
## Issues and Roadmap

### Issues

*Current issues*
- Ingredient validation on Modal 
  - If you don't input ingredients or forget or add invalid items to the ingredients on the modal - it won't show you a validation error like it does for days/meal-name.
- Modal Ingredients: whole numbers only 
  - The API at current only allows whole numbers (not doing so will require storing data as strings etc. e.g. you can't add 1/2 a teaspoon)
- Delete/Edit tags
  - You can do all this on the API, but there is no component on the app to allow you to delete/edit individual tags via the modal or other.
- Invalid BaseURL
  - If the url to the API is invalid, the app will constantly show the loading state on it's components instead of rendering 'error, server cannot be reached'

*Previous issues*
- MealModal was rendered seven times on refresh/initialisation due to the modal being rendered on each day card.
  - Fixed: Replaced with a button that changes the state 'visibile' instead. 
  - Additional Point: I since moved 'add meal' to another part of the website, however, the change above has still been helpful when making the modal visibile from different parts of the website, i.e. edit meal and add meal.

### Roadmap
- Authentication 
  
  This will use redux or context. Authentication will need to be setup on the api too.

- Select starting day or date range 
  
  I plan to change the API to no longer have a static Monday to Sunday days list, and instead allow the user to select days. This will be a significant change to the React app.

- Error handling
  
  Instead of closing the modal when an error occurs, I want it to show the user the error and allow them to continue making changes. Additionally, it will show if a server error has occurred differently to this. 

- Colour coded tags

  Make it more customizable and a friendly user experience

- Change 'no data' icon 

  The current icon says no data, change this to either 'no meals found' or 'no ingredients found' and to have a different image than current.

- Add ingredient list to selection in Modal 
  
  Add list of ingredients in the database to the modal selection. Allow deletion or creation via the list too. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

*At current I don't have any frontend tests, however I'll keep this here for when I do:*

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.