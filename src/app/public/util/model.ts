/**
 * Created by Administrator on 2018/9/4 0004.
 * 所有interface/class定义的数据模板都放这里
 */
export class Page {
  curPage: number = 1; //当前页
  lastPage: boolean = true; //是否最后一页
  pageSize: number = 10; //每页条数
  params: any = {}; //查询参数
  sortColumns: string = null;
  totalPage: number = 0; //总页数
  totalRow: number = 0; //总条数
  voList: Array<any> = []; //查询结果
}

export class MenuItem {
  menuName: string; //菜单文字
  menuIcon?: string; //菜单图标，二级菜单不需要的时候可以不写
  menuUrl: string; //菜单链接
  subMenuList?: Array<MenuItem>; //子菜单
}

export interface TreeNodeInterface {
  code: number;
  name: string;
  preCode: number;
  level: number;
  expand: boolean;
  summary: string;
  state: string;
  hasChild: boolean;
  children?: TreeNodeInterface[];
}
