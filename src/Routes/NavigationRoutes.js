import { Route, Routes, Navigate } from 'react-router-dom';

import Login from '../Pages/Login';

const NavigationRoutes = () => {
    return (
        <Routes>
            <Route exact path='/login' element={<Login />}></Route>
            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
    )
}

export default NavigationRoutes;
