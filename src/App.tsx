import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import TodoItemPage from './components/TodoItemPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import UserPage from './components/UserPage';

const App = () => {
  return ( 
      <BrowserRouter>
        <div>
          <div>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/todos">Todos</NavLink>
          </div>
          <Route path={'/users'} exact>
             <UserPage/>
          </Route>
          <Route path={'/todos'} exact>
             <TodosPage/>
          </Route>
          <Route path={'/users/:id'}>
             <UserItemPage/>
          </Route>
          <Route path={'/todos/:id'}>
             <TodoItemPage/>
          </Route>
        </div>
      </BrowserRouter>
  );
};


export default App;