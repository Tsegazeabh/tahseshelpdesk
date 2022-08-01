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
         <router-link class="flex items-center   font-semibold px-1 py-2 " :to="{name:'AdminDashboard'}">User</router-link>
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
        <!--Requests-->
       <div class="flex flex-row hover:bg-white hover:text-gray-800 hover:fill-black rounded-md pl-2 ">
        <span class="mt-2"><i class="fa-solid fa-question"></i></span>
         <router-link class="flex items-center   font-semibold px-1 py-2 " :to="{name:'RequestHelpDesk'}">Requests</router-link>
       </div>
        <!--SLA-->
       <div class="flex flex-row hover:bg-white hover:text-gray-800 hover:fill-black rounded-md pl-2 ">
        <span class="mt-2"><i class="fa-solid fa-file-contract"></i></span>
         <router-link class="flex items-center   font-semibold px-1 py-2 " :to="{name:'SLAHelpDesk'}">SLA</router-link>
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
        
      </div>
      </main>
      <form class="flex flex-col jutify-center shadow-lg px-20 py-10 bg-white">
        <div>
         <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
        <input type="text"  class=" mb-6 rounded-lg focus:outline-primary focus:border-primary focus:outline-offset-0 bg-blue-50 border border-gray-200 text-gray-900 text-sm   block w-full p-2.5 rounded-tr-lg rounded-br-lg" placeholder="Name" >
       </div>
       <div>
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description</label>
           <textarea id="message" rows="4" class="mb-6 focus:outline-primary focus:border-primary focus:outline-offset-0 block p-2.5 w-full text-sm text-gray-900 bg-blue-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description..."></textarea>
        </div>
        
        <div class="flex justify-end">
            <button class="bg-primary text-white px-10 py-2 rounded-md font-semibold ml-auto">Save</button>
        </div>
         
    </form>
      </div>
      </body>

    </div>
</template>

<script>
    export default {
        name:"creatLayout"
    }
</script>

<style scoped>

</style>