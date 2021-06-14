import Head from 'next/head'
import Image from 'next/image'
// import { useEffect, useState } from 'react'
// import styles from '../styles/Home.module.css'

// //宣言
// export default function Home() {
//   const [mondaibun, setTime] = useState(null)
//   const [mondai_a, mondai_1] = useState(null)
//   const [mondai_b, mondai_2] = useState(null)
//   const [mondai_c, mondai_3] = useState(null)
//   const [mondai_d, mondai_4] = useState(null)
//   const [time, settimer] = useState(null)
  useEffect(() => {

    //問題文をセットするAPI
    fetch('/api/exaams')
      .then(res => res.json())
      .then(data => {
        // setTime(data[0].mondaibun)
        // mondai_1(data[0].houzi)
        // mondai_2(data[1].houzi)
        // mondai_3(data[2].houzi)
        // mondai_4(data[3].houzi)

        console.log(data)
      });setInterval(() =>
      {
        count++;

  if(count == 60)
  {
    minutes += 1;
  }
  if(count < 60)
  {
      if(minutes == 0)
      {
        settimer(count + "秒");
      }
      else
      {
        settimer(minutes + "分" + count + "秒");
      }
      
  }
  else
  {
    count = 0;
      settimer(minutes + "分" + count + "秒");
  }
},1000);

  },[])

//経過時間処理
var count = 0;
var minutes = 0;

return (
  <div className={styles.container}>
    <Head>
      <meta charset="UTF-8"/>
      <title>模擬試験サイト</title>
    </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          てすと
        </h1>
          <p>問題</p>
        <div >{mondaibun}</div>
        

        <div id="time">
          
          <p>経過時間:{time}</p>
        </div>

        <p className={styles.description}></p>

        </main>

      <footer>
      </footer>
    </div>
  )
// }