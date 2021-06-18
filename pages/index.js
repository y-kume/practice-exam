import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

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
            <div class='title'>
                <h1>web模擬試験</h1>
            </div>
        </header>

        <div class='container1'>
            <div class='mondai'>
                <h1>ITパスポート試験H14春期</h1>

                <section>
                    <h2>問題〇</h2>
                    <div>{mondaibun}</div>
                    
                    <div class='sentakushi'>
                        <p>ア{choice_a}</p>
                        <p>イ{choice_b}</p>
                        <p>ウ{choice_c}</p>
                        <p>エ{choice_d}</p>
                    </div>
                    
                </section>
            </div>

            <div class='menu'>
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
        
          <div class='kaito'>
            <table border='1' align='left'>
              
              <tr><th>問題No.</th><td>1</td><td>2</td><td>3</td><td>4</td><td>……</td></tr>
                
              <tr><th>解答</th><td>　</td><td>　</td><td>　</td><td>　</td><td>　</td></tr>

              <tr><th>チェック</th><td>　</td><td>　</td><td>　</td><td>　</td><td>　</td></tr>
                
            </table>
          </div>
          
          <table frame='border'>
            <tr>
              <th>解答欄</th>
                <label>
                  <input type='radio' />ア
                </label>
                <label>
                  <input type='radio'/>イ
                </label>
                <label>
                  <input type='radio'/>ウ
                </label>
                <label>
                  <input type='radio'/>エ
                </label>
            </tr>
                
          </table>

                <div class="checkbox">
                    <input type="checkbox"/>この問題を後で見直すためにチェックする
                </div>
                                
                <button type="button">次の問題へ➪</button>

            <div class="time_answer">
              <div id="time">
                  <p>経過時間：{time}</p>
              </div>
              
              <button type="button">採点する➪</button>
            </div>

        <p className={styles.description}></p>

        </main>

      <footer>
        <p>(c)アドレス</p>
      </footer>
    </div>
  )
}