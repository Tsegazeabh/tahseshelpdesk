<template>
    <div class="bg-dark min-h-screen">
        <div class="pt-3 px-4 text-center bg-[#00cba9] text-white text-3xl font-extrabold">Our Competencies</div>
<!--        <svg class="bg-red-300" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,224L6.2,224C12.3,224,25,224,37,218.7C49.2,213,62,203,74,213.3C86.2,224,98,256,111,240C123.1,224,135,160,148,122.7C160,85,172,75,185,96C196.9,117,209,171,222,176C233.8,181,246,139,258,133.3C270.8,128,283,160,295,176C307.7,192,320,192,332,213.3C344.6,235,357,277,369,277.3C381.5,277,394,235,406,186.7C418.5,139,431,85,443,90.7C455.4,96,468,160,480,160C492.3,160,505,96,517,74.7C529.2,53,542,75,554,96C566.2,117,578,139,591,160C603.1,181,615,203,628,208C640,213,652,203,665,165.3C676.9,128,689,64,702,58.7C713.8,53,726,107,738,149.3C750.8,192,763,224,775,213.3C787.7,203,800,149,812,149.3C824.6,149,837,203,849,213.3C861.5,224,874,192,886,149.3C898.5,107,911,53,923,32C935.4,11,948,21,960,64C972.3,107,985,181,997,192C1009.2,203,1022,149,1034,133.3C1046.2,117,1058,139,1071,128C1083.1,117,1095,75,1108,58.7C1120,43,1132,53,1145,74.7C1156.9,96,1169,128,1182,170.7C1193.8,213,1206,267,1218,256C1230.8,245,1243,171,1255,154.7C1267.7,139,1280,181,1292,181.3C1304.6,181,1317,139,1329,138.7C1341.5,139,1354,181,1366,218.7C1378.5,256,1391,288,1403,298.7C1415.4,309,1428,299,1434,293.3L1440,288L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"></path></svg>-->
        <svg class="bg-white" viewBox="0 0 960 50"><path fill="#00cba9" stroke-linecap="round" stroke-linejoin="miter" d="M0 21L7.3 20.8C14.7 20.7 29.3 20.3 43.8 23.8C58.3 27.3 72.7 34.7 87.2 36.5C101.7 38.3 116.3 34.7 131 34.2C145.7 33.7 160.3 36.3 174.8 35.7C189.3 35 203.7 31 218.2 27.8C232.7 24.7 247.3 22.3 261.8 24.3C276.3 26.3 290.7 32.7 305.2 31.3C319.7 30 334.3 21 349 19.5C363.7 18 378.3 24 392.8 23.5C407.3 23 421.7 16 436.2 16.7C450.7 17.3 465.3 25.7 480 30.8C494.7 36 509.3 38 523.8 38.8C538.3 39.7 552.7 39.3 567.2 40.2C581.7 41 596.3 43 611 42.2C625.7 41.3 640.3 37.7 654.8 37.2C669.3 36.7 683.7 39.3 698.2 36C712.7 32.7 727.3 23.3 741.8 21C756.3 18.7 770.7 23.3 785.2 25.3C799.7 27.3 814.3 26.7 829 24.8C843.7 23 858.3 20 872.8 23C887.3 26 901.7 35 916.2 35.2C930.7 35.3 945.3 26.7 952.7 22.3L960 18L960 0L952.7 0C945.3 0 930.7 0 916.2 0C901.7 0 887.3 0 872.8 0C858.3 0 843.7 0 829 0C814.3 0 799.7 0 785.2 0C770.7 0 756.3 0 741.8 0C727.3 0 712.7 0 698.2 0C683.7 0 669.3 0 654.8 0C640.3 0 625.7 0 611 0C596.3 0 581.7 0 567.2 0C552.7 0 538.3 0 523.8 0C509.3 0 494.7 0 480 0C465.3 0 450.7 0 436.2 0C421.7 0 407.3 0 392.8 0C378.3 0 363.7 0 349 0C334.3 0 319.7 0 305.2 0C290.7 0 276.3 0 261.8 0C247.3 0 232.7 0 218.2 0C203.7 0 189.3 0 174.8 0C160.3 0 145.7 0 131 0C116.3 0 101.7 0 87.2 0C72.7 0 58.3 0 43.8 0C29.3 0 14.7 0 7.3 0L0 0Z"></path></svg>
<!--    competency cards-->
    <div class="block md:flex flex-wrap justify-evenly items-center space-y-6">
        <div class="w-[300px] h-[350px] grid grid-cols-1 grid-rows-2 shadow-2xl shadow-black/50  rounded-large border border-1 border-[#00cba9] p-6 mx-auto">
            <div class="w-4/5 mx-auto rounded-large overflow-hidden border border-1 border-[#00cba9]"><img class="w-full h-full object-cover" src="../../../assets/images/img2.png" alt=""></div>
            <div>
                <h3 class="pl-4 my-3 mx-auto">Web-based Applications and Web Portals</h3>
                <button class="float-right rounded-bl-fine rounded-tr-fine px-4 py-4 border border-1 shadow-2xl shadow-black/50 border-[#00cba9]">Read More</button>
            </div>
        </div>
        <div class="w-[300px] h-[350px] grid grid-cols-1 grid-rows-2 shadow-2xl shadow-black/50 rounded-large border border-1 border-[#00cba9] p-6 mx-auto">
        <div class="w-4/5 mx-auto rounded-large overflow-hidden border border-1 border-[#00cba9]"><img class="w-full h-full object-cover" src="../../../assets/images/img2.png" alt=""></div>
        <div>
            <h3 class="pl-4 my-3 mx-auto">Web-based Applications and Web Portals</h3>
            <button class="float-right rounded-bl-fine rounded-tr-fine px-4 py-4 border border-1 shadow-2xl shadow-black/50 border-[#00cba9]">Read More</button>
        </div>
        </div>
        <div class="w-[300px] h-[350px] grid grid-cols-1 grid-rows-2 shadow-2xl shadow-black/50 rounded-large border border-1 border-[#00cba9] p-6 mx-auto">
        <div class="w-4/5 mx-auto rounded-large overflow-hidden border border-1 border-[#00cba9]"><img class="w-full h-full object-cover" src="../../../assets/images/img2.png" alt=""></div>
        <div>
            <h3 class="pl-4 my-3 mx-auto">Web-based Applications and Web Portals</h3>
            <button class="float-right rounded-bl-fine rounded-tr-fine px-4 py-4 border border-1 shadow-2xl shadow-black/80 border-[#00cba9]">Read More</button>
        </div>
    </div>
    </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref('');



</script>

<style scoped>

</style>
