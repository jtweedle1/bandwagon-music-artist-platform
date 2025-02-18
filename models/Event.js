const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./User");

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
   //added time attribute
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    artist_id: {
      type: DataTypes.INTEGER,
      references: {
            model: 'User',
            key: 'id',
          },
    },
    event_image: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
// When calling image, when finding User, take userImage string, put that into an img tag src to show the image
  },
  //Figure out how to create image attribute
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Event",
  }
);

module.exports = Event