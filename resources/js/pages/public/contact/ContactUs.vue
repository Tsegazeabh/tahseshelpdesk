<template>
    <home-layout>
        <div class="flex flex-col justify-center items-center my-4 py-6 w-full">
            <h1 class="text-lg md:text-2xl lg:text-4xl p-2 tracking-wider font-sans font-normal md:font-light capitalize text-gray-600 flex justify-center flex-wrap w-full md:w-[60vw] text-center">You can either contact us through <strong class="mx-2">Email</strong> or fill in the <strong class="mx-2">form</strong></h1>
            <div class="grid grid-cols-3 w-full">
                <div class="col-span-3 md:col-span-2 pt-4 md:pt-16 px-8 md:px-16 w-full">
                    <div class="p-6 flex rounded-md w-full bg-gray-50">
                        <form @submit.prevent="submitForm" class="w-full">
                            <div class="relative z-0 mb-6 w-full group">
                                <input type="text" name="place" id="full_name" class="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
                                <label for="full_name" class="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                            </div>
                            <div class="relative z-0 mb-6 w-full group">
                                <input type="email" name="my_email" class="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
                                <label class="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>
                            <div class="relative z-0 mb-6 w-full group">
                                <input type="text" name="phone" id="phone" class="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
                                <label for="phone" class="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
                            </div>
                            <div class="relative z-0 mb-6 w-full group">
                                <input type="text" name="place" id="place" class="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
                                <label for="place" class="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Place</label>
                            </div>
                            <label for="message" class="block mb-2 text-md text-gray-500">Your message</label>
                            <textarea id="message" rows="4" class="mb-4 block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary" placeholder="Leave a comment..."></textarea>

                            <button type="submit" class="text-center text-white bg-primary/90 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                        </form>
                    </div>
                </div>
                <div class="col-span-3 md:col-span-1 pt-4 md:pt-12 px-8 md:px-4">
                    <div class="my-3 bg-primary p-3">
                        <p class="text-white text-base md:text-md lg:text-lg font-normal">Business Hour: <span class="text-white font-normal text-sm lg:text-md ml-2">Monday – Saturday: 8:30am to 5:30pm</span></p>
                        <p class="text-white text-base md:text-md lg:text-lg font-normal">Email: <span class="text-white font-normal text-sm lg:text-md ml-2">info@thetahses.com</span></p>
                        <p class="text-white text-base md:text-md lg:text-lg font-normal">Phone:<span class="text-white font-normal text-sm lg:text-md ml-2">+251-11-896-43-43</span></p>
                        <p class="text-white text-base md:text-md lg:text-lg font-normal">Location:<span class="text-white font-normal text-sm lg:text-md ml-2">22 Rewina building 4th floor</span></p>
                    </div>
                    <div class="border border-2 border-primary bg-gray-100 flex justify-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.492958416255!2d38.775536314772616!3d9.018714791633283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8562f5dfb7cf%3A0x4f9ddc8e1f9cf00!2sTahses%20Information%20Communication%20Technology%20And%20Consultancy%20Plc!5e0!3m2!1sen!2set!4v1648816365211!5m2!1sen!2set" width="230" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </home-layout>

</template>

<script setup>
import HomeLayout from '@layouts/HomeLayout.vue';

</script>

