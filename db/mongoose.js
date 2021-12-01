const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dbUser:<password>@cluster0.8a8tk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority                                                ', {
    useNewUrlParser: true, 
    useUnifiedTOpology: true
}).then(() => {
    console.log("DB Connection Successful")
}).catch(() => {r
    console.log("Something's wrong.", error);
})

