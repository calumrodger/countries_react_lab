import React from 'react' 
import CountryContainer from '../containers/CountryContainer';
import CountryList from './CountryList';
import CountryDetail from './CountryDetail';

const Country = ({country, onCountryClick, addToFavourites}) => {

    const handleClick = function(){
        console.log(country);
        onCountryClick(country);

    }

    const handleFavClick = function(){
        console.log(country);
        addToFavourites(country);
    }



    return(
    <>
    <p onClick={handleClick}>
        Name: {country.name.official}<br></br>
    Population: {country.population}  </p>
    <button onClick={handleFavClick}>Add</button>
    </>
        
    )}

export default Country;