let express = require('express');
let app = express();

let PORT = 3000;
let cors = require('cors');
app.use(cors());


app.use(express.static('public'));
app.use(express.json());

let arr = [
    {id:0, email: "rahulrathee427@gmail.com", password:'123'},
    {id:1, email: "ratheerahul602@gmail.com", password:'fuck'}
]

app.post('/login', (req, res) => {
    let {email, password} = req.body;
    let user = arr.find((user) => user.email === email);
    if(user && user.password === password){
        res.status(200).json({message:"Login successful"});
    }
    else{
        res.status(401).json({message: "Login failed"});
    }
})

app.post('/signup', (req, res) => {
    let {email, password} = req.body;
    arr.push({email, password});
    res.status(200).send(arr);    
})

app.delete('/delete/:id', (req, res) => {
    let id = req.params.id;
    arr.splice(id, 1);
    res.status(200).send(arr);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});