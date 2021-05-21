import React from 'react';

const ReqContext = React.createContext({
  meal: {
    days: [],
    name: '',
    tags: [],
    ingredients: [],
  },
  addMeal: () => {},
  removeMeal: () => {},
  editMeal: (id) => {},
  submitMeal: (meal) => {},
});

export default ReqContext;
