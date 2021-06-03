import { useCallback, useEffect, useState } from 'react';
import { get, post, put } from '../../api/axios';
import MealModal from '../../components/MealModal/MealModal';

const Modal = (props) => {
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectTags, setSelectTags] = useState([]);
  const [selectDays, setSelectDays] = useState([]);
  const [selectUnits, setSelectUnits] = useState([]);
  const [defaults, setDefaults] = useState('');
  const [editMode, setEditMode] = useState(false);
  //FIXME: Make a portal for the modal

  //TODO: Add Selectors for ingredients
  const { days, mealId } = props;

  const getSelectors = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setSelectDays(days);
    //FIXME: GetSelectors to run after creation if new values added
    console.log('getSelectors is running!');
    await Promise.all([
      get('/tags').then((res) => {
        setSelectTags(res.data.data);
      }),
      get('/unit-types').then((res) => {
        setSelectUnits(res.data.data);
      }),
    ]);
    setIsLoading(false);
  }, [days]);

  useEffect(() => {
    getSelectors();
  }, [getSelectors]);

  const getDefaultValues = useCallback(() => {
    setIsLoading(true);
    setError(null);
    if (!mealId) {
      setEditMode(false);
      setDefaults('');
      setIsLoading(false);
      return;
    }

    setEditMode(true);
    get(`/meals/${mealId}`).then((res) => {
      setDefaults({
        mealDays: res.data.data.days,
        mealName: res.data.data.meal,
        mealTags: res.data.data.tags,
        mealIngredients: res.data.data.ingredients,
      });
      setIsLoading(false);
    });
  }, [mealId]);

  useEffect(() => {
    getDefaultValues();
  }, [getDefaultValues]);

  const createMealHandler = (meal) => {
    post('/meals', meal).then((res) => {
      //FIXME: Handler response and error
      console.log(res);
      props.updateMeals();
    });
  };

  const editMealHandler = (meal, id) => {
    put(`/meals/${id}`, meal).then((res) => {
      //FIXME: Handler response and error
      console.log(res);
      props.updateMeals();
    });
  };

  return (
    <MealModal
      key={mealId ? mealId : 0}
      visible={props.visible}
      loading={loading}
      tags={selectTags}
      days={selectDays}
      units={selectUnits}
      editMode={editMode}
      defaultValues={defaults}
      error={error}
      toggleModal={props.toggleModal}
      createMeal={createMealHandler}
      editMeal={editMealHandler}
      mealId={mealId}
    />
  );
};

export default Modal;
