import "dotenv/config";
import { Sequelize, DataTypes } from "sequelize";
import { db, User, NewProfile } from "./models";


const userSeedData = [
  { email: "test@gmail.com", password: "123456" },
  { email: "test2@email.com", password: "password" },
];


const seed = async () => {
  console.log("Beginning seed");

  // force true will drop the table if it already exists
  // such that every time we run seed, we start completely fresh
  await User.sync({ force: true });

  console.log('Tables have synced!');

  await User.bulkCreate(userSeedData, { validate: true })
    .then(() => {
      console.log('Users created');
    }).catch((err) => {
      console.log('failed to create seed users');
      console.log(err);
    });
  
  await User.create({ email: "athirdemail@aol.com", password: "123456" })
    .then(() => {
      console.log("Created single user");
    })
    .catch((err) => {
      console.log('failed to create seed users');
      console.log(err);
    })
    .finally(() => {
      db.close();
    });

};

const newProfileSeedData = [
  { name: "NASA", url: "123456" },
  { name: "ISRO", url: "password" },
];



const seed1 = async () => {
  console.log("Beginning seed for new profile");

  // force true will drop the table if it already exists
  // such that every time we run seed, we start completely fresh
  await NewProfile.sync({ force: true });

  console.log('Tables have synced!');

  await NewProfile.bulkCreate(newProfileSeedData, { validate: true })
    .then(() => {
      console.log('Profile created');
    }).catch((err) => {
      console.log('failed to create new Profile ');
      console.log(err);
    });
  
  await NewProfile.create({ name: "USA", url: "123456" })
    .then(() => {
      console.log("Created new profile ");
    })
    .catch((err) => {
      console.log('failed to create new profile');
      console.log(err);
    })
    .finally(() => {
      db.close();
    });

};

seed();
seed1();
