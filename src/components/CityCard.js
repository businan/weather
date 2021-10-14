const CityCard = (city) => {
    let details = "";
    if (city.weatherDetails && city.weatherDetails.hasOwnProperty("coord")) {
        details = (
            <div className="details">
                <h4>Weather Details</h4>
                <p>
                    {city.weatherDetails?.name}-
                    <span>{city.weatherDetails?.sys.country}</span>
                </p>
                <p>
                    {Math.floor(city.weatherDetails.main?.temp - 273.15)}&deg;
                </p>
                <p>{city.weatherDetails.weather[0]?.description}</p>
            </div>
        );
    } else {
        details = (
            <p>You need to type a city or the city you typed doesn't exist</p>
        );
    }

    return <div>{details}</div>;
};

export default CityCard;
