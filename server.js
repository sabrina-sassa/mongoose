require ('dotenv').config()
const mongoose= require ('mongoose')

connectDb().catch(err=> console.log(err));

async function connectDb (){
    await mongoose.connect(process.env.MONGO_URL)
    console.log('connection OK! ')
}


let userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    age: {type:Number},
    favoriteFoods:{type:Array}

})
const User = mongoose.model('User', userSchema)

// const firstUser= new User ({
//     name:'sassa',
//     age:26,
//     favoriteFoods:['pizza','tacos']
// })

// const firstSave=  firstUser.save()
// console.log(firstSave)


// const secondCre= User.create({ 
//     name:'aaa',
//     age:32,
//     favoriteFoods:['pizza']
// });
// console.log(secondCre)

// const name= User.find({name:'sassa'})
// console.log(name)

// const favoriteFood=User.findOne(favoriteFoods=['pizza']);
// console.log(favoriteFood)

//User.findById(id)

User.findOneAndUpdate({name:"sassa",age:20})

User.findByIdAndRemove({id:'6540e17f918d114a2873be02 '})


