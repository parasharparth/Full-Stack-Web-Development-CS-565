import axios from "./HttpService";

export const User = {
  async create(user) {
    return axios.post("/users"
      , { email: user.email, password: user.password }
    )
    
  }
}

export const NewProfile = {
  async create(user) {
    return axios.post("/users"
      , { name: user.name, url: user.url }
    )
    
  }
}