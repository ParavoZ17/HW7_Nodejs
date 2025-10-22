import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js"; 

const App = sequelize.define(
  "App",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "Apps", 
    timestamps: false, 
  }
);

// await App.sync({ alter: true });

export default App;
