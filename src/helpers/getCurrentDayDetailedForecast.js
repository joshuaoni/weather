const currentDayForecast = data => [
    {
        name: 'max temp',
        value: Math.round(data.max_temp),
        unit: '°C',
    },
    {
        name: 'min temp',
        value: Math.round(data.min_temp),
        unit: '°C',
    },
    {
        name: 'wind',
        value: Math.round(data.wind_speed),
        unit: 'mph',
    },
    {
        name: 'wind direction',
        value: data.wind_direction_compass,
        unit: '',
    },
    {
        name: 'humidity',
        value: data.humidity,
        unit: '%',
    },
    {
        name: 'air pressure',
        value: data.air_pressure,
        unit: 'mb',
    },
];

export default currentDayForecast;
