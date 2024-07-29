const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
  });
//connect to mongodb
mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://yashbodekar54:Ya2006sh@cluster0.xbvwmqc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MONGO Connected"))
.catch((err) => console.log("Connection Error", err));


app.use(bodyparser.json({limit:"2mb"}));
app.use(cors());

//routes
const todoRoutes = require('./routes/todo.routes');
//app.use('/api', todoRoutes);

// port 
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});