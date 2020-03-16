<template>
  <div>
    <section class="home">
      <router-link class="reserve" to="/reservation" tag="article">
        予約
      </router-link>

      <router-link class="inquiry" to="/mypage/reservations" tag="article">
        予約の確認
      </router-link>
    </section>

    <section class="information">
      <article class="notice">
        <h2>
          ご案内
          <span>：必ずお読みください</span>
        </h2>
        <div class="wrap1">
          <div class="wrap2">
            <p>
              ■ここに何かお知らせをかく<br />
              ・ホゲホゲホゲホゲ<br />
              ・ふがふがふがふが<br />
              ※ピヨピヨ
            </p>
          </div>
        </div>
        <p class="more">
          <span id="l-9"></span>
        </p>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>

<style scoped>
.reserve, .inquiry {
  margin: 0;
  padding: 0;
  display: block;
  padding: 77px 0 0 135px;
  width: 505px;
  height: 133px;
  font-size: 42px;
  color: #ffffff;
  line-height: 1.1;
  font-style: normal;
  text-decoration: none;
  letter-spacing: 2px;
  box-sizing: border-box;
  cursor: pointer;
}

.home article {
  display: block;
  opacity: 1;
}

.home article:hover {
  opacity: 0.8;
}

.home article.reserve {
  width: 960px;
  height: 210px;
  background: #1c1f84;
}

.home article.inquiry {
  width: 960px;
  height: 210px;
  background: #00a6ed;
}
.information {
  margin: 0;
  padding: 13px 19px;
  background: #ffeab4;
  width: 922px;
}

.information article h2 {
  margin: 0 0 8px 0;
  padding: 0 0 8px 0;
  font-size: 18px;
  color: #000000;
  line-height: 1.1;
  font-weight: normal;
  border-bottom: 2px dotted #666666;
}

.information article h2 span {
  position: absolute;
  left: -5000px;
  top: -5000px;
}

.information article p {
  margin: 0;
  padding: 0;
  font-size: 13px;
  color: #666666;
  line-height: 1.4;
}
</style>
