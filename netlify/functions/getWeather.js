const axios = require('axios');

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

exports.handler = async (event) => {
  try {
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=liljeholmen&appid=${WEATHER_API_KEY}&&units=metric`
    );
    console.log(response);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.log(error);
    return { statusCode: 500, body: error.toString() };
  }
};