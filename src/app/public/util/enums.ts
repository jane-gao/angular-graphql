/**
 * Created by Administrator on 2018/9/4 0004.
 * 可以将枚举信息都放在这里
 */

/**
 * http请求返回的状态码枚举
 */
export enum HttpCodesEnum {
  Success = '0000', //返回成功
  logout = '9001', //已退出登录
}

/**
 *获取枚举信息的传入状态码枚举
 */
export enum Enums {
  state = 1010, // 状态
  companyNature = 1011, // 公司性质
  TestUnitState = 1000, //测试单元状态
  StaffState = 1001, //员工状态
  ErrTypeState = 1002, //错误类型状态
  TestOptionState = 1003, //测试项状态
  TestRecordsState = 1004, //测试记录状态
  languages = 1014, //支持的语言
  TestItemsEnum = 1015, //测试项名称
  RepairState = 1005, //检修状态
  Genders = 1006, //性别
  boxStock = 1019, //箱库存状态
  orderState = 1020, //订单状态
  BomState = 1022, //订单状态
  BomDetailState = 1024, //BomDetailState
  BomDetailType = 1025, //BomDetailType
  LogState = 1026, //LogState
  MouldState = 1027, //MouldState
  ProductState = 1028, //ProductState
  ProjectState = 1029, //ProjectState
  AssemblyState = 1032, //AssemblyState
  AssemblyCategoryState = 1033, //AssemblyCategoryState
}

export enum YN {
  yes = 'Y', //是
  no = 'N', //否
}

export enum States {
  enable = 'Enable', //启用
  disable = 'Disable', //禁用
}

export enum ProductStates {
  done = 'Done', // "完成",
  cancel = 'Cancel', // "取消",
  create = 'Create', // "创建",
  developing = 'Developing', // "开发中",
  delivery = 'Delivery', // "发货中",
  producting = 'Producting', // "生产中"
}

export enum BomStates {
  develop = 'Develop', // "开发",
  stop = 'Stop', // "停用",
  stable = 'Stable', // "稳定"
}

export enum AssemblyStates {
  develop = 'Develop', // "开发",
  stop = 'Stop', // "停用",
  stable = 'Stable', // "稳定"
}

export enum AssemblyCategoryStates {
  enable = 'Enable', //启用
  disable = 'Disable', //禁用
}

export enum ProjectStates {
  develop = 'Develop', // "开发",
  stop = 'Stop', // "停用",
  stable = 'Stable', // "稳定"
}

export enum BomDetailStates {
  develop = 'Develop', // "开发",
  stop = 'Stop', // "停用",
  stable = 'Stable', // "稳定"
}

export enum MouldStates {
  develop = 'Develop', // "开发",
  stop = 'Stop', // "停用",
  stable = 'Stable', // "稳定"
}

export enum BomDetailTypes {
  material = 'Material', // "物料",
  assembly = 'Assembly', // "组件"
}

export enum LogStates {
  delete = 'Delete', // "删除",
  copy = 'Copy', // "复制",
  stop = 'Stop', // "禁用",
  create = 'Create', // "创建",
  update = 'Update', // "修改"
}

/**
 * 操作类型
 */
export enum ActionType {
  add = 'add',
  modify = 'modify',
  del = 'delete',
}

/**
 * 性别类型枚举
 */
export enum GenderEnum {
  Male = 'Male', //男
  Female = 'Female', //女
  Other = 'Other', //其他
}

/**
 * 员工在职状态枚举
 */
export enum StaffStateEnum {
  Hire = 'Hire', //在职
  Leave = 'Leave', //离职
}

/**
 * 测试件状态样式枚举
 */
export enum TestunitStateClassEnum {
  Create = 'create', //创建
  TestSuccess = 'testSuccess', //测试通过
  TestFailed = 'testFailed', //测试失败
  Repair = 'repair', //检修
}

/**
 * 测试件状态图标枚举
 */
export enum TestunitStateIconEnum {
  Create = 'plus-circle', //创建
  TestSuccess = 'check-circle', //测试通过
  TestFailed = 'close-circle', //测试失败
  Repair = 'tool', //检修
}

/**
 * 测试件状态枚举
 */
export enum TestunitStateEnum {
  Create = 'Create', //创建
  TestSuccess = 'TestSuccess', //测试通过
  TestFailed = 'TestFailed', //测试失败
  Repair = 'Repair', //检修
}

/**
 * 同步数据操作事件枚举
 */
export enum SyncEventEnum {
  Insert = 'Insert',
  Update = 'Update',
  Delete = 'Delete',
}

/**
 * 同步数据状态枚举
 */
export enum SyncStateEnum {
  Ready = 'Ready',
  Synced = 'Synced',
}

/**
 * 同步追踪数据状态枚举
 */
export enum SyncTraceStateEnum {
  SyncSuccess = 'SyncSuccess',
  SyncFailed = 'SyncFailed',
}

/**
 * 同步追踪数据状态枚举
 */
export enum SyncTraceDirectionEnum {
  DownwardSync = 'DownwardSync',
  UpwardSync = 'UpwardSync',
}

/**
 * 箱状态
 */
export enum BoxStates {
  storage = 'Storage', //入库
  issue = 'Issue', //已出库
}

//同步状态
export enum SyncStates {
  ready = 'Ready', //准备同步
  sync = 'Sync', //同步中
  error = 'Error', //同步错误
  synced = 'Synced', //已经同步
}

export enum OrderState {
  order = 'Order', //已下单
  pendingDelivery = 'Pending_Delivery', //待发货
  shipped = 'Shipped', //已发货
  cancel = 'Cancel', //取消
  delay = 'Delay', //延期
}
