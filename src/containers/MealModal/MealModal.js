import React, { Component } from 'react';
import { get } from '../../api/axios';
import AddMealModal from '../../components/AddMeal/AddMealModal';

export class MealModal extends Component {
  state = {
    days: [],
    tags: [],
    meal: [],
  };

  componentDidMount() {
    get('/tags').then((res) => {
      this.setState({
        tags: res.data.data,
      });
    });

    get('/days').then((res) => {
      this.setState({
        days: res.data.data,
      });
    });
  }

  //TODO: If selected create new meal RENDER modal data default:
  // AND send update instead of create method
  //   get('/meals/:id').then((res) => {
  //     this.setState({
  //       meal: res.data.data,
  //     });
  //   });

  //Get Existing Ingredients to select on table??
  //POST

  //TODO: If selected a meal to edit RENDER
  //GET MEAL Info~! (will need Meal Id)
  //Change Defaults to information from Database
  //POST

  render() {
    return <AddMealModal data={this.state} />;
  }
}
