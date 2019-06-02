const express = require('express');
/* Min server med värden som hämtas tillsammans med min client via ett script i package.json "run dev". Eftersom jag inte får kommentera i .json filer så kan jag beskriva lite kort vad "run dev gör".
Den startar min server och installerar även packages åt användaren. Hela mitt projekt ligger i git som jag nu fått kläm på, för mig fungerar Git Bash allra bäst.*/
const app = express();

app.get ('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'Fred', lastName: 'Flintstone'},
        {id: 2, firstName: 'John', lastName: 'Red'},
        {id: 3, firstName: 'Arthur', lastName: 'Broad'}
    ];

    res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));