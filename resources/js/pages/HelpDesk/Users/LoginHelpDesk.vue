<template>
  <div  class=" bg-gray-100">
    <form @submit.prevent="LoginUser"  class="h-screen flex flex-col justify-center items-center ">
      <div class="shadow-lg px-20 py-5 mb-10 bg-white  rounded justify-center border-t-[5px] border-primary">
           <p class="font-bold mb-6 text-center text-xl">Login here</p>
        <!-- Email Input -->
      <div class="mb-6">
         <p  class="text-red-600 text-sm py-1">
                </p>
        <input  class=" focus:outline-primary focus:border-primary focus:outline-offset-0 rounded-md bg-blue-50  border border-gray-200 px-4 py-2 text-xl w-96" type="email" placeholder="Email address" v-model="state.email" >
        <p v-if="v$.email.$error" class="text-red-600 text-sm py-1">
                    <span>{{ v$.email.$errors[0].$message }} </span>
                </p>
      </div>
      <!-- Password Input-->
      <div  class="mb-4">
        <p  class="text-red-600 text-sm py-1"></p>
        <input  class="focus:outline-primary focus:border-primary focus:outline-offset-0 rounded-md  bg-blue-50 border border-gray-200 px-4 py-2 text-xl w-96" type="password" placeholder="Password" v-model="state.password" >

        <p v-if="v$.password.$error" class="text-red-600 text-sm py-1">
                    <span>{{ v$.password.$errors[0].$message }} </span>
                </p>
      </div>
      <!--Checkbox and Remember me-->
      <div class="flex justify-start items-center mb-6 text-sm ">
        <input type="checkbox" class=" h-3 w-3 mr-1 ">
        <label class="mr-40 ">Remember me </label>
       </div>
        <!-- Login button -->
           <div class="mb-3">
            <button type="submit" class="rounded-md bg-primary text-white border border-solid border-primary px-20 py-2 font-semibold w-full">Login</button>
           </div>
           <!--Forgot password and reset password-->
           <div class="j flex justify-between items-center ">
           <router-link :to="{name:'ForgotPasswordHelpDesk'}" style="color:blue">Forgot Password?</router-link>
           <router-link :to="{name:'ResetPasswordHelpDesk'}" style="color:blue">Reset password?</router-link>
           </div>
           <!--other login choices-->
            <div class="flex items-center my-2  before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5 ">
            <p class="font-semibold mx-2 mr-2">Or</p>
           </div>
           <div class=" flex flex-row items-center justify-between lg:justify-start  ml-20 mb-10">
            <p class="mr-10">Sign in with</p>
            <a  class="mr-3" href="https://facebook.com"><i class="fab fa-facebook fa-xl" style="color:#56935D"></i></a>
            <a class="mr-3" href="https://twitter.com"> <i class="fab fa-twitter fa-xl"  style="color:#56935D"></i></a>
            <a class="mr-3" href="https://linkedin.com"> <i class="fab fa-linkedin fa-xl"  style="color:#56935D"></i></a> 
           </div>
           <!--Register-->
           <div class="ml-24 text-sm ">
               <p>Don't have account?<router-link :to="{name:'RegisterHelpDesk'}" style="color:blue">Register</router-link></p>
            </div>
      </div>
      </form>
  </div>
</template>

<script >
import useValidate from '@vuelidate/core'
import {required,email,minLength} from "@vuelidate/validators";
import {reactive,computed} from "vue"

export default {
        name:"ForgotPasswordHelpDesk",
setup(){
   const state=reactive({
      email:"",
      password:"",
  })
     const rules=computed
     (()=>{ 
      return{
        email:{required,email},
        password:{required,minLength:minLength(8)}
      }
    });
    const v$=useValidate(rules,state);
    return{state,v$}
},
    methods:{
      LoginUser(){
        this.v$.$validate()
        if(!this.v$.$error){
          this.$router.push('/AdminDashboard')
        }
        else{
        alert("Failed to submit")
        }
    }
}
}

  
</script>

<style scoped>

</style>