import Exam from '../../components/Exam'
import FilterForm from '../../components/FilterForm'
import Header from '../../components/Header'
import Nav from '../../components/Nav'

export { Page }

function Page() {
  return (
    <>
      <Header />
      <Nav />
      <FilterForm />
      <Exam title="Teste" status="Em andamento" total={15} />
    </>
  )
}
