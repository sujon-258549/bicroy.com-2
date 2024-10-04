
import NextAuth from 'next-auth/next'

const handler = async () => NextAuth({

    session: {},
    providers: [],
    collbacks: {},
    pages: {
        login: "/login"
    }


})


export { handler as GET, handler as POST }