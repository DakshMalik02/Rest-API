const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/bfhl', (req, res) => {
    const requestData = req.body.data;
    const oddNumbers = requestData.filter(item => parseInt(item) % 2 !== 0 && !isNaN(item));
    const evenNumbers = requestData.filter(item => parseInt(item) % 2 === 0 && !isNaN(item));
    const alphabets = requestData.filter(item => isNaN(item)).map(item => item.toUpperCase());

    const responseData = {
        "is_success": true,
        "user_id": "john_doe_17091999",
        "email": "john@xyz.com",
        "roll_number": "ABCD123",
        "odd_numbers": oddNumbers,
        "even_numbers": evenNumbers,
        "alphabets": alphabets
    };

    res.json(responseData);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
