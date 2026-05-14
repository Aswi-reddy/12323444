const Log = require("./logger");

async function test() {

    await Log(
        "backend",
        "info",
        "service",
        "Notification service started successfully"
    );

}

test();