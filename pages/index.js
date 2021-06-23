import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../css/styles.css'

//宣言
export default function Home() {
  const [mondaibun, setTime] = useState(null)
  const [choice_a, mondai_1] = useState(null)
  const [choice_b, mondai_2] = useState(null)
  const [choice_c, mondai_3] = useState(null)
  const [choice_d, mondai_4] = useState(null)
  const [time, settimer] = useState(null)
  useEffect(() => {

    //問題文をセットするAPI
    fetch('/api/questions')
      .then(res => res.json())
      .then(data => {
        setTime(data[0].mondai_bun)
        mondai_1(data[0].hyouji_mei)
        mondai_2(data[1].hyouji_mei)
        mondai_3(data[2].hyouji_mei)
        mondai_4(data[3].hyouji_mei)

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
        settimer(count + '秒');
      }
      else
      {
        settimer(minutes + '分' + count + '秒');
      }
      
  }
  else
  {
    count = 0;
      settimer(minutes + '分' + count + '秒');
  }
},1000);

  },[])


//経過時間処理
var count = 0;
var minutes = 0;

return (
  <div className={styles.container}>
    <Head>
      <meta charset='UTF-8'/>
      <title>模擬試験サイト</title>
    </Head>

      <main className={styles.main}>
        <header>
            <div className={styles.title}>
                <h1>web模擬試験</h1>
            </div>
        </header>

        <div className={styles.container1}>
            <div className={styles.mondai}>
                <h1>ITパスポート試験H14春期</h1>

                <section>
                    <h2>問題〇</h2>
                    <div>{mondaibun}</div>
                    
                    <div className={styles.sentakushi}>
                        <p>ア{choice_a}</p>
                        <p>イ{choice_b}</p>
                        <p>ウ{choice_c}</p>
                        <p>エ{choice_d}</p>
                    </div>
                    
                </section>
            </div>

            <div className={styles.menu}>
                <aside>
                    <h2>メニュー</h2>
                    <ul>
                        <li><a href='https://www.jikkyo.co.jp/webmogi/'>➪TOPページ</a></li>
                        <p>教員用ログインページ</p>
                        <li><a href='https://www.jikkyo.co.jp/webmogi/exam/select/27'>➪試験中止</a></li>
                        <p>受験履歴</p>
                    </ul>
                </aside>

            </div>
        </div>
        
        <div className={styles.container2}>
          <div className={styles.kaito}>
            <table border='1' align='left'>
              
              <tr><th>問題No.</th><td>1</td><td>2</td><td>3</td><td>4</td><td>……</td></tr>
                
              <tr><th>解答</th><td>　</td><td>　</td><td>　</td><td>　</td><td>　</td></tr>

              <tr><th>チェック</th><td>　</td><td>　</td><td>　</td><td>　</td><td>　</td></tr>
                
            </table>
          </div>
          
          <div className={styles.kaito_ran}>
            <table frame='border'>
              <tr>
                <th>解答欄</th>
                  <label>
                    <input type='radio' name='sentakushi' value='a'/>ア
                  </label>
                  <label>
                    <input type='radio' name='sentakushi' value='i'/>イ
                  </label>
                  <label>
                    <input type='radio' name='sentakushi' value='u'/>ウ
                  </label>
                  <label>
                    <input type='radio' name='sentakushi' value='e'/>エ
                  </label>
              </tr>
                  
            </table>
          </div>

                <div div className={styles.checkbox}>
                    <input type="checkbox"/>この問題を後で見直すためにチェックする
                </div>
                                
                <button type="button">次の問題へ➪</button>

            <div className={styles.time_answer}>
              <div id="time">
                  <p>経過時間：{time}</p>
              </div>
              
              <button type="button">採点する➪</button>
            </div>
        </div>
      </main>

      <footer>
        <div className={styles.footer}>
          <p>(c)アドレス</p>
        </div>
      </footer>
    </div>
  )
}