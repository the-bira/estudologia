import Exam from './components/Exam'
import FilterForm from './components/FilterForm'
import Header from './components/Header'
import Nav from './components/Nav'
import './styles/main.scss'


function App() {


  return (
    <>
      <Header />
      <Nav />
      <FilterForm />
      <Exam title="Teste" status="Em andamento" total={15} />
    </>
  )
}

export default App
