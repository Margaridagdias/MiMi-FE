import axios from "axios";

class ProfileService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_PROJECT3_API}/api`,
      withCredentials: true,
    });
    this.service = service;
  }

  getAllPictures() {
    //axios.get('http://localhost:5000/characters);
    return this.service.get("/main");
  }

  getProfile() {
    //for search bar?

    return this.service.get(`/profile`);
  }

  getMyProfile() {
    return this.service.get("/my-profile");
  }

  editProfile(editProfile) {
    return this.service.put('/edit-profile', editProfile);
  }


addPost(imageUrl, description) {
    return this.service.post("/create-post", {imageUrl, description});
  }
  uploadFile(uploadData) {
    return this.service.post("/upload", uploadData);
  }
}

export default ProfileService;
