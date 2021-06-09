import { Client } from 'pg'

export default async (req, res) => {
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'clsqltraining',
        password: 'password',
        port: 5432
    })
    client.connect()

// 書いたSQLが実行される。
const { rows: results } = await client.query('select m.mondai_bun,s.hyouji_mei from mondai as m inner join sentakushi as s on m.id = s.mondai_id;')
// 複数件の場合は、そのままresultsを設定。1件だと分かっている場合は[0]
res.status(200).json(results)

}