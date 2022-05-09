import { db, User,NewProfile } from "../database/models";

export function createUser(req, res) {

  const email = req.body.email;
  const password = req.body.password;
  console.log(`in createuser with ${email}:${password}`);
  User.create({ email, password })
    .then(() => {
      console.log("Created single user");
      res.status(200).json({ message: "Created user successfully" });
    })
    .catch((err) => {
      console.log('failed to create users');
      console.log(err);
      res.status(500).json({ message: err });
    });

}

export function createNewProfile(req, res) {

  const name = req.body.name;
  const url = req.body.url;
  console.log(`in NewProfile with ${name}:${url}`);
  NewProfile.create({ name, url })
    .then(() => {
      console.log("Created new profile");
      res.status(200).json({ message: "Created new profile successfully" });
    })
    .catch((err) => {
      console.log('failed to create new profile');
      console.log(err);
      res.status(500).json({ message: err });
    });

}