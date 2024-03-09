import Categories from '@/pages/categories';
import CategoryDetails from '@/pages/category-details';
import { ContentDetails } from '@/pages/content_details';
import { Home } from '@/pages/home';
import { Login } from '@/pages/login';
import SignUp from '@/pages/sign_up';
import { useRoutes } from 'react-router-dom';
import { ProtectedRoute } from './protected-route';

const RoutesApp = () => {
    const routes = useRoutes([
        {
            path: "/home",
            element:
                <ProtectedRoute>
                    <Home />
                </ProtectedRoute>
        },
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/sign-up",
            element: <SignUp />
        },
        {
            path: "/categories",
            element: <ProtectedRoute>
                <Categories />
            </ProtectedRoute>
        },
        {
            path: "/media-details/:id",
            element: <ProtectedRoute>
                <ContentDetails />
            </ProtectedRoute>
        },
        {
            path: "/category-details/:id",
            element: <ProtectedRoute>
                <CategoryDetails />
            </ProtectedRoute>
        },
    ]);
    return routes;
}

export default RoutesApp