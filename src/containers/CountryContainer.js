import React, {useState, useEffect} from 'react'
import CountryList from '../components/CountryList';
import Country from '../components/Country';
import CountryDetail from '../components/CountryDetail';
import FavouritesList from '../components/FavouritesList';
import './CountryContainer.css'

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favourites, setFavourite] = useState([]);
    const [showCountryList, setCountryList] = useState(true);

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = function(){
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(countries => setCountries(countries))
        console.log(countries);
    }

    
    const onCountrySelected = function(country){
        setSelectedCountry(country);
        setCountryList(false);

    }
  
    const addToFavourites = function(country){
        setFavourite(country);
        favourites.push(country);
        setFavourite(favourites);
        console.log(favourites);
    }
    
    // const FavList = () => {
    // <ul>
    // {favourites.map(country =>(
    //     <li key={country.id}>
    //         <div>{country.name.common}</div>
    //         </li>
    // ))}
    // </ul>
    // }
    return(
        <> 
        <div class="favourites">
        <FavouritesList favourites={favourites} population={favourites.population} onCountrySelected={onCountrySelected} addToFavourites={addToFavourites}/>
        </div>
        <div class="selected">
        {selectedCountry ? <CountryDetail selectedCountry={selectedCountry}/> : null}
        </div>
        <div class="all">
        {showCountryList ? <CountryList countries={countries} population={countries.population} onCountrySelected={onCountrySelected} addToFavourites={addToFavourites}/> : null}
        </div>
        </>
    )
}
export default CountryContainer