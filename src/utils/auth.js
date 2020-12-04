import axios from 'axios';

class AuthService {
    constructor() {
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_PROJECT3_API}/api`,
            // SEND AUTHENTICATED ENCRYPTED INFO BACK TO THE SERVER
            //This is setting set-cooke on the header request
            withCredentials: true
        });
        this.service = service;
    }
    signup =(username, password, email, name, fileUrl) => {
        return this.service.post('/signup', {username, password, email, name, fileUrl});
    }

    login = (username, password) => {
        return this.service.post('/login', {username, password});
    }
    
    logout = () => {
        return this.service.post('/logout');
    }

    //THIS RETURNS IF THE USER IS EITHER WITH  AN ACTIVE SESSION OR NOT
    loggedin = () => {
        return this.service.get('/loggedin');
    }
}

export default AuthService;