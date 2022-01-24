import { Sequelize } from "sequelize";
import express from "express"

const PORT = 80;



// use it before all route definitions

const app = express()
app.use(express.json())
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);
    next();
});

const DB_NAME = 'elementalwars'
const USER_NAME = 'root'
const PASSWORD = 'password'

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
}
})

const Wands = sequelize.define('wands', {
    IdAsset: {
        primaryKey: true,
        autoIncrement: false,
        type: Sequelize.STRING,
        allowNull: false
    },
    Rarity: {
        type: Sequelize.STRING,
        allowNull: false
    },
    StartFarm:{
        type: Sequelize.DATE,
        allowNull: false
    },
    EndFarm:{
        type: Sequelize.DATE,
        allowNull: false
    } 
})

app.get('/',(req,res)=>
{
    const check = "server is working";
    res.status(200).send(check);
})

app.get('/wandsone/:IdAsset', async(req, res) => {
   
    try {  
        const wand  = await Wands.findAll({
            where:{
                IdAsset:req.params.IdAsset
            }
        })
        const time = new Date(); 
        if (wand.length == 0) {
            res.json("Start Dust")
        }
        else if (time  < wand[0].EndFarm){
            res.json( ((wand[0].EndFarm-time) / (1000 * 60 * 60)).toFixed(2))
        }
        else{
            res.json("Harvest")
        }
    } 
    catch (error) 
    {
        res.status(500).json(req.params.IdAsset)
    }
})

app.get('/wand/:IdAsset', async(req, res) => {
   
    try {  
        const wand  = await Wands.findAll({
            where:{
                IdAsset:req.params.IdAsset
            }
        }) 
        if (wand.length == 0) {
            res.json(false)
        }
        else{
            res.json(true)
        }
    } 
    catch (error) 
    {
        res.status(500).json(IdAsset)
    }
})

app.post('/wands', async(req, res) => {
    try{
        const {IdAsset , Rarity }  = req.body;
        var StartFarm = new Date();
        var EndFarm = new Date() ;
        if(Rarity =="Rare"){
            EndFarm.setHours(EndFarm.getHours() + 48);
        }  
        else if(Rarity =="Mythical"){
            EndFarm.setHours(EndFarm.getHours() + 24);
        }
        else if(Rarity =="Legendary"){
            EndFarm.setHours(EndFarm.getHours() + 12);
        }
        else if(Rarity =="Immortal"){
            EndFarm.setHours(EndFarm.getHours() + 6);
        }
        const post = await Wands.create({IdAsset,Rarity,StartFarm,EndFarm});
        res.json(EndFarm);
    }catch(e){
        res.status(500).json(e);
    }
})

app.put('/wands', async(req, res) => {
    try{
        const IdAsset = req.body.IdAsset;
        const Rarity = req.body.Rarity;
        const wand  = await Wands.findAll({
            where:{
                IdAsset:IdAsset
            }
        }) 
        const time = new Date();
        if (wand[0].EndFarm < time) {
            var StartFarm = new Date();
            var EndFarm = new Date();
            if(Rarity =="Rare"){
                EndFarm.setHours(EndFarm.getHours() + 48);
            }  
            else if(Rarity =="Mythical"){
                EndFarm.setHours(EndFarm.getHours() + 24);
            }
            else if(Rarity =="Legendary"){
                EndFarm.setHours(EndFarm.getHours() + 12);
            }
            else if(Rarity =="Immortal"){
                EndFarm.setHours(EndFarm.getHours() + 6);
            }
            const put = await Wands.update(
                {
                    StartFarm:StartFarm,
                    EndFarm:EndFarm,
                },
                {
                    where:{
                        IdAsset:IdAsset
                    }
                });
            res.json(wand[0].StartFarm);
        }
        else{
            res.json(wand[0].EndFarm);
        }
    }catch(e){
        res.status(500).json(req.body);
    }
})

async function start() {
    try {
      await sequelize.sync()
      app.listen(PORT)
    } catch (e) {
      console.log(e)
    }
  }
  
start()


