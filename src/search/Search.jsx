import './search.css';

function Search() {
  return (
    <section className='search-section'>
        <h2>Search Courses</h2>
        <form action="">
            <input type="text" placeholder='Search for over 50+ courses'/>
            <button>Search</button>
        </form>
    </section>
  )
}

export default Search