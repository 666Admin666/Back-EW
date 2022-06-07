import { Sequelize } from "sequelize";
import express from "express"

const PORT = 4000;


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
//const PASSWORD = ''
const PASSWORD = 'password'

const wands = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
}
})
/*
const Wands = wands.define('wands', {
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
*/
const Staking = wands.define('staking', {
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
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    IdTemplate: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Ability: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Mail: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
const User = wands.define('users', {
    UserId: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false
    },
    UserName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Coins: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
const UserResourse = wands.define('userresourses', {
    UserIdRes: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false
    },
    ResourseId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    UserId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})
const Resourse = wands.define('resourses', {
    ResourseId: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    RarityId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})
const Wands = wands.define('wands', {
    AssetId: {
        primaryKey: true,
        autoIncrement: false,
        type: Sequelize.STRING,
        allowNull: false
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Rarity: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Ability: {
        type: Sequelize.STRING,
        allowNull: false
    },
    UserId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})
const Land = wands.define('lands', {
    LandId: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    RarityId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    UserId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})
const Magicon = wands.define('magicons', {
    MagiconId: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false
    },
    MP: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    HP: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Speed: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Breeding: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    UserId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})
const Characteristics = wands.define('characteristics', {
    CharacteristicsId: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
const Skill = wands.define('skills', {
    SkillsId: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Numbers:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    RarityId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    CastingTime: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    ManaCost: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Reloading: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Duration: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
})
const MagiconsSkills = wands.define('magiconskills', {

})
const MagiconsCharacteristics = wands.define('magiconcharacteristics', {
    Amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})
const Rarity = wands.define('raritys', {
    RarityId: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Rarity: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
const Type = wands.define('types', {
    TypeId: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Type: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

User.hasMany(UserResourse ,{ as: 'UserRes' , foreignKey: 'UserId'})
UserResourse.hasOne(Resourse ,{ as: 'Res' , foreignKey:'ResourseId' })

Magicon.belongsToMany(Skill, { through: MagiconsSkills })
Skill.belongsToMany(Magicon, { through: MagiconsSkills  })

Magicon.belongsToMany(Characteristics , {through:MagiconsCharacteristics })
Characteristics.belongsToMany(Magicon , {through:MagiconsCharacteristics })

/* TEST WORKING SERVER */
app.get('/',(req,res)=>
{
    const check = "server is working";
    res.status(200).send(check);
})
app.get('/time',(req,res)=>
{
    const time = new Date(); 
    res.send(time);
})


/* WANDS */
app.get('/wands/:UserId' ,async(req, res) => {
    try{
        const wands  = await Wands.findAll({
            where:{
                UserId:req.params.UserId
            }
        }) 
        if (wands.length == 0) {
            res.json("null")
        }
        else{
            res.json(wands);
        }
    }catch(e){
        res.status(500).json(e);
    }
})
app.post('/wands', async(req, res) => {
    try{
        const {AssetId , Name ,Rarity ,Ability, UserId }  = req.body;
        await Wands.create({AssetId,Name,Rarity,Ability,UserId});
        res.json("Success");
    }catch(e){
        res.status(500).json(e);
    }
})
/* LANDS */
app.get('/lands/:UserId' ,async(req, res) => {
    try{
        const lands  = await Land.findAll({
            where:{
                UserId:req.params.UserId
            }
        }) 
        if (lands.length == 0) {
            res.json("null")
        }
        else{
            res.json(lands);
        }
    }catch(e){
        res.status(500).json(e);
    }
})
app.post('/lands' ,async(req, res) => {
    try{
        const {Name , RarityId ,UserId }  = req.body;
        await Land.create({Name,RarityId,UserId}) 
        res.json("Success");
    }catch(e){
        res.status(500).json(e);
    }
})
/*Magicons */
app.get('/magicons/:UserId' ,async(req, res) => {
    try{
        const UserId = req.params.UserId
        const magicons = await Magicon.findAll({
            where:{
                UserId:UserId
            }, 
            include: [Characteristics, Skill]
        })
        res.json(magicons);
        
    }catch(e){
        res.status(500).json(e);
    }
})

app.post('/magicons', async(req, res) => {
    try{
        const { MP ,HP ,Speed, Breeding,UserId}  = req.body
        const CharacteristicsId = req.body.Characteristics
        const SkillsId = req.body.SkillsId
        const magicon = await Magicon.create({MP,HP, Speed, Breeding,UserId,})
        const MagiconId = magicon.MagiconId
        for (let i = 0; i < CharacteristicsId.length; i++) {
            await MagiconsCharacteristics.create(
            {
                Amount:CharacteristicsId[i].Amount,
                magiconMagiconId:MagiconId,
                characteristicCharacteristicsId:CharacteristicsId[i].characteristicCharacteristicsId
            });
        }
       for (let i = 0; i < SkillsId.length; i++) {
            await MagiconsSkills.create(
            {
                magiconMagiconId:MagiconId,
                skillSkillsId:SkillsId[i]
            });
       }
        
        res.json("Success");
    }catch(e){
        res.status(500).json(e);
    }
})
/* User Data */
app.get('/getuserid/:Email' ,async(req, res) => {
    try{
        const Email = req.params.Email
        const data = await User.findOne({
            where:{
                Email:Email
            }
        })
        res.json(data);
        
    }catch(e){
        res.status(500).json(e);
    }
})
app.post('/setuserid' ,async(req, res) => {
    try{
        const { UserName , Email ,Coins}  = req.body
        const data = await User.create({
            UserName:UserName,
            Email:Email,
            Coins:Coins
            
        })
        for (let i = 0; i < 12; i++) {
            await UserResourse.create({
                ResourseId:i,
                Amount:0,
                UserId:data.UserId
            })
          
        }
        res.json(data.UserId)
        
    }catch(e){
        res.status(500).json(e);
    }
})
app.get('/userdata/:UserId' ,async(req, res) => {
    try{
        const UserId = req.params.UserId
        var responsedata = []
        const resourses = await UserResourse.findAll({
            where:{
                UserId:UserId
            },
            include:[{
                association:'Res'
            }]
        })   
        if (resourses.length == 0) {
            res.json("User Undefined")
        }
        else{
            for (let i = 0; i < resourses.length; i++) {
                responsedata.push({
                        Name:resourses[i].Res.Name,
                        RarityId:resourses[i].Res.RarityId,
                        Amount:resourses[i].Amount
                    }
                )
            }
            res.json(responsedata);
        }
        

    }catch(e){
        res.json(e);
    }
})
app.put('/coinsminus' ,async(req, res) => {
    try{
        const {Amount,UserId} = req.body
        const data = await User.findOne({
            where:{
                UserId:UserId
            }
        })
        var newCoins = Number(data.Coins) - Number(Amount)
        await User.update({
            Coins:newCoins
        },{
            where:{
                UserId:UserId
            }
        });
        res.json(newCoins);
        
    }catch(e){
        res.status(500).json(e);
    }
})
app.put('/coinsplus' ,async(req, res) => {
    try{
        const {Amount,UserId} = req.body
        const data = await User.findOne({
            where:{
                UserId:UserId
            }
        })
        var newCoins = Number(data.Coins) + Number(Amount)
        await User.update({
            Coins:newCoins
        },{
            where:{
                UserId:UserId
            }
        });
        res.json(newCoins);
    }catch(e){
        res.status(500).json(e);
    }
})
app.put('/resoursesminus', async(req, res) => {
    try{
        const { Cost , Name ,RarityId,UserId}  = req.body
        const resourses = await Resourse.findOne({
            where:{
                Name:Name,
                RarityId:RarityId
            }
        })
        const userresourses = await UserResourse.findOne({
            where:{
                ResourseId:resourses.ResourseId,
                UserId:UserId
            }
        })
        if (Cost>userresourses.Amount) {
            res.json("Not enough resources")
        }
        else{
            var newAmount = userresourses.Amount - Cost
            await UserResourse.update(
            {
                Amount:newAmount
            },{
                where:{
                    ResourseId:resourses.ResourseId,
                    UserId:UserId,
                }
            });
        }
        res.json(newAmount)
    }catch(e){
        res.status(500).json(e);
    }
})
app.put('/resoursesplus', async(req, res) => {
    try{
        const { PayDay , Name ,RarityId,UserId}  = req.body
        const resourses = await Resourse.findOne({
            where:{
                Name:Name,
                RarityId:RarityId
            }
        })
        const userresourses = await UserResourse.findOne({
            where:{
                ResourseId:resourses.ResourseId,
                UserId:UserId
            }
        })
        var newAmount = userresourses.Amount + PayDay
        await UserResourse.update(
        {
             Amount:newAmount
        },{
            where:{
                ResourseId:resourses.ResourseId,
                UserId:UserId,
            }
        });
        
        res.json(newAmount)
    }catch(e){
        res.status(500).json(e);
    }
})

/* STAKING  */ 
app.get('/staking/:Mail' ,async(req, res) => {
    try{
        const staked  = await Staking.findAll({
            where:{
                Mail:req.params.Mail
            }
        }) 
        if (staked.length == 0) {
            res.json("null")
        }
        else{
            res.json(staked);
        }
    }catch(e){
        res.status(500).json(e);
    }
})

app.post('/staking', async(req, res) => {
    try{
        const {AssetId , Name ,Rarity ,Ability, UserId }  = req.body;
        await Staking.create({AssetId,Name,Rarity,Ability,UserId});
        res.json("Success");
    }catch(e){
        res.status(500).json(e);
    }
})

/*
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
    const time = new Date(); 
    try {  
        const wand  = await Wands.findAll({
            where:{
                IdAsset:req.params.IdAsset
            }
        }) 
        if (wand.length == 0) {
            res.json(0)
        }
        else if (time < wand[0].EndFarm){
            res.json(1)
        }
        else if (time > wand[0].EndFarm){
            res.json(2)
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
*/
async function start() {
    try {
      await wands.sync()
      app.listen(PORT)
    } catch (e) {
      console.log(e)
    }
  }
  
start()


