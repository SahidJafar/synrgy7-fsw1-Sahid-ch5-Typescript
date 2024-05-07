import express, {Request, Response} from 'express'
import Router from '../routes/index' 

const app = express()
const {PORT = 8000} = process.env

app.get('/', (req:Request, res:Response)=>{
    res.json({message: 'Success!'})
})

// app.get('/:id', (req:Request, res:Response)=>{
//     const id:string = req.params.id
//     res.json({message: `Success with ID: ${id}`})
// })

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// Atur mesin tampilan EJS
app.set('view engine', 'ejs');
app.use(Router)


app.listen(PORT, ()=>{
    console.log(`Express nyala di http://localhost:${PORT}`);
})