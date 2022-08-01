<template>
    <div class="bg-gray-100">
       <form  @submit.prevent="ForgotPassword" class="h-screen flex flex-col justify-center items-center ">
        <div class="shadow-lg px-20 py-10 mb-10 bg-white rounded-lg border-t-[5px] border-primary">
            <p class="font-bold text-center text-xl mb-2">Forgot password</p>
             <p class="mb-8 text-sm py-1">Enter the email associated with your account and<br> we'll send an email with instructions.</p>
              <input  class="  focus:outline-primary focus:border-primary focus:outline-offset-0 rounded-md bg-blue-50  border border-gray-200 px-4 py-2 text-xl w-96" type="email" placeholder="Email address" v-model="state.email" >
                 <p v-if="v$.email.$error" class="text-red-600 text-sm py-1">
                    <span>{{ v$.email.$errors[0].$message }} </span>
                </p>
           <div>
            <button type="submit" class="bg-primary  px-20 py-2 mt-6 text-white w-full font-semibold rounded-md">Send</button>
            
             
           </div>
        </div>
       </form>
    </div>
</template>

<script>
import useValidate from "@vuelidate/core"
import {required,email} from "@vuelidate/validators"
import {reactive,computed} from "vue"
    export default {
        name:"ForgotPasswordHelpDesk",
        setup(){
            const state=reactive({
            email:"",
            
            })
            const rules=computed(()=>{
                return{
               email:{required,email},
               
                }
            }) 
            const v$=useValidate(rules,state)
          return{
          v$,state
          }
        },
        methods:{
      ForgotPassword(){
        this.v$.$validate()
        if(!this.v$.$error){
          alert("Successfully submitted")
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