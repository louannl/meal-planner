import MealContext from './meal-context';
import { post, put } from '../api/axios';

const defaultMealState = {
  meal: {
    days: [],
    mealName: '',
    mealTags: [],
    ingredients: [],
    submit: 'create',
  },
};

const MealProvider = (props) => {
  const createMealHandler = (meal) => {
    post('/meals', meal).then((res) => {
      //TODO: Send some response and resend get request
      console.log(res);
    });
  };

  const editMealHandler = (meal, id) => {
    put(`/meals/${id}`, meal).then((res) => {
      //TODO: Send some response and resend get request
      console.log(res);
    });
  };

  const mealContext = {
    default: defaultMealState,
    createMeal: createMealHandler,
    editMeal: editMealHandler,
  };

  return (
    <MealContext.Provider value={mealContext}>
      {props.children}
    </MealContext.Provider>
  );
};

export default MealProvider;
