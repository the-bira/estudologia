import { useState } from 'react'
import Nav from '../components/Nav'
import FilterForm from '../components/FilterForm'
import ExamList from '../components/ExamsList'
import Header from '../components/Header'

const Home = () => {
  const [showOnlyUnanswered, setShowOnlyUnanswered] = useState<boolean>(false)

  return (
    <>
      <Header />
      <Nav />
      <FilterForm value={showOnlyUnanswered} onChange={setShowOnlyUnanswered} />
      <ExamList showOnlyUnanswered={showOnlyUnanswered} />
    </>
  )
}

export default Home 