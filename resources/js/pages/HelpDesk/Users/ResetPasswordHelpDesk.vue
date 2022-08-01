 <template>
    <div class="bg-gray-100">
       <form @submit.prevent="ResetPassword" class="h-screen flex flex-col justify-center items-center">
        <div class="shadow-lg px-20 py-5 rounded-lg border-t-[5px] border-primary bg-white ">
            <p class="text-center font-bold mb-3 text-xl">Creat your new password</p>
            <h6 class="mb-6">Your new password must be different from<br> your previous password</h6>
            <!--password-->
             <div>
              <input class=" mb-1 focus:outline-primary focus:border-primary focus:outline-offset-0 rounded-md bg-blue-50  border border-gray-200 px-4 py-2 text-xl w-96"  type="password"  placeholder="Password" v-model="state.password">
               <p v-if="v$.password.$error" class="text-red-600 text-sm py-1">
                    <span>{{ v$.password.$errors[0].$message }} </span>
                </p>
               <p class="mb-6">Must be atleast 8 characters</p>
            </div>
           <!--Confirm password-->
           <div>
               <input placeholder=" Confirm password" type="password" class=" focus:outline-primary focus:border-primary focus:outline-offset-0 bg-blue-50  px-4 py-2 text-xl  w-96 mb-1 rounded-md border border-solid border-gray-200" v-model="state.confirm" >
               <p v-if="v$.confirm.$error" class="text-red-600 text-sm py-1">
                    <span>{{ v$.confirm.$errors[0].$message }} </span>
                </p>
               <p class="mb-6">Both passwords must match</p> 
           </div>
            <!--Reset-->
            <div>
                <button type="submit" class="rounded-md bg-primary text-white border border-solid border-primary px-20 py-2 font-semibold w-full">Reset</button>
            </div>
        </div>
       </form>
    </div>
</template>

<script>
    
import useValidate from "@vuelidate/core"
import {required,minLength,sameAs} from "@vuelidate/validators"
import {reactive,computed} from "vue"
    export default {
        name:"ResetPasswordHelpDesk",
        setup(){
   const state=reactive({
      password:"",
      confirm:"",
  })
     const rules=computed
     (()=>{ 
      return{
        password:{required,minLength:minLength(8)},
        confirm:{required,sameAs:sameAs(state.password)}
      }
    });
    const v$=useValidate(rules,state);
    return{state,v$}
},
   
          methods:{
    ResetPassword(){
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
