<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "/store/counter";

const comment = ref("// UpApi - универсальный конструктор Api");
const store = useCounterStore();
const { increment } = store;
const count = computed(() => store.count);

const { getCount } = storeToRefs(store);
</script>
<template>
  <div class="container">
    <kinesis-container class="container-kinesis">
      <!-- <button type="button" @click="increment"></button>
      <p>Counter: {{ store.getCount }}</p> -->
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
                <strong>Создавайте Api коллекции</strong>
              </p>
              <!-- <p>
                <strong class="mgl-medium"
                  ><span><nuxt-img src="/2965327.webp" />GExel парсингом</span
                  ><span><nuxt-img src="/627558.webp" />Вручную</span
                  ><span><nuxt-img src="/excel.webp" />Из Xls</span></strong
                >
              </p> -->
              <p>
                <strong>Интегрируйте с CRM</strong>
              </p>
              <p>
                <strong>Встраивайте в проекты</strong>
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

              <!-- <p>
                <strong class="mgl-medium"
                  ><span><nuxt-img src="/crm-icon-png-8.webp" />CRM</span
                  ><span
                    ><nuxt-img src="/1C_Company-Logo.wine.webp" />1c</span
                  ></strong
                >
              </p> -->
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

<style></style>
