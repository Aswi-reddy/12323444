require("dotenv").config();

const axios = require("axios");

async function Log(stack, level, packageName, message) {

    try {

        const response = await axios.post(

            "http://4.224.186.213/evaluation-service/logs",

            {
                stack: stack,
                level: level,
                package: packageName,
                message: message
            },

            {
                headers: {
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
                }
            }
        );

        console.log("Log created successfully");
        console.log(response.data);

    } catch (error) {

        console.log("Logging failed");

        console.log(
            error.response?.data || error.message
        );
    }
}

module.exports = Log;