//定义接口，约束state里的数据类型
export interface Todo {
  id: number;
  content: string;
  time: string;
  status: boolean;
}

export interface Meta {
  totalCount: number;
}
