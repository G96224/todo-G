<template>
    <!-- QExpansionItem组件  扩展项 -->
    <q-list bordered class="rounded-borders">
        <q-expansion-item switch-toggle-side expand-separator :label="'未完成 (' + unFinishNum + ')'">
            <div class="q-pa-md row box" v-for="(todo, index) in todosList" :key="index" v-show="!todo.status">
                <q-checkbox v-model="todo.status" size="xs" />
                <!--QPopupEdit组件  弹出编辑 -->
                <div class="cursor-pointer col-lg-10 col-md-8 col-sm-7 col-xs-6" style="line-height:40px;">
                    {{ todo.content }}
                    <q-popup-edit v-model="todo.content" auto-save v-slot="scope">
                        <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
                    </q-popup-edit>
                </div>
                <div class="clo-2" style="line-height:40px;margin-right: 30px;"><q-badge outline color="primary"
                        :label="todo.time" />
                </div>
                <q-btn flat rounded color="primary" icon="bi-backspace" size="sm" @click="delTodo(todo.id)" />
            </div>
        </q-expansion-item>
    </q-list>
</template>

<script lang="ts" setup>
import { useTodosData } from 'src/stores/Todos-store'
import { storeToRefs } from 'pinia'
const TodosData = useTodosData();
const { todosList } = storeToRefs(TodosData);
const { unFinishNum } = storeToRefs(TodosData);
// const todo = todosList.value
// console.log('todo', todo);
//删除数据的方法
const delTodo = (ff: number) => {
    if (window.confirm('确定要删除吗？' + ff)) {
        TodosData.deleteTodo(ff)
    }
}



// const props = defineProps({
//     todos: {
//         type: Array as PropType<Todo[]>,
//         default: () => [],
//         require: true
//     }
// })
// onBeforeMount(() => {
//     console.log(props.todos);
// })
// export default defineComponent({
//     name: 'TodoList',
//     components: {
//         TodoListItem,
//     },
//     props: ['todos', 'deleteTodo', 'updateTodo'],
    // emits: ['todosUpdated'],
    // setup(_, emits) {
    //     const todosUpdated = () => {
    //         emits.emit('todosUpdated')
    //     }

    //     return {

    //     }
    // }
// })
</script>