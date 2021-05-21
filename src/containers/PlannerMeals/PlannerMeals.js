import React, { Component } from 'react';
import { get } from '../../api/axios';
import Planner from '../../components/Planner/Planner';

//FIXME: do not need to use class based components in react 16.8+
export class PlannerMeals extends Component {
  state = {
    meals: [],
    ingredients: [],
    days: [],
    unitTypes: [],
    tags: [],
    visible: false,
  };

  getMealsWithDaysHandler = () => {
    get('/meals/meals-with-days').then((res) => {
      this.setState({
        meals: res.data.data,
        days: res.data.data.map((day) => {
          return { name: day.name, day_id: day.id };
        }),
      });
    });
  };

  getMealIngredientsHandler = () => {
    get('/meals/meal-ingredients').then((res) => {
      this.setState({
        ingredients: res.data.data,
      });
    });
  };

  getTagsHandler = () => {
    get('/tags').then((res) => {
      this.setState({
        tags: res.data.data,
      });
    });
  };

  getUnitTypesHandler = () => {
    get('/unit-types').then((res) => {
      this.setState({
        unitTypes: res.data.data,
      });
    });
  };
  //FIXME: use redux or similar to handle state globally?
  toggleModalHandler = () => {
    this.setState((prevState) => {
      return { visible: !prevState.visible };
    });
  };

  componentDidMount() {
    this.getMealsWithDaysHandler();
    this.getMealIngredientsHandler();
    this.getTagsHandler();
    this.getUnitTypesHandler();
  }

  render() {
    return (
      <Planner
        data={this.state}
        getUnitType={this.getUnitTypesHandler}
        getTags={this.getTagsHandler}
        toggleModal={this.toggleModalHandler}
      />
    );
  }
}
