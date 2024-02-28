import '../styles/status.scss'

enum StatusType {
  'em_andamento' = 'Em Andamento',
  'respondido' = 'Respondido',
  'nao_respondido' = 'Não Respondido',
}

const Status = ({ status }: { status: keyof typeof StatusType }) => {
  return (
    <div className={`status ${status}`}>
      {StatusType[status]}
    </div >
  )
}

export default Status