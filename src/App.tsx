import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth'
import { store } from './redux/store'
import RoutesApp from './routes/routes'

function App() {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <RoutesApp>
          </RoutesApp>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
