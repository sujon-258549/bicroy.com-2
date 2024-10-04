import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import dbClient from "../../../../db/dbClient"
import bcrypt from "bcrypt";

const handler = NextAuth({
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {}
            },
             async authorize (credentials){
                const { email, password } = credentials;
                if (!email || !password) {
                    return null; // Missing credentials
                }
            
                try {
                    const client = await dbClient; // Ensure dbClient is initialized properly
                    const db = client.db('bicroy_com');
                    const collection = db.collection('users');
            
                    const currentUser = await collection.findOne({ email });
            
                    if (!currentUser) {
                        return null; // User not found
                    }
            
                    const passwordChack = bcrypt.compareSync(password, currentUser.password);
                    if (!passwordChack) {
                        return null; 
                    }
            return currentUser;
                  
                } catch (error) {
                    console.error("Database access error:", error);
                    return null; // Handle error appropriately
                }
            }
            
        })
    ],
    collbacks: {},
    pages: {
        signIn: "/login"
    }



})


export { handler as GET, handler as POST }