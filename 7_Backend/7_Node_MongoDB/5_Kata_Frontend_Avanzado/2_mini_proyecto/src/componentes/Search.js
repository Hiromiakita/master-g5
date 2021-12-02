//imports


//componente

const Search = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <form className="container-fluid">
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">Search</span>
                    <input type="text" className="form-control" placeholder="Pokemon" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
            </form>
        </nav>
    )
}


export default Search;