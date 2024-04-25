const express = require('express');

 const morgan=require('morgan');
 const cors= require('cors')
  PORT =3008;
  require('./DB/connection')

  const userRoutes=require('./Routes/userRoutes');
  const postRoutes=require('./Routes/postRoutes');


  const app = express();
  app.use(morgan('dev'));
  app.use(cors());
  app.use('/api',userRoutes)
  app.use('/api',postRoutes)



  app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`)
  })
