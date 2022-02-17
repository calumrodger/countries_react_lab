import React from 'react' 

const CountryDetail = ({selectedCountry}) => {
    return (

        <div>
            <h3>{selectedCountry.name.common}</h3>
            <p>{selectedCountry.languages.mkd}</p>
            <p>{selectedCountry.capital}</p>
            <p>{selectedCountry.population}</p>
            {/* <p>{selectedCountry.borders}</p> */}
            <img src={selectedCountry.flags.png}></img>
        </div>
    )
}

export default CountryDetail