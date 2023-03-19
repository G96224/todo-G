import { defineStore } from 'pinia';
import { Todo } from 'src/components/models';

export const useTodosData = defineStore('todos', {
  state: () => ({
    todosList: [
      {
        id: 1,
        content: '吃早饭',
        time: 'YYYY-MM-dd',
        status: false,
      },
    ],
  }),
  getters: {
    //获取当前时间
    timeNow: () => {
      const a = new Date().getTime(); //获取到当前时间戳
      const b = new Date(a); //创建一个指定的日期对象
      function nowDate(now: Date) {
        const year = now.getFullYear(); //年份
        const month = now.getMonth() + 1; //月份（0-11）
        const date = now.getDate(); //天数（1到31）
        return year + '-' + month + '-' + date;
      }
      return nowDate(b);
    },
    //当前日期往前推7天的日期
    timeSeven: () => {
      const a = new Date(new Date().getTime() - 168 * 60 * 60 * 1000); //获取到当前时间戳
      const year = a.getFullYear(); //年份
      const month = a.getMonth() + 1; //月份（0-11）
      const date = a.getDate(); //天数（1到31）
      const valueItem = year + '-' + month + '-' + date;
      return valueItem;
    },
    //所有已完成的任务数据
    allFinishList: (state) => state.todosList.filter((item) => item.status),
    //所有任务的条数
    allDataNum: (state) => state.todosList.length,
    //所有已完成任务的条数
    allFinishNum: (state) =>
      state.todosList.filter((item) => item.status).length,
    //所有未完成任务的条数
    unFinishNum: (state) =>
      state.todosList.filter((item) => !item.status).length,
    //-------------------------------------------------------------
    //问题：今天以及最近七天，已完成数据，删除后需要刷新页面才能渲染
    //今天任务数据
    todayList(state): Todo[] {
      return state.todosList.filter((item) => item.time === this.timeNow);
    },
    //今天未完成任务的条数
    untodayNum(): number {
      const today = this.todayList;
      return today.filter((item) => !item.status).length;
    },
    //今天已完成任务的条数
    todayFinishNum(): number {
      const today = this.todayList;
      return today.filter((item) => item.status).length;
    },
    //-------------------------------------------------------------
    //最近七天任务的数据
    SevenList(state): Todo[] {
      return state.todosList.filter((item) => item.time >= this.timeSeven);
    },
    //最近七天未完成任务的条数
    unSevenNum(): number {
      const seven = this.SevenList;
      return seven.filter((item) => !item.status).length;
    },
    //最近七天已完成任务的条数
    SevenFinishNum(): number {
      const seven = this.SevenList;
      return seven.filter((item) => item.status).length;
    },
  },
  actions: {
    //所有任务
    // 添加数据到todos
    addTodo(todo: Todo) {
      return this.todosList.unshift(todo);
    },
    //删除任务
    deleteTodo(id: number) {
      for (let i = 0; i < this.todosList.length; i++) {
        if (id === this.todosList[i].id) {
          this.todosList.splice(i, 1);
        }
      }
      return this.todosList;
    },
    //修改状态status
    updateTodo(todo: Todo, status: boolean) {
      todo.status = status;
    },
  },
  persist: {
    enabled: true,
    // 自定义持久化参数
    strategies: [
      {
        // 自定义key
        key: 'Todos-store',
        // 自定义存储方式，默认sessionStorage
        storage: localStorage,
        // 指定要持久化的数据，默认所有 state 都会进行缓存，可以通过 paths 指定要持久化的字段，其他的则不会进行持久化。
        // paths: ['curUsername'],
      },
    ],
  },
});
