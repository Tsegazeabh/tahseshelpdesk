<template>
    <section v-if="allAbout && allAbout.length !== 0" class="py-2 w-full bg-white flex justify-center items-center mx-auto">
        <div class="flex flex-col items-center">
                        <span class="text-sm text-gray-700">
                        Showing <span class="font-semibold text-gray-900">{{meta.from}}</span> to <span class="font-semibold text-gray-900">{{meta.to}}</span> of <span class="font-semibold text-gray-900">{{ meta.total }}</span> Entries
                        </span>

            <div class="inline-flex mt-2 xs:mt-0">
                <button @click="paginate(pageNumber - 1)" :class="{'bg-gray-400 cursor-not-allowed hover:bg-gray-400': pageNumber <= 1}"  class="py-1 px-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900"
                        :disabled="pageNumber <= 1">
                    Prev
                </button>

                <span v-for="(item,index) in Math.ceil(meta.total / meta.per_page)" :key="index">
                                <button @click="paginate(index+1)" class="py-1 px-2 hover:bg-gray-300" :class="{'bg-gray-400 text-white': pageNumber === index+1}">{{index+1}}</button>
                            </span>
                <button @click="paginate(pageNumber + 1)" :class="{'bg-gray-400 cursor-not-allowed hover:bg-gray-400': pageNumber >= meta.last_page}" class="py-1 px-2 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900"
                        :disabled="pageNumber >= meta.last_page">
                    Next
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import {computed, defineEmits, ref} from "vue";
import useAbout from "@composable/about";

// const {perPage, total } = useAbout();
const pageNumber = ref(1);
const props = defineProps(['perPage','total'])
const emit = defineEmits(['pageNumber']);

function paginate(pageNum){
    pageNumber.value = pageNum;
    emit('pageNumber',pageNumber.value);
}
console.log('pagination:',props.perPage,props.total);
const pages = computed(()=>{
    return Math.ceil(props.total / props.perPage);
})


</script>
