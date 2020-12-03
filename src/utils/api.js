import axios from 'axios';

class ProfileService {
    constructor() {
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_PROJECT3_API}/api`
        });
        this.service = service;
    }

    getAll() {
        //axios.get('http://localhost:5000/characters);
        return this.service.get('/profile');
    }

    getProject(id) {
        //axios.get('http://localhost:5000/characters/1);
        return this.service.get(`/profile/${id}`);
    }

    addProject(profile) {
        //axios.post('http://localhost:5000/characters/, { name: 'miguel});
        return this.service.post('/profile', profile);
    }

    //CREAYE DELETE PROKECT FUNTION FOR OUR profileervice

    deleteProject(id) {
        return this.service.delete(`/profile/${id}`);
    }

    updateProject(updatedProfile) {
        return this.service.put(`/profile/${updatedProfile.id}`, updatedProfile);
    }
}


export default ProfileService;