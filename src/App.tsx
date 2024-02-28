
import { AppProvider } from './context/app-context'
import examsData from './data/exam.json'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './pages/Home'

import './styles/main.scss'
import Answer from './pages/Answer'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: ":examId",
    element: <Answer />,

  },
])

function App() {
  console.log(examsData.exams)
  return (
    <AppProvider initialExams={examsData.exams}>
      <RouterProvider router={router} />
    </AppProvider>
  )
}

export default App
