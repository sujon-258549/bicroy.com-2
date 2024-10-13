// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";


// const Privateroute = ({children}) => {


//   const session = useSession()
//   const router = useRouter()
  
//     if(session?.data?.user?.email){
//         return children
//     }
   
//         return router.push('/login')
    
// };

// export default Privateroute;

import React from 'react'

const Privaterouter = () => {
  return (
    <div>Privaterouter</div>
  )
}

export default Privaterouter