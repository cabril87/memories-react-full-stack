import express from 'express';
import bodyParser from 'body-parser';
import mongooose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://REACTUSER:3687@cluster0.sh0yu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT =process.env.PORT || 5000;

mongooose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
.catch((error) => console.log(error.message))

mongooose.set('useFindAndModify', false)



