import ReactWeather, { useOpenWeather } from 'react-open-weather';

const WeatherWidget = () => {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: 'f99be3d016f40b82ae651c29c47cafab',
        lat: '48.5216',
        lon: '9.0576',
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
    });

    return (
        <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Tübingen"
        unitsLabels={{ temperature: 'C°', windSpeed: 'Km/h' }}
        showForecast
        />
    );
};

export default WeatherWidget;