const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Wholeness Backend API Running');
});

// Import Routes (Placeholder)
// const foodRoutes = require('./routes/foodRoutes');
// app.use('/api/food', foodRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
