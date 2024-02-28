import '../styles/status.scss'
import { StatusType } from '../types/ExamType'

enum StatusTypeDesc {
  'NAO_RESPONDIDO' = 'Não Respondido',
  'RESPONDIDO' = 'Respondido',
  'EM_ANDAMENTO' = 'Em Andamento'
}

const Status = ({ status }: { status: StatusType }) => {
  return (
    <div className={`status ${status}`}>
      {StatusTypeDesc[status]}
    </div >
  )
}

export default Status