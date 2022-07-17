import React, { useCallback, useEffect, useState } from 'react';
import { get, remove } from '../../api/axios';
import Planner from '../../components/Planner/Planner';
import { errorToast, successToast } from '../../components/UI/toast';

const PlannerMeals = () => {
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [meals, setMeals] = useState([]);
  const [days, setDays] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState('');
  const [mealIngredients, setMealIngredients] = useState([]);

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

  const getDaysHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    await get('/days').then((res) => {
      setDays(res.data.data);
    });
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getDaysHandler();
  }, [getDaysHandler]);

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

  const deleteMealOnDayHandler = (id, dayId) => {
    setIsLoading(true);
    setError(null);
    remove(`/meals/${id}/${dayId}`)
      .then((res) => {
        updateMealsWithDaysHandler();
        getIngredientsHandler();
        successToast('Deleted meal');
      })
      .catch((err) => {
        errorToast('Failed to delete meal');
      });
    setIsLoading(false);
  };

  const deleteMealHandler = (id) => {
    setIsLoading(true);
    setError(null);
    remove(`/meals/${id}`)
      .then((res) => {
        updateMealsWithDaysHandler();
        getIngredientsHandler();
        successToast('Deleted meal');
      })
      .catch((err) => {
        errorToast('Failed to delete meal');
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
      deleteMealOnDay={deleteMealOnDayHandler}
      deleteMeal={deleteMealHandler}
    />
  );
};

export default PlannerMeals;
