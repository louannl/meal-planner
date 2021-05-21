import React from 'react';

const MealContext = React.createContext({
  meal: {
    days: [],
    name: '',
    tags: [],
    ingredients: [],
  },
  createMeal: (meal) => {},
  editMeal: () => {},
  removeMeal: () => {},
});

export default MealContext;
