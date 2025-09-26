import conf from "../config/config.js";
import {Client, Account, ID} from "appwrite"

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
            .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);
        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name}) {
        try {
           const userAccount = await this.account.create(ID.unique(), email, password)
            if (userAccount) {
                return this.login({email, password}) ;
            } else {
                return userAccount
            }
        } catch (error) {
            console.log(`Error creating user : ${error}`);
        }
    }

    async login({email,password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log(`Error Login user : ${error}`);
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            if(error.code === 401 || error.type=== 'general_unauthorized_scope') return null;
            console.log(`Unauthorized Access : ${error}`);
        }
        return null;
    }

    async logout () {
        try{
            return await this.account.deleteSessions()
        }
        catch (error) {
            console.log(`Error Logout user : ${error}`);
            return null;
        }
    }

}

const authService = new AuthService();

export default authService;