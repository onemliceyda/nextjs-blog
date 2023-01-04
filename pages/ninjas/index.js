import Head from "next/head"
import styles from  "../../styles/Ninjas.module.css"
import Link from "next/link";
export const getStaticProps=async()=>{
  //fetching data
  //this runs before the component is rendered
  const res=await fetch ("https://jsonplaceholder.typicode.com/users");
  const data=await res.json();

  return {
    props:{ninjas:data}
  }
}
const Ninjas = ({ninjas}) => {
  return (
    <>
      <Head>
        <title>Ninja List | Ninja Listing  </title>
        <meta name="keywords" content="ninjas" />
      </Head>
    <div>
      <h1>All ninjas</h1>
      {ninjas.map((ninja)=>(
        <Link href={'/ninjas/'+ninja.id} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
    </>
  )
}

export default Ninjas
