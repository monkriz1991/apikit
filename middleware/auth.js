export default defineNuxtRouteMiddleware((to, from) => {
  var config = useNuxtApp().$config.public.authCustom
  const auth = useNuxtApp().$auth
  const token = useCookie('token')
  if(token.value && !auth.user.value.username){
    auth.getUser().then(function(x){
      let auth = useNuxtApp().$auth
      if(!auth.user.value.username){return navigateTo(config.loginPage)}
    })
  }else{
    if (!auth.user.value.username) {
   return navigateTo(config.loginPage)
  }
  }

})