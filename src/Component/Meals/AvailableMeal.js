import React from 'react'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Samosa',
    description: 'Crispy, savory delights with a spicy filling.',
    price: 8,
  },
  {
    id: 'm2',
    name: 'Chowmein',
    description: 'Stir-fried noodles bursting with flavor and vegetables.',
    price: 10.5,
  },
  {
    id: 'm3',
    name: 'Chole Kulche',
    description: 'Soft, fluffy bread paired with spicy chickpea curry for a mouthwatering North Indian street food experience.',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Jalebi',
    description: 'Golden, syrup-soaked spirals of sweet indulgence.',
    price: 9.99,
  },
  {
    id: 'm5',
    name: 'Pav Bhaji',
    description: 'A buttery, spiced vegetable medley served with soft buns, a beloved Indian street food classic.',
    price: 10.99,
  },
  {
    id: 'm6',
    name: 'Churumuri',
    description: 'A tangy and crunchy South Indian street snack made with puffed rice, spices, and a burst of flavors.',
    price: 6.99,
  },
];

export default function AvailableMeal() {
    const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};