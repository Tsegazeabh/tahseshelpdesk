<template>
    <ul class="flex list-reset border border-grey-light rounded w-auto font-sans">
        <li v-if="pagination.current_page > 1">
            <a class="block hover:text-white hover:bg-blue text-blue border-r border-grey-light px-3 py-2"
               href="#"
               @click.prevent="change(pagination.current_page -1)"
            >
                Previous
            </a>
        </li>
        <li v-for="page in pages" :key="page" >
            <a :class="[page === pagination.current_page ? 'text-white bg-blue border-r border-blue':'hover:text-white hover:bg-blue text-blue border-r border-grey-light', 'block px-3 py-2']"
               href="#"
               @click.stop="change(page)"
            >
                {{ page }}
            </a>
        </li>
        <li v-if="pagination.current_page < pagination.last_page">
            <a class="block hover:text-white hover:bg-blue text-blue px-3 py-2"
               href="#"
               @click.prevent="change(pagination.current_page + 1)"
            >
                Next
            </a>
        </li>
    </ul>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
            pagination: {
            type: Object,
            required: true
        },
        offset: {
            type: Number,
            default: 4
        }
    });
    const emit = defineEmits(['paginate']);

   const pages = computed(() => {
       console.log(props);
            if (!props.pagination.to) {
                return null;
            }
            let from = props.pagination.current_page - props.offset;
            if (from < 1) {
                from = 1;
            }
            let to = from + (props.offset * 2);
            if (to >= props.pagination.last_page) {
                to = props.pagination.last_page;
            }
            let pages = [];
            for (let page = from; page <= to; page++) {
                pages.push(page);
            }
            return pages;
        }
    );

        function change(page) {
            props.pagination.current_page = page;
            emit('paginate');
        }
</script>
