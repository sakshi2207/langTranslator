import express,{Request,Response} from "express";
const {Translate} = require('@google-cloud/translate').v2;

import cors from "cors";
import bodyParser from "body-parser";

const app = express()
const PORT =process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.post('/translateFrench', async (req:Request, res:Response) =>{
    const text = req.body.text;
    const fromLag = req.body?.fromLag || "en";
    const toLang = req.body?.toLag || "fr";

    if(!text){
        res.status(400).json({error:'Missing text parameter'})
    }

    try{
      const projectId=process.env.PROJECT_ID;
      const translate=new Translate({projectId})
     
      const target = toLang.slice(0,2).toLocaleLowerCase();
      const from=fromLag.slice(0,2).toLocaleLowerCase();
      const [translation] = await translate.translate(text, {from:from, to:target});
      res.json({translation: translation });
    
    }catch(error) {
        console.error('Translation error:', error);
        res.status(500).json({ error: 'Translation error' });
    }
});


app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});