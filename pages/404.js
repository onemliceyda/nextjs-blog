import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Head from "next/head"
useRouter
const NotFound = () => {
    const router=useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            //router.go(1)
            router.push("/");//redirect to homepage
        },3000)
    },[])
  return (
    <>
      <Head>
        <title>Ninja List | 404 Not Found  </title>
        <meta name="keywords" content="ninjas" />
      </Head>
    <div className="not-found">
      <h1>Opppss..</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the 
        <Link href="/">
          <a> Homepage</a>
        </Link>
      </p>
    </div></>
  )
}

export default NotFound
