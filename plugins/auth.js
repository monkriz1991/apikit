
import { reactive, ref } from 'vue'
class Auth{
  constructor() {

    this.user  = ref({
      token: null
    })
    this.isAuthentifcated = ref(false)
    this.token = null
    this.config = useNuxtApp().$config.public.authCustom
    this.baseUrl = this.config.baseURL.slice(-1)==='/'?this.config.baseURL.substring(0, this.config.baseURL.length-1):this.config.baseURL;
    this.loginUrl = `${this.baseUrl}${this.config.login}`
    this.logoutUrl = `${this.baseUrl}${this.config.logout}`
    this.getUserUrl = `${this.baseUrl}${this.config.getUser}`
    this.tokenUrl = `${this.baseUrl}${this.config.token}`
    this.refreshTokenUrl = `${this.baseUrl}${this.config.refresh}`
  }

  /**
   * функция авторизации
   * @param username - никнейм пользователя
   * @param password - пароль пользователя
   * @returns {Promise<void>}
   */
  async login({username='', password = ''} = {}){
      const { data, pending, error, refresh } = await useFetch(this.loginUrl, {
        method: 'POST',
        baseURL: this.baseUrl,
        body:{
          username: username,
          password: password
        },
      });
    this.user.value = {...data.value}
    if(data.value.token){
       this.isAuthentifcated.value = true
    }
    const token = useCookie('token')
    token.value = data.value.token
    return !error.value
    }

  /**
   * получает пользоватлея и ложит в структуру $auth.user
   * @returns {Promise<void>}
   */
  async getUser(){
    const token = useCookie('token')
     const { data, pending, error, refresh } = await useFetch(this.getUserUrl, {headers:{'Authorization': `Token ${token.value}`}})
    if(data.value){
       this.isAuthentifcated.value = true
    }
    this.user.value = {...data.value}
  }

  /**
   * функция для удаления куки с токеном
   */
  logout(){
    const token = useCookie('token')
    const router = useRouter();
    token.value = null
    this.user.value = {}
     this.isAuthentifcated.value = false
    router.push({ path: this.config.afterLogoutPage });
  }
}

export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
      auth: new Auth()
    }
  }
})