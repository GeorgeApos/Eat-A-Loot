const { MongoCLient }= require('mongodb');
 
async function main() {
    const url = "mongodb+srv://dbUser:<paokaras>@cluster0.8a8tk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoCLient(url);

    try {

    }catch (e){
        console.error(e);
    }finally {
        await client(close);
    }
}

main().catch(console.error);