function Search(){
    return(
        <div>
        <div className="Searchbar">
            <div className="Searchbar_icon1">
                <img src={require('./images/search.png')} style={{width:"20px",height:"20px"}} alt="search"></img>
                <input placeholder="Condition,procedure,Speciality.."></input>
            </div>
            <div className="Searchbar_icon2">
                <img src={require('./images/location.png')} style={{width:"20px",height:"20px"}} alt="location"></img>
                <input placeholder="City,State or zipcode"></input>
            </div>
            <div className="Searchbar_icon3">
                <img src={require('./images/card.png')} style={{width:"20px",height:"20px"}} alt="card"></img>
                <input placeholder="Insurance carrier"></input>
            </div>
            <div className="Searchbar_b1">
                <button>Find now</button>
            </div>
        </div>
        <div className='line'>
        </div>
        </div>
    )
}
export default Search