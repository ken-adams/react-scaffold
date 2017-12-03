import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './UI/Pages/HomePage';
import ProfileSection from './UI/Components/ProfileSection';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="/profile-section" component={ProfileSection} />
    </Route>
);