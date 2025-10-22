import sequelize from "./sequelize.js";
import App from "./models/App.js";


const connectDatabase = async()=> {
    try {
        await sequelize.authenticate();
        console.log("Successfully connect database");
        await App.sync({ alter: true });
    
    }
    catch(error) {
        console.log(`Error connect database: ${error.message}`);
        throw error;
    }
}

export default connectDatabase;