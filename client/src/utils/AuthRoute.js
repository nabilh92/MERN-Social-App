import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import {AuthContext} from '../context/auth';

function AuthRoute({ component: Component }) {
    const {user} = useContext(AuthContext);

    // React Router v6/v7: render guards by returning an element
    return user ? <Navigate to="/" replace /> : <Component />;
}

export default AuthRoute;