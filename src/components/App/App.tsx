import React, {useCallback, useEffect, useState} from 'react';
import {Route, Switch} from "react-router-dom";
import { routes } from '../../utils/routes';
import {FullRecipe} from "../FullRecipe/FullRecipe";
import { HeaderContainer } from '../../containers/HeaderContainer';
import {RecipesFeedContainer} from "../../containers/RecipesFeedContainer";
import {child, get, getDatabase, onValue, ref} from "firebase/database";
import { AuthZModalContainer } from '../../containers/AuthZModalContainer';
import { CreateRecipeFormContainer } from '../../containers/CreateRecipeContainer/CreateRecipeFormContainer';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {login} from "../../store/slices/authZ/authZSlice";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useFirebase} from "../../hooks/useFirebase";
import {MainPageFeedContainer} from "../../containers/MainPageFeedContainer";


function App() {
  const { listenUser } = useFirebase();
  useEffect(() => {
    listenUser();
  }, []);

  return (
    <div className="App">
      <AuthZModalContainer />
      <HeaderContainer />
        <Switch>
          <Route path={routes.main} exact>
            <MainPageFeedContainer/>
          </Route>
          <Route path={routes.createRecipe} exact>
            <CreateRecipeFormContainer />
          </Route>
          <Route path={`${routes.recipe}/:id`}>
            <FullRecipe/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
