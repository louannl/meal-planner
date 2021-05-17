import React, { Component } from 'react';
import { get } from '../../api/axios';
import Planner from '../../components/Planner/Planner';

export class PlannerMeals extends Component {
  state = {
    meals: [],
    ingredients: [],
    days: [],
  };

  componentDidMount() {
    get('/meals/meals-with-days').then((res) => {
      this.setState({
        meals: res.data.data,
        days: res.data.data.map((day) => day.name),
      });
    });

    get('/meals/meal-ingredients').then((res) => {
      this.setState({
        ingredients: res.data.data,
      });
    });
  }

  render() {
    return <Planner data={this.state} />;
  }
}
