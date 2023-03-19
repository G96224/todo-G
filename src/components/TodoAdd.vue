<template>
    <q-input filled v-model="title" label="准备做什么？" @keyup.enter="add" />
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import { useTodosData } from 'src/stores/Todos-store'
const TodosData = useTodosData();

// console.log(TodosData.timeNow);
const time = TodosData.timeNow

// ref类型注解，一般<>
const title = ref('');
// 回车事件回调函数，用于添加数据
const add = () => {
    // 判断内容是否为空，回车后清空输入框
    const text = title.value;
    if (!text.trim()) return
    // 此时有数据，创建一个todo对象
    // console.log(text);
    const todo = {
        id: Date.now(),
        content: text,
        time: time,
        status: false,
    }
    // 调用addTodo, 传入当前todo
    TodosData.addTodo(todo)
    // 清空当前数据
    title.value = ''

}

</script>
  