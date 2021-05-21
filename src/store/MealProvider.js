import mealContext from './meal-context';
import { get, post, put, remove } from '../../api/axios';

const defaultMealState = {
  meal: {
    days: [],
    name: '',
    tags: [],
    ingredients: [],
  },
};

const mealReducer = (state, action) => {
  if (action.type === 'ADD') {
    //set state to default
    //set submit to add meal
  }

  if (action.type === 'EDIT') {
    //set state to get meal
    //set submit to PUT method
  }
};

const mealProvider = (props) => {
  //TODO: ADD MEAL
  const AddMealHandler = (meal) => {
    //onsubmit POST
  };

  //TODO: EDIT MEAL

  const EditMealHandler = (id) => {
    //onsubmit PUT
  };

  //TODO: Remove MEAL

  //TODO: SubmitHandler ? if add/post/

  //   const getMealbyIdHandler = (id) => {
  //     get(`/meals/${id}`).then((res) => {
  //       this.setState({
  //         meal: res.data.data,
  //       });
  //     });
  //   };

  const mealContext = {};
};

export default mealProvider;
