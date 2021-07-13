import React from 'react';
import { Column } from './Column';
import { Card } from './Card';
import { AppContainer } from './styles';
import { AddNewItem } from './AddNewItem';

export const App = () => {
  return(
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="Done">
        <Card text="Start using static typing" />
      </Column>
      <AddNewItem toggleButtonText="+ Add new list" onAdd={console.log}/>
    </AppContainer>
  )
  
}