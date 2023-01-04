import Head from "next/head"
import styles from "../styles/Home.module.css"

import Link from "next/link"
export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home </title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos laborum
          voluptatem, deleniti corporis eos provident aliquid qui ea maiores sed
          ut sint tempora officiis earum alias exercitationem, minus, id
          aspernatur.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          explicabo accusantium laborum repudiandae sint voluptatum architecto
          atque incidunt tenetur animi, eligendi quas nemo voluptatibus ratione
          dicta perspiciatis doloremque aperiam temporibus.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninjas Listing</a>
        </Link>
      </div>
    </>
  )
}
