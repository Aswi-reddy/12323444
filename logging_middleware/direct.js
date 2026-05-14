require("dotenv").config();
const axios = require("axios");

async function test() {
    try {
        const token = process.env.ACCESS_TOKEN;
        
        if (!token) {
            console.error("❌ ERROR: ACCESS_TOKEN not found in .env file");
            return;
        }

        console.log("📤 Sending log to backend...");

        const response = await axios.post(
            "https://4.224.186.213/evaluation-service/logs",
            {
                stack: "backend",
                level: "error",
                package: "handler",
                message: "test log"
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                httpsAgent: require("https").Agent({ rejectUnauthorized: false })
            }
        );

        console.log("✅ SUCCESS: Log created");
        console.log("📊 Response:", response.data);

    } catch (error) {
        console.error("❌ ERROR occurred:");
        console.error("Status:", error.response?.status);
        console.error("Data:", error.response?.data);
        console.error("Message:", error.message);
    }
}

test();