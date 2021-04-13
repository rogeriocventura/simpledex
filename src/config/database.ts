import mongoose from "mongoose";

mongoose
    .connect(
        "mongodb://topicosAdmin:1165143@cluster0-shard-00-00.5j1ld.mongodb.net:27017,cluster0-shard-00-01.5j1ld.mongodb.net:27017,cluster0-shard-00-02.5j1ld.mongodb.net:27017/simpledexDatabase?ssl=true&replicaSet=atlas-kjmy5a-shard-0&authSource=admin&retryWrites=true&w=majorit",
        {useNewUrlParser:true,useUnifiedTopology:true}    
    )
    .then(() => {
        console.log("conectado no banco de dados com sucesso");
    })
    .catch((error) => {
        console.log(`Erro ao conectar com o banco: ${error}`);
    });



export { mongoose };