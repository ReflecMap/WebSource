# flyway migration
### 概要
flywayはDBマイグレーションツールです。
DBの状態をバージョン管理します。

### SQLファイルの命名規則
データベースに適用するSQLをファイル毎に作成してバージョン管理する。
SQLファイル名は`V`から始まるバージョン番号から始める必要がある。

`V<Version>__<Description>.sql`

`<Version>`には半角数字、`.`、`_`が使用できる。
`<Version>`と`<Description>`を区切るのは`__`。2つなので注意。
`<Description>`は任意の説明を記載。

