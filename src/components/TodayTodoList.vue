<template>
    <!-- QExpansionItem组件  扩展项 -->
    <q-list bordered class="rounded-borders">
        <q-expansion-item switch-toggle-side expand-separator :label="'未完成 (' + untodayNum + ')'">
            <div class="q-pa-md row box" v-for="(today, index) in todayList" :key="index" v-show="!today.status">
                <q-checkbox v-model="today.status" size="xs" />
                <!--QPopupEdit组件  弹出编辑 -->
                <div class="cursor-pointer col-lg-10 col-md-8 col-sm-7 col-xs-6" style="line-height:40px;">
                    {{ today.content }}
                    <q-popup-edit v-model="today.content" auto-save v-slot="scope">
                        <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
                    </q-popup-edit>
                </div>
                <div class="clo-2" style="line-height:40px;margin-right: 30px;"><q-badge outline color="primary"
                        :label="today.time" />
                </div>
                <q-btn flat rounded color="primary" icon="bi-backspace" size="sm" @click="tadydel(today.id)" />
            </div>
        </q-expansion-item>
    </q-list>
</template>

<script lang="ts" setup>
import { useTodosData } from 'src/stores/Todos-store'
import { storeToRefs } from 'pinia'
const TodosData = useTodosData();
const { untodayNum, todayList } = storeToRefs(TodosData);
// const todayData = todayList.value
// console.log('todayData', todayData);
//删除数据的方法
const tadydel = (ff: number) => {
    if (window.confirm('确定要删除吗？' + ff)) {
        TodosData.deleteTodo(ff);
    }
}


</script>