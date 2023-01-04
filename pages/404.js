import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
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
    <div className="not-found">
      <h1>Opppss..</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the 
        <Link href="/">
          <a> Homepage</a>
        </Link>
      </p>
    </div>
  )
}

export default NotFound
