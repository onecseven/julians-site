let { MongoClient } = require("mongodb")
let { password } = require("../auth/db")

const uri = `mongodb+srv://tati:${password}@cluster0.sutow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

MongoClient.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (error, client) => {
  if (error) {
    return console.log("Connection failed for some reason");
  }
  console.log("Connection established - All well");
})

