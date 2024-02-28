import { useState } from 'react'
import Nav from '../components/Nav'
import FilterForm from '../components/FilterForm'
import ExamList from '../components/ExamsList'
import Header from '../components/Header'
import Container from '../components/Container'

import '../styles/home.scss'
import Answered from '../components/Answered'

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

            : <Answered />}
        </div>
      </Container>
    </>
  )
}

export default Home 