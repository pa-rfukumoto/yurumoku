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

