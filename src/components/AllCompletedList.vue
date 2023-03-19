<template>
    <!-- QExpansionItem组件  扩展项 -->
    <q-list bordered class="rounded-borders">
        <q-expansion-item switch-toggle-side expand-separator :label="'已完成 (' + allFinishNum + ')'">
            <div class="q-pa-md row box" v-for="(allFinishData, index) in allFinishList" :key="allFinishData.id"
                :index="index">
                <!-- 禁用 -->
                <q-checkbox disable v-model="teal" size="xs" />
                <div class="cursor-pointer col-lg-10 col-md-8 col-sm-7 col-xs-6" style="line-height:40px;">{{
                    allFinishData.content
                }}
                </div>
                <div class="clo-2" style="line-height:40px;margin-right: 30px;"><q-badge outline color="primary"
                        :label="allFinishData.time" />
                </div>
                <q-btn flat rounded color="primary" icon="bi-backspace" size="sm" @click="delFinish(allFinishData.id)" />
            </div>
        </q-expansion-item>
    </q-list>
</template>

<script lang="ts" setup>
import { useTodosData } from 'src/stores/Todos-store'
import { storeToRefs } from 'pinia'
import { ref } from 'vue';
const TodosData = useTodosData();
const { allFinishList } = storeToRefs(TodosData);
const { allFinishNum } = storeToRefs(TodosData);

const teal = ref(true)

//删除数据的方法
const delFinish = (val: number) => {
    if (window.confirm('确定要删除吗？')) {
        TodosData.deleteTodo(val);
    }
}

</script>
