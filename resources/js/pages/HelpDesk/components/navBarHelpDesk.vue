<template>
    <div>
    <body class=" antialiased  relative bg-gray-50 ">
     <!--navbar-->
    <div class="absolute z-10 bg-gray-800 border-r-4 border-primary text-white h-screen w-64 px-10  ">
    <nav>
      <div class="mt-10 flex flex-row">
        <span class=""><i class="fa-solid fa-leaf fa-2x"></i></span>
        <P class="font-semibold ml-2 text-2xl">Tahses</P>
      </div>
      <div class="py-10">
        <!--User-->
       <div class="flex flex-row hover:bg-white hover:text-gray-800 hover:fill-black rounded-md pl-2">
        <span class="mt-1.5"><i class="fas fa-user"></i></span> 
         <router-link class="flex items-center   font-semibold px-1 py-2 " :to="{name:'CreateLayout'}">User</router-link>
       </div>
       <!--Roles-->
      <div class="flex flex-row hover:bg-white hover:text-gray-800 hover:fill-black rounded-md pl-2">
     <span class="mt-1.5"><i class="fa fa-tasks" aria-hidden="true"></i></span>
         <router-link class="flex items-center   font-semibold px-1 py-2 " :to="{name:'RolesHelpDesk'}">Roles</router-link>
      </div>
     <!--Projects-->
      <div class="flex flex-row hover:bg-white hover:text-gray-800 hover:fill-black rounded-md pl-2">
         <span class="mt-1.5"><i class="fa-solid fa-folder-plus"></i></span>
         <router-link class="flex items-center   font-semibold px-1 py-2 " :to="{name:'ProjectsHelpDesk'}">Projects</router-link>
      </div>
       <!--SLA-->
       <div class="flex flex-row hover:bg-white hover:text-gray-800 hover:fill-black rounded-md pl-2 ">
        <span class="mt-2"><i class="fa-solid fa-file-contract"></i></span>
         <router-link class="flex items-center   font-semibold px-1 py-2 " :to="{name:'SLAHelpDesk'}">SLA</router-link>
       </div>
        <!--Requests-->
       <div class="flex flex-row hover:bg-white hover:text-gray-800 hover:fill-black rounded-md pl-2 ">
        <span class="mt-2"><i class="fa-solid fa-question"></i></span>
         <router-link class="flex items-center   font-semibold px-1 py-2 " :to="{name:'RequestHelpDesk'}">Requests</router-link>
       </div>
        <!--Settings-->
       <div class="flex flex-row hover:bg-white hover:text-gray-800 hover:fill-black rounded-md pl-2">
        <span class="mt-1.5"><i class="fa-solid fa-gear"></i></span> 
         <router-link class="flex items-center   font-semibold px-1 py-2 " :to="{name:'settingsHelpDesk'}">Settings</router-link>
       </div>
   

       </div>
   
   </nav>
   </div>
    <!--header-->
    <div class="  hover:bg-white hover:text-gray-800 hover:fill-black flex justify-end  border-b-4 border-primary  py-3 mb-6 bg-white px-2 ">
    <header class=" sticky py-2 relative z-0  px-3 rounded-md ">
    <span><i class="fa-solid fa-user-gear text-gray-800"></i></span>
    <button class=" text-gray-800 mr-5 font-semibold pl-2">Admin</button>
    </header>
    </div>

     <div class=" ml-80 mr-16 bg-gray-50 h-screen ">   
     <main  class="flex flex-row">
      <div class="px-2 py-4 w-screen">
        <!--Bread crumb-->
        <nav class="border border solid border black pl-10 py-3 rounded-lg bg-white mb-6">
          <span class="mr-2"><i class="fa-solid fa-house fa-sm text-gray-600"></i></span>
          <span class="text-gray-600 font-semibold">Help Desk</span>
        </nav>
        <!--Search and create Button-->
        <div class=" flex flex-row justify-between  px-3 py-3" >
          <div class="relative w-full">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-96 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
        </div>
        <div class="border border solid border black px-10 py-2 rounded-lg text-white bg-primary font-semibold">
          <router-link :to="{name:'CreateLayout'}"><button class="bg-primary">Create</button></router-link>
          </div>
         </div>
      </div>
      </main>
      </div>
      </body>
    </div>
</template>

<script>
    export default {
        name:'navBarHelpDesk'
    }
</script>

<style scoped>

</style>