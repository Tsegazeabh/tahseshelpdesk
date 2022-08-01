<template>
    <div class="bg-gray-100">
       <form @submit.prevent="Register">
        <div class=" grid gap-6 mb-5 md:grid-cols-1 mx-56 my-20 shadow-lg px-20 py-5  rounded border border-primary border-t-[5px] border-l-0 border-r-0 border-b-0 bg-white">
        <p class="text-center font-bold text-2xl ">Register now</p>
        <!--First name-->
        <div>
           <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
            <div class="flex flex-row">
               <span style="border-top-left-radius: 5px; border-bottom-left-radius: 5px;padding-left: 1em; padding-right: 1em; padding-bottom: 0.5em; padding-top: 0.5em; background-color: #56935D;"><i class="fas fa-user fa-lg  prefix mt-4" style="color:white"></i></span> 
                <input type="text" v-model="state.firstName" class=" focus:outline-primary focus:border-primary focus:outline-offset-0 bg-blue-50 border border-gray-200 text-gray-900 text-sm   block w-full p-2.5 rounded-tr-lg rounded-br-lg" placeholder="First name" >
            </div>
            <p v-if="v$.firstName.$error" class="text-red-600 text-sm py-1">
                    <span>{{ v$.firstName.$errors[0].$message }} </span>
                </p>
        </div>
          <!--Middle name-->
        <div>
            <label for="middle_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Middle name</label>
             <div class="flex flex-row">
               <span style="border-top-left-radius: 5px; border-bottom-left-radius: 5px; padding-left: 1em; padding-right: 1em; padding-bottom: 0.5em; padding-top: 0.5em; background-color: #56935D;"><i class="fas fa-user fa-lg  prefix mt-4" style="color:white"></i></span> 
                <input type="text" v-model="state.middleName" class=" focus:outline-primary focus:border-primary focus:outline-offset-0 bg-blue-50 bg-gray-50 border border-gray-200 text-gray-900 text-sm  w-full p-2.5  dark:placeholder-gray-400  rounded-tr-lg rounded-br-lg" placeholder="Middle name" >
            </div>
            <p v-if="v$.middleName.$error" class="text-red-600 text-sm py-1">
                    <span>{{ v$.middleName.$errors[0].$message }} </span>
                </p>
        </div>
        
          <!--Last name-->
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
            <div class="flex flex-row">
               <span style="border-top-left-radius: 5px; border-bottom-left-radius: 5px; padding-left: 1em; padding-right: 1em; padding-bottom: 0.5em; padding-top: 0.5em; background-color: #56935D;"><i class="fas fa-user fa-lg  prefix mt-4" style="color:white"></i></span> 
                <input type="text" v-model="state.lastName" class="focus:outline-primary focus:border-primary focus:outline-offset-0 bg-blue-50 bg-gray-50 border border-gray-200 text-gray-900 text-sm  w-full p-2.5  dark:placeholder-gray-400  rounded-tr-lg rounded-br-lg" placeholder="Last name">
            
           </div>
           <p v-if="v$.lastName.$error" class="text-red-600 text-sm py-1">
                    <span>{{ v$.lastName.$errors[0].$message }} </span>
                </p>
        </div>   
          <!--Email address-->
        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
            <div class="flex flex-row">
               <span style="border-top-left-radius: 5px; border-bottom-left-radius: 5px; padding-left: 1em; padding-right: 1em; padding-bottom: 0.5em; padding-top: 0.5em; background-color: #56935D;"><i class="fa fa-envelope fa-lg mt-4" style="color:white"></i></span> 
                <input type="email" v-model="state.email" class="focus:outline-primary focus:border-primary focus:outline-offset-0 bg-blue-50 bg-gray-50 border border-gray-200 text-gray-900 text-sm  w-full p-2.5  dark:placeholder-gray-400  rounded-tr-lg rounded-br-lg" placeholder="Email address">
             
            </div>
            <p v-if="v$.email.$error" class="text-red-600 text-sm py-1">
                    <span>{{ v$.email.$errors[0].$message }} </span>
                </p>
        </div>     
        <!--phone--> 
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
            <div class="flex flex-row">
               <span style=" border-top-left-radius: 5px; border-bottom-left-radius: 5px; padding-left: 1em; padding-right: 1em; padding-bottom: 0.5em; padding-top: 0.5em; background-color: #56935D;"><i class="fa fa-phone fa-lg mt-4" style="color:white"></i></span> 
                <input type="number" v-model="state.phone" class="focus:outline-primary focus:border-primary focus:outline-offset-0 bg-blue-50 bg-gray-50 border border-gray-200 text-gray-900 text-sm  w-full p-2.5  dark:placeholder-gray-400  rounded-tr-lg rounded-br-lg" placeholder="123-45-678">
                
           </div>
           <p v-if="v$.phone.$error" class="text-red-600 text-sm py-1">
                    <span>{{ v$.phone.$errors[0].$message }} </span>
                </p>
        </div>
          <!--Biography-->
        <div>
            <label for="biography" class="text-sm font-medium mr-2 ">Biography</label>
            <textarea id="bio" rows="4" v-model="state.biography" class="w-full focus:outline-primary focus:border-primary focus:outline-offset-0 bg-blue-50 text-sm rounded-lg mt-2 border border-primary" placeholder="your biography..."></textarea>
         <p v-if="v$.biography.$error" class="text-red-600 text-sm py-1">
                    <span>{{ v$.biography.$errors[0].$message }} </span>
                </p>
        </div>
        <!--Position-->
        <div class="grid gap-6 mb-6 md:grid-cols-2 mx-20">
            <div class="dropdown">
              <lable for="position" class="text-sm font-medium mr-2">Position:</lable>
              <select name="positionTypes" v-model="state.position" class="rounded-md bg-blue-50 focus:outline-primary focus:border-primary focus:outline-offset-0">
                <option value="Exc">Executive  level </option>
                <option value="Mgmt">Managment  level</option>
                <option value="Opp">Operational  level</option>
                <option value="other">Other</option>
              </select>
              <p v-if="v$.position.$error" class="text-red-600 text-sm py-1">
                    <span>{{ v$.position.$errors[0].$message }} </span>
                </p>
            </div>
             <!--Employee code-->
             <div>
                <label for="employeeCode" class="text-sm font-medium mr-2">Employee code :</label>
                <input type="number" v-model="state.employeecode" class="rounded-md bg-blue-50 focus:outline-primary focus:border-primary focus:outline-offset-0" placeholder="000-001">
             <p v-if="v$.employeecode.$error" class="text-red-600 text-sm py-1">
                    <span>{{ v$.employeecode.$errors[0].$message }} </span>
                </p>
             </div>
              <!--Department-->
             <div class="dropDown">
              <lable for="department" class="text-sm font-medium mr-2">Department:</lable>
              <select name="DepartmentTypes" class="rounded-md bg-blue-50 focus:outline-primary focus:border-primary focus:outline-offset-0" v-model="state.department">
                 <option value="Mar"> Marketing</option>
                 <option value="Hr">Human Resources</option>
                 <option value="Acc">Accounting and Finance</option>
                 <option value="Res">Research and Developmet</option>
                 <option value="Inf">Information Technology</option>
                 <option value="produ"> Production</option>
                 <option value="oth">Other</option>
              </select>
              <p v-if="v$.department.$error" class="text-red-600 text-sm py-1">
                    <span>{{ v$.department.$errors[0].$message }} </span>
                </p>
            </div>
            
              <!--Contact person-->
              <div>
                <label for="contactPerson" class="text-sm font-medium mr-2">Contact person:</label>
                <input type="number" class="rounded-md bg-blue-50 focus:outline-primary focus:border-primary focus:outline-offset-0" v-model="state.contactperson" placeholder="+251-222-345">
                <p v-if="v$.contactperson.$error" class="text-red-600 text-sm py-1">
                    <span>{{ v$.contactperson.$errors[0].$message }} </span>
                </p>
            </div>
        </div>
        <button type="submit" class="bg-primary text-white p-2 rounded-md font-semibold">Register</button>
    </div>
    
    
</form>
    
    </div>
</template>

<script>
import useValidate from '@vuelidate/core'
import {required,email} from '@vuelidate/validators'
import {reactive,computed} from 'vue'
    export default {
        name:"RegisterHelpDesk",
        setup(){
          const state=reactive({
            firstName:"",
            middleName:"",
            lastName:"",
            email:"",
            phone:"",
            biography:"",
            position:"",
            department:"",
            contactperson:"",
            employeecode:""

          })
          const rules=computed(()=>{
            return{
              firstname:{required},
              firstName:{required},
            middleName:{required},
            lastName:{required},
            email:{required,email},
            phone:{required},
            biography:{required},
            position:{required},
            department:{required},
            contactperson:{required},
            employeecode:{required}
            }
          })
          const v$=useValidate(rules,state)
          return{ v$,state}
        },
        methods:{
      Register(){
        this.v$.$validate()
        if(!this.v$.$error){
          this.$router.push('/UserDashboard')
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