import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {useTypedSelector} from '../../hooks/useTypedSelector';
import {
    publicRoutes,
    adminRoutes,
    prepodRoutes,
    studentRoutes,
} from '../../router';

interface IAppRouter {
  developing?: boolean;
}

function AppRouter(props: IAppRouter) {
    const {admin} = useTypedSelector((state) => state.authorization);
    const {prepod} = useTypedSelector((state) => state.authorization);
    const {student} = useTypedSelector((state) => state.authorization);

    switch (true) {
        case props.developing:
            return (
                <Routes>
                    {adminRoutes.map((route) => (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={route.component}
                        />
                    ))}
                    {studentRoutes.map((route) => (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={route.component}
                        />
                    ))}
                    {prepodRoutes.map((route) => (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={route.component}
                        />
                    ))}
                    {publicRoutes.map((route) => (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={route.component}
                        />
                    ))}
                </Routes>
            );

        case admin:
            return (
                <Routes>
                    {adminRoutes.map((route) => (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={route.component}
                        />
                    ))}
                    {publicRoutes.map((route) => (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={route.component}
                        />
                    ))}
                </Routes>
            );

        case student:
            return (
                <Routes>
                    {studentRoutes.map((route) => (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={route.component}
                        />
                    ))}
                    {publicRoutes.map((route) => (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={route.component}
                        />
                    ))}
                </Routes>
            );

        case prepod:
            return (
                <Routes>
                    {prepodRoutes.map((route) => (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={route.component}
                        />
                    ))}
                    {publicRoutes.map((route) => (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={route.component}
                        />
                    ))}
                </Routes>
            );

        default:
            return (
                <div>
                    <Routes>
                        {publicRoutes.map((route) => (
                            <Route
                                key={route.id}
                                path={route.path}
                                element={route.component}
                            />
                        ))}
                    </Routes>
                </div>
            );
    }
}

export default AppRouter;
