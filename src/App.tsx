import React from 'react';
import 'normalize.css';
import './App.css';
import ArticleList from './features/ArticleList';
import Article from './features/Article';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <ArticleList />
                </Route>
                <Route path="/article/:slug">
                    <Article />
                </Route>
            </Switch>
        </Router>
    );
}
export default App;
