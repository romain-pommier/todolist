const mongoose = require("mongoose")


mongoose
    .connect("mongodb://romain:1234@127.0.0.1/todoList?authSource=admin", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("connexion mongo établie"))
    .catch((error) => console.log(error))