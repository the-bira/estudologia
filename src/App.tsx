import { useEffect, useState } from 'react'
import Exam from './components/Exam'
import FilterForm from './components/FilterForm'
import Header from './components/Header'
import Nav from './components/Nav'
import { AppProvider } from './context/app-context'
import examsData from './data/exam.json'
import './styles/main.scss'
import Container from './components/Container'
import ExamList from './components/ExamsList'


function App() {
  console.log(examsData.exams)
  return (
    <>
      <AppProvider initialExams={examsData.exams}>
        <Header />
        <Container>
          <Nav />
          <ExamList />
        </Container>
      </AppProvider>
    </>
  )
}

export default App
