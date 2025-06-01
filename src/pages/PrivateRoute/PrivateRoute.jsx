import React from 'react';
import { use } from 'react';
import { AuthContext } from '../../contexts/AuthContexts/AuthContext';
import { Navigate } from 'react-router';
import Loader from '../Shared/Loader';

const PrivateRoute = ({children}) => {

    const { user,loading} = use(AuthContext);



    if(loading){
        return <Loader></Loader>
    }

    if (!user) {
       return <Navigate to='/login'></Navigate>
    }
    return children;
};

export default PrivateRoute;