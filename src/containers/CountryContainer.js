import React, {useState, useEffect} from 'react'
import CountryList from '../components/CountryList';
import Country from '../components/Country';
import CountryDetail from '../components/CountryDetail';
import FavouritesList from '../components/FavouritesList';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favourites, setFavourite] = useState([]);

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

    }
  
    const addToFavourites = function(country){
        setFavourite(country);
        favourites.push(country);
        setFavourite(favourites);
        console.log(favourites);
    }

    return(
        <> 
        {selectedCountry ? <CountryDetail selectedCountry={selectedCountry}/> : null}
        <FavouritesList favourites={favourites} population={favourites.population} onCountrySelected={onCountrySelected}/>
        <CountryList countries={countries} population={countries.population} onCountrySelected={onCountrySelected} addToFavourites={addToFavourites}/>
        
        </>
    )
}
export default CountryContainer