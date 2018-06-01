let request = require("request");

const headers = {
    'Content-Type': 'application/json',
};

const options = {
    url: 'https://f156929f.ngrok.io/fb/webhook',
    // port: 3978,
    method: 'POST',
    headers,
    form: {
        "object": "page",
        "entry": [
            {
                "id": "324113658091070",
                "messaging": [
                    {
                        "sender": {
                            "id": "1790561557643460"
                        },
                        "recipient": {
                            "id": "324113658091070"
                        },
                        "message": {
                            "text": "Hello"
                        }
                    }
                ]
            }
        ]
    }
};

// Start the request
request(options, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        // Print out the response body
        console.log(body)
    }
});