import '../styles/filter-form.scss'
const FilterForm = () => {

  return (
    <div>
      <form action="">
        <div className="filter">
          <input type="checkbox" name="answered" id="answered" />
          <label htmlFor="answered">Mostrar apenas questões não respondidas</label>
        </div>
      </form>
    </div>
  )
}

export default FilterForm