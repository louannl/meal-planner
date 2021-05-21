import React from 'react';

const MealContext = React.createContext({
  meal: {
    days: [],
    mealName: '',
    mealTags: [],
    ingredients: [],
    submit: 'create',
  },
  createMeal: (meal) => {},
  editMeal: () => {},
  removeMeal: () => {},
});

export default MealContext;
