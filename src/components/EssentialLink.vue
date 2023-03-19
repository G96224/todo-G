<template>
  <q-item clickable tag="a" :to="props.link">
    <q-item-section v-if="props.icon" avatar>
      <q-icon :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>
        {{ props.title }}
        <!-- <q-badge class="float-right" color="#1976d2" text-color="withe" :label="num" style="padding: 3px 6px;" /> -->
      </q-item-label>

    </q-item-section>
  </q-item>
</template>

<script lang="ts" setup>
// import { storeToRefs } from 'pinia'
// import { useTodosData } from 'src/stores/Todos-store'
// const TodosData = useTodosData();
// const { allDataNum } = storeToRefs(TodosData);
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: ''
  },

  icon: {
    type: String,
    default: ''
  }
})
// const num: number = allDataNum as unknown as number;

</script>
