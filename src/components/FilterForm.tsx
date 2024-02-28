import '../styles/filter-form.scss'

interface FilterFormProps {
  value: boolean
  onChange: (value: boolean) => void
}
const FilterForm = ({ value, onChange }: FilterFormProps) => {

  const handleChange = () => {
    onChange(!value)
  }

  return (
    <div>
      <form action="">
        <div className="filter">
          <input type="checkbox" name="answered" id="answered" checked={value} onChange={handleChange} />
          <label htmlFor="answered">Mostrar apenas questões não respondidas</label>
        </div>
      </form>
    </div>
  )
}

export default FilterForm