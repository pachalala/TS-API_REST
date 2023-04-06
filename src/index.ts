import express  from 'express';


import   {pool }  from './db'

const app = express();


app.use(express.json());

const PORT = 3000;

app.get('/ping',  async ( _req , res)=>{
 
  const [rows, _fields] = await pool.execute('SELECT * FROM platos');

  res.send(rows);

} )

app.listen(PORT, ()=>{

    console.log('escuchando en jojo',PORT);
}    
 );