import { useState } from 'react'
import Nav from '../components/Nav'
import FilterForm from '../components/FilterForm'
import ExamList from '../components/ExamsList'
import Header from '../components/Header'
import Modal from '../components/Modal'
import Container from '../components/Container'

import '../styles/home.scss'
import AnsweredQuestionsNav from '../components/AnsweredQuestionsNav'

const Home = () => {
  const [activeNavItem, setActiveNavItem] = useState<string>('Questões')
  const [showOnlyUnanswered, setShowOnlyUnanswered] = useState<boolean>(false)

  const handleNavItemClick = (itemName: string) => {
    setActiveNavItem(itemName)
    setShowOnlyUnanswered(false)
  }

  return (
    <>
      <Header />
      <Container>
        <div className="home">
          <Nav activeItem={activeNavItem} onItemClick={handleNavItemClick} />
          {activeNavItem === 'Questões' ?
            <>
              <FilterForm value={showOnlyUnanswered} onChange={setShowOnlyUnanswered} />
              <ExamList showOnlyUnanswered={showOnlyUnanswered} />
            </>

            : <AnsweredQuestionsNav />}
        </div>
      </Container>
    </>
  )
}

export default Home 