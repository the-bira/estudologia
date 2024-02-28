export type StatusType = 'NAO_RESPONDIDO' | 'EM_ANDAMENTO' | 'RESPONDIDO'
export type Exam = {
  id: number;
  name: string;
  timeSeconds: number;
  timeAnswer: number;
  status: StatusType;
  questions: Array<{
    title: string;
    answer: string | null;
  }>;
};