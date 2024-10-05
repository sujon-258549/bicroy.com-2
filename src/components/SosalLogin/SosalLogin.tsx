"use client"

import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Loding from "../Loding/Loding"

// import './sical.css'
const SosalLogin = () => {

    const router = useRouter()
    const session = useSession()

    const handelSosalLogin = async (provider: string) => {
        const resp = await signIn(provider);

    }

    if (session.status === "authenticated") {

        router.push('/')
    }


    return (

        <>

            {
                session.status === "loading" && <Loding></Loding>
            }


            <div className='mx-auto flex justify-center'>


                <button onClick={() => handelSosalLogin("google")}
                    className="btn text-black mt-10 font-semibold text-[18px] px-10"
                >

                    <span className="ml-2">Sign In with Google</span>

                </button>


            </div>
        </>
    )
}

export default SosalLogin