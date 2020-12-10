const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const postsRouters = require('./routes/posts');
const app = express();
dotenv.config();

app.use(bodyParser.json({limit:'30mb' , extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb' , extended:true}));
app.use(cors());

app.use('/posts' , postsRouters);
app.get('/' , (req , res) => {
        res.send('Hello Memories App APIs');
});

const PORT = process.env.PORT || 5000;
// mongod db connections 
mongoose.connect(process.env.CONNECTION_URL , {useNewUrlParser:true , useUnifiedTopology:true })
        .then(() => app.listen(PORT , () => console.log(`Server Connected Successlly on Port ${PORT}`)))
        .catch(error => console.log(error.message))

mongoose.set('useFindAndModify', false);
