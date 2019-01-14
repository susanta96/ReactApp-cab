const express = require('express');

const app = express();

app.get('/api/customers', (req, res ) => {
    const customers = [
        {id: 1, firstName: 'Susanta', lastName: 'Chakraborty'},
        {id: 2, firstName: 'Ayan', lastName: 'Das'},
        {id: 3, firstName: 'Vishal', lastName: 'Sarkar'},
    ];

    res.json(customers);
});



const PORT = 5000;

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));