import React, { useCallback, useEffect, useState } from 'react';
import { get, remove } from '../../api/axios';
import Planner from '../../components/Planner/Planner';

//FIXME: do not need to use class based components in react 16.8+
const PlannerMeals = () => {
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [meals, setMeals] = useState([]);
  const [days, setDays] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState('');
  const [mealIngredients, setMealIngredients] = useState([]);
  //TODO: Move ingredients here so we can run them both

  const getIngredientsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    await get('/meals/meal-ingredients').then((res) => {
      setMealIngredients(res.data.data);
    });
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getIngredientsHandler();
  }, [getIngredientsHandler]);

  const toggleModalHandler = () => {
    setVisible((prevState) => !prevState);
  };

  const selectMeal = (id) => {
    setSelectedMeal(id);
  };

  const getMealsWithDaysHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    await get('/meals/meals-with-days').then((res) => {
      setMeals(res.data.data);
      setDays(
        res.data.data.map((day) => {
          return { name: day.name, day_id: day.id };
        })
      );
    });
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getMealsWithDaysHandler();
  }, [getMealsWithDaysHandler]);

  const updateMealsWithDaysHandler = () => {
    setIsLoading(true);
    setError(null);
    get('/meals/meals-with-days').then((res) => {
      setMeals(res.data.data);
      getIngredientsHandler();
    });
    setIsLoading(false);
  };

  //Delete meal
  const deleteMealHandler = (id, dayId) => {
    setIsLoading(true);
    setError(null);
    remove(`/meals/${id}/${dayId}`).then((res) => {
      updateMealsWithDaysHandler();
      getIngredientsHandler();
      console.log(res);
    });
    setIsLoading(false);
  };

  return (
    <Planner
      days={days}
      meals={meals}
      ingredients={mealIngredients}
      error={error}
      toggleModal={toggleModalHandler}
      loading={isLoading}
      visible={visible}
      selectedMeal={selectedMeal}
      selectMeal={selectMeal}
      getMealsWithDays={getMealsWithDaysHandler}
      updateMeals={updateMealsWithDaysHandler}
      deleteMeal={deleteMealHandler}
    />
  );
};

export default PlannerMeals;
