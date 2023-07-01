<template>
  <kinesis-container class="container-kinesis">
    <div class="container">
      <div class="ix-one">
        <div class="columns">
          <div class="column">
            <div class="content ix-title">
              <p>
                <span>1</span><strong>Создавайте Api <b>{</b></strong>
              </p>
              <p>
                <span>2</span
                ><strong class="ml-5"
                  >Импортируйте в свой проект <b>[</b></strong
                >
              </p>
              <p>
                <span>3</span
                ><strong class="mgl-medium">
                  <span><nuxt-img src="/Vue.js_Logo_2.svg.webp" />vue</span
                  ><span><nuxt-img src="/icon-green.webp" />nuxt</span
                  ><span><nuxt-img src="/React-icon.svg.webp" />react</span
                  ><span
                    ><nuxt-img
                      src="/Angular_full_color_logo.svg.webp"
                    />angular</span
                  ></strong
                >
              </p>
              <p>
                <span>4</span><strong class="ml-6"><b>]</b></strong>
              </p>
              <p>
                <span>5</span
                ><strong class="ml-6">Интегрируйте <b>[</b></strong>
              </p>
              <p>
                <span>6</span
                ><strong class="mgl-medium"
                  ><span><nuxt-img src="/crm.webp" />CRM</span
                  ><span
                    ><nuxt-img src="/1C_Company-Logo.wine.webp" />1c</span
                  ></strong
                >
              </p>
              <p>
                <span>7</span><strong class="ml-5"><b>]</b></strong>
              </p>
              <p>
                <span>8</span><strong><b>}</b></strong>
              </p>

              <p>
                Corrupti, temporibus! Necessitatibus perspiciatis libero itaque
                in ab similique rerum officiis!
              </p>

              <p>
                <nuxt-link to="/login">
                  <button class="button is-primary is-outlined">
                    Начать использовать
                  </button>
                </nuxt-link>
              </p>
            </div>
          </div>
          <div class="column">
            <kinesis-element :strength="5">
              <div class="ix-one-baner">
                <nuxt-img src="/1878350.webp" />
              </div>
            </kinesis-element>
          </div>
        </div>
      </div>
    </div>
  </kinesis-container>
</template>

<style>
.ix-one {
  padding: 10% 0;
}
.ix-title {
  padding: 60px 0 0 0;
}
.ix-title p {
  margin: 0 0 0px !important;
  padding: 7px 0;
}
.ix-title p > strong {
  font-size: 24px;
  font-weight: 900;
  line-height: 1;
  color: #0b0b0b;
  padding: 0 0 0 0px;
}
.ix-title p > span {
  text-align: right;
  width: 15px;
  display: inline-block;
  font-weight: 300;
  font-size: 14px;
  display: none;
}
.ix-title p strong > b {
  /* font-weight: 400; */
  opacity: 0.7;
  font-size: 19px;
  position: relative;
  top: -2px;
}
.ix-title .mgl-medium {
  padding: 0 0 0 80px;
  font-weight: 600;
  color: #4a4a4a;
}
.mgl-medium > span {
  margin: 0 5px 0 0;
  /* background: #575757; */
  border-radius: 6px;
  font-size: 19px;
  font-weight: 500;
  padding: 8px 10px 8px 36px;
  /* color: #fff; */
  border: 2px solid #989898;
  position: relative;
  display: inline-block;
}
.mgl-medium img {
  height: 25px;
  margin: 0 5px 0 0;
  position: absolute;
  top: 5px;
  left: 5px;
  width: 30px;
  object-fit: contain;
}
.ix-one-baner {
  padding: 0 40px;
  height: 400px;
}
.ix-one-baner img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
</style>
