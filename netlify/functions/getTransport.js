const axios = require('axios');

const TRANSPORT_API_KEY = process.env.TRANSPORT_API_KEY;

exports.handler = async (event) => {
  try {
    const response = await axios.get(
        `https://api.resrobot.se/v2.1/departureBoard?id=740004046&duration=10&format=json&accessId=${TRANSPORT_API_KEY}`

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