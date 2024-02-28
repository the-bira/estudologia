import { useContext, useEffect } from 'react'
import { AppContext } from '../context/app-context'

const ExamsAnswered = () => {
  const { filterExamsByStatus } = useContext(AppContext)

  const status = 'RESPONDIDO'

  useEffect(() => {
    filterExamsByStatus(status)
  }, [])
  return (
    <div className="exams-answered">
      <h1>Exames Respondidos</h1>
    </div>
  )
}

export default ExamsAnswered

