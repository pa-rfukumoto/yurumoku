## 3/16
- デフォルトで`go`で起動するように変更
  - docker-compose -f webapp/docker-compose.yml build または
  - docker-compose -f webapp/docker-compose.yml up だけでOK
- ホーム画面のUI改善
  - 「予約」「予約の確認」ボタン全体を押せるように
  - 「ログアウト」ボタンを右に寄せる
- やろうとしたけど中止
  - 予約画面の「最速」「中間」「遅いやつ」の文言を、「超超急行」「超急行」「急行」に変えようとした
    - inputのvalueや裏側のプログラムにおいても、すべてで「最速」「中間」「遅いやつ」という値が評価に使用されている
    - 表示を変えるならvalueも一括で変えたいが、時間もなく、慎重を要するので一旦中止

## 3/9
`/search`を改善する・reboot  
`departure`と`arrival`を一緒に取るようにしたい  
そのままではとれないので、`train_timetable_master`の`struct`を定義する？  
`sqlx`がどうやって返してくるか知りたい  

dockerのmysqlにアクセスできた  
```  
# docker exec -i -t webapp_mysql_1 bash
# mysql -u isutrain -p
# use isutrain  
```
アカウント情報は`/webapp/.env`

## 3/2
vueのホットデプロイをしたい・破
 - /frontendで`npm run serve`を叩いてシンプルにvueサーバーを立てる。`docker up`で`npm run serve`したい
 - /frontendで`docker build -t vue-dev .`イメージはできたっぽい
 - docker-conposeに足すだけではだめっぽい？

## 2/24
vueのホットデプロイをしたい→nodeを立てれば行けそう？次回やる  
ログを仕込んでみる。しかし失敗→`log.printf`しなかったのが行けない気がしてきた
```go
start := time.Now();
// 処理
end := time.Now();
fmt.Printf("%f秒\n",(end.Sub(start)).Seconds())
```
ログをファイル出力してなかったので、設定を追加したい→これもエラーで失敗😇
```go
func main(){
    logfile, err := os.OpenFile("./test.log", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0666)
    if err != nil {
      panic("cannnot open test.log:" + err.Error())
    }
    defer logfile.Close()
}
```

## 2/10
storeが未実装だったので追加、ログインできるようにする  
https://vuex.vuejs.org/ja/guide/state.html#%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%82%B9%E3%83%97%E3%83%AC%E3%83%83%E3%83%89%E6%BC%94%E7%AE%97%E5%AD%90
https://jp.vuejs.org/v2/guide/state-management.html

