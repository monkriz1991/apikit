<script setup>
const comment = ref("// UpApi - универсальный конструктор Api");
</script>
<template>
  <div class="container">
    <kinesis-container class="container-kinesis">
      <kinesis-element
        tag="div"
        class="circle circle-blue"
        :strength="10"
        type="depth"
      />
      <kinesis-element
        tag="div"
        class="circle circle-purple"
        :strength="10"
        type="depth"
      />
      <kinesis-element
        tag="div"
        class="circle circle-yellow"
        :strength="10"
        type="depth"
      />
      <kinesis-element
        tag="div"
        class="circle circle-green"
        :strength="10"
        type="depth"
      />
      <kinesis-element
        tag="div"
        class="circle circle-orange"
        :strength="10"
        type="depth"
      />
      <kinesis-element
        tag="div"
        class="circle circle-red"
        :strength="10"
        type="depth"
      />
      <div class="ix-one">
        <div class="columns">
          <div class="column">
            <div class="content ix-title">
              <h1 class="index-comment">{{ comment }}</h1>
              <p>
                <strong>Создавайте модель</strong>
              </p>
              <p>
                <strong class="mgl-medium"
                  ><span><nuxt-img src="/2965327.webp" />GExel парсингом</span
                  ><span><nuxt-img src="/627558.webp" />Вручную</span
                  ><span><nuxt-img src="/excel.webp" />Из Xls</span></strong
                >
              </p>

              <p>
                <strong>Встраивайте в проект</strong>
              </p>
              <p>
                <strong class="mgl-medium">
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
                <strong>Интегрируйте с</strong>
              </p>
              <p>
                <strong class="mgl-medium"
                  ><span><nuxt-img src="/crm-icon-png-8.webp" />CRM</span
                  ><span
                    ><nuxt-img src="/1C_Company-Logo.wine.webp" />1c</span
                  ></strong
                >
              </p>
              <p class="index-prev">Первые 14 - дней бесплатно!</p>
              <p>
                <nuxt-link to="/login">
                  <button class="button is-success bt-c-suss">
                    <span class="icon">
                      <icon name="solar:square-arrow-right-up-broken" />
                    </span>
                    <span>Приступить</span>
                  </button>
                </nuxt-link>
              </p>
            </div>
          </div>
          <div class="column">
            <kinesis-element :strength="5">
              <div class="ix-one-baner">
                <nuxt-img src="/2620861.webp" />
              </div>
            </kinesis-element>
          </div>
        </div>
      </div>
    </kinesis-container>
    <div class="ix-two mt-6 mb-6">
      <div class="content">
        <h2>Возможности с UpApi</h2>
        <p class="mb-6">
          Curabitur accumsan turpis pharetra
          <strong>augue tincidunt</strong> blandit. <br />
          Quisque condimentum maximus mi, sit amet commodo arcu rutrum id.
        </p>
        <div class="columns">
          <div class="column">
            <div data-aos-once="true" data-aos="fade-up">
              <div class="ix-two-info">
                <div class="ix-two-info-icon">
                  <icon name="carbon:workspace-import" />
                </div>
                Создавать объект для Api любой вариации и 2-й вложенности.
              </div>
            </div>
          </div>

          <div class="column">
            <div data-aos-once="true" data-aos="fade-up">
              <div class="ix-two-info">
                <div class="ix-two-info-icon">
                  <icon name="mdi:clock-fast" />
                </div>
                Ускоряет разработку приложения и веб сайтов. Не нужно тратить
                время на развёртывание сервера.
              </div>
            </div>
          </div>
          <div class="column">
            <div data-aos-once="true" data-aos="fade-up">
              <div class="ix-two-info">
                <div class="ix-two-info-icon">
                  <icon name="solar:money-bag-broken" />
                </div>
                Возможность экономии на стоимости сервера и разаботке Бэкенда.
              </div>
            </div>
          </div>
          <div class="column">
            <div data-aos-once="true" data-aos="fade-up">
              <div class="ix-two-info">
                <div class="ix-two-info-icon">
                  <icon name="icon-park-outline:connect" />
                </div>
                Синхронизирует с вашей CRM и 1с - 8.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ix-three mt-6 mb-6">
      <div class="content">
        <h2>Как работает UpApi</h2>
        <p class="mb-6">
          Curabitur accumsan turpis pharetra
          <strong>augue tincidunt</strong> blandit. <br />
          Quisque condimentum maximus mi, sit amet commodo arcu rutrum id.
        </p>
        <div class="ix-three-block">
          <div class="columns">
            <div class="column is-4">
              <div data-aos-once="true" data-aos="fade-up">
                <div class="ix-tree-block-how">
                  <strong>
                    <icon name="mdi:sticker-plus-outline" /> Создайте
                    проект</strong
                  >
                  <div class="ix-tree-how-item">
                    <pre v-highlightjs>
                  <code class="javascript"> 
"NewProject": { 
                  </code>
                  </pre>
                    <strong
                      ><icon name="ph:arrow-fat-lines-down-light" /> Подготовьте
                      структуру Api</strong
                    >
                    <span>Вручную</span>
                    <span>Парсингом Exel из Goggle Disk</span>
                    <span>Выгрузкой из Xls</span>
                    <pre v-highlightjs>
                    <code class="javascript"> 
    "Product": {
        "title": "String",
        "count": "Number",
        "item": {
            "column": "Number",
            "count": "String",
        },
        "img": "Array",
        "data": "Date",
    }
}
                  </code>
                </pre>
                  </div>
                  <icon name="solar:map-arrow-right-broken" />
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div data-aos-once="true" data-aos="fade-up">
                <div class="ix-tree-block-how">
                  <strong>
                    <icon name="ion:create-outline" /> Наполните Api
                    модели</strong
                  >
                  <div class="ix-tree-how-item">
                    <span>Вручную</span>
                    <span>Из Exel Goggle Disk</span>
                    <span>Из Xls</span>
                  </div>
                  <icon name="solar:map-arrow-right-broken" />
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div data-aos-once="true" data-aos="fade-up">
                <div class="ix-tree-block-how">
                  <strong>
                    <icon name="carbon:connect-reference" /> Интегрируйте с
                    сайтами, CRM, 1c</strong
                  >
                  <div class="ix-tree-how-item">
                    <span>Создайте для проекта токен </span>
                    <span>Добавьте его в кабинете CRM системы</span>
                    <span>Получайте из Api данные</span>
                    <span>Обновляйте Api данные</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-4 is-offset-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.content pre {
  background: transparent;
  padding: 0;
  display: flex;
  margin: 0 !important;
}
.hljs {
  display: block;
  overflow-x: auto;
  padding: 0;
  background: transparent;
  color: #657b83;
  line-height: 1.6;
  font-size: 15px;
}
.ix-three-block {
  /* background: #f6f6f6; */
  padding: 0px 0;
  /* border-radius: 16px;*/
}
.ix-tree-block-how {
  /* background: #fafafa; */
  padding: 40px 40px 20px;
  border-radius: 21px;
  border: 2px solid #878787;
  position: relative;
}
.ix-tree-block-how > .icon {
  position: absolute;
  right: 10px;
  bottom: 10px;
  color: #4fc08d;
}
.ix-tree-block-how > strong {
  /* background: #707070; */
  /* color: #fff; */
  padding: 4px 10px;
  border-radius: 9px;
  font-weight: 700;
  font-size: 16px;
  margin: 0 0 0px !important;
  display: inline-block;
  line-height: 1.3;
}
.ix-tree-block-how > strong .icon {
}
.ix-tree-how-item {
  padding: 20px 0;
  /* background: #434343; */
  border-radius: 14px;
  margin: 0px 0 0;
}
.ix-tree-how-item > strong {
  /* background: #454545; */
  padding: 4px 10px;
  border-radius: 9px;
  font-weight: 500;
  font-size: 15px;
  margin: 0 0 10px !important;
  display: inline-block;
  /* color: #fff;*/
}
.ix-tree-how-item > span {
  display: table;
  margin: 5px 0 5px 0px;
  color: #565656;
  border-bottom: 2px dashed #d1d1d1;
  /* background: #48c78e; */
  padding: 4px 10px;
  /* border-radius: 9px; */
  font-weight: 500;
  font-size: 15px;
}
.ix-one {
  padding: 8% 0;
}
.ix-two {
}
.ix-two,
.ix-three {
  display: inline-block;
  width: 100%;
  padding: 40px 0;
}
.ix-title {
  padding: 40px 0 0 0;
}
.ix-title p {
}
.ix-title p > strong {
  font-size: 40px;
  font-weight: 800;
  line-height: 1;
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
  font-weight: 900;
  opacity: 0.7;
  font-size: 19px;
  position: relative;
  top: -2px;
  display: none;
}
.ix-title .mgl-medium {
  padding: 0 0 0 0px;
  font-weight: 600;
  color: #4a4a4a;
  margin: 0 0 0px 0;
  display: inline-block;
}
.mgl-medium > span {
  margin: 0 5px 0 0;
  /* background: #893737; */
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  padding: 9px 10px 9px 36px;
  /* color: #ffffff; */
  border: 2px solid #989898;
  position: relative;
  display: inline-block;
  float: left;
}
.mgl-medium img,
.mgl-medium .icon {
  height: 20px;
  margin: 0 5px 0 0;
  position: absolute;
  top: 6px;
  left: 5px;
  width: 30px;
  -o-object-fit: contain;
  object-fit: contain;
}
.c-g1 {
  color: #436812;
}
.c-g2 {
  color: #006524;
}
.ix-one-baner {
  padding: 40px 20px 0;
  height: 460px;
}
.ix-one-baner img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.index-prev {
  margin: 50px 0 30px !important;
  font-weight: 400;
  font-size: 18px;
  color: #828282;
}
.index-comment {
  font-weight: 500 !important;
  font-size: 18px !important;
  color: #9e9e9e;
  margin: 0px 0 25px 0px !important;
}
.container-kinesis {
  position: relative;
  overflow-x: clip;
}
.circle {
  border-radius: 100%;
  position: absolute;
  opacity: 0;
}
.circle.circle-blue {
  background-color: #eaf1fa;
  width: 14vw;
  height: 14vw;
  top: 43%;
  right: 13vw;
}
.circle.circle-purple {
  border: 25px solid #f2eafa;
  width: 10vw;
  height: 10vw;
  left: 50%;
  top: 10%;
}
.circle.circle-yellow {
  background-color: #faf9ea;
  width: 8vw;
  height: 8vw;
  left: 30%;
  top: 25%;
}
.circle.circle-green {
  background-color: #eafaf2;
  width: 10vw;
  height: 10vw;
  right: 20%;
  top: 90%;
}
.circle.circle-orange {
  border: 25px solid #faf3ea;
  width: 8vw;
  height: 8vw;
  left: 20%;
  top: 60%;
}
.circle.circle-red {
  background-color: #faeaea;
  width: 12vw;
  height: 12vw;
  left: -4.8vw;
  top: 25%;
}
.ix-two-info {
  padding: 40px 40px;
  border-radius: 19px;
  background-color: #434343;
  color: #dedede;
  font-size: 17px;
  line-height: 1.4;
  height: 300px;
}
.ix-two-info-icon {
  margin: 0 0 25px;
  height: 50px;
  color: #4fc08d;
}
.ix-two-info-icon .icon {
  height: 50px;
  width: 50px;
}
</style>
