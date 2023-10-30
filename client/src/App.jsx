import { RouterProvider } from 'react-router-dom'
import './App.css'
import { createRoutes } from './Routes/Router'

function App() {

  return (
    <div>
      <RouterProvider router={createRoutes()} />
    </div>
  )
}

export default App
