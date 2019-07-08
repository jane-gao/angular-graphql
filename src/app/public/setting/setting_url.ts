/*接口访问路径配置*/

export class SettingUrl {
  // 接口通讯url集合
  static URL: any = {
    /**
     * 首页统计
     */
    home: {
      homePageInfo: 'admin/bidding/homePageInfo', //加载首页统计信息
      test: '/login/gencode', //test
      stop: '/login/stop', //stop
    },
    /**
     * 基础路径配置
     */
    base: {
      enum: '/res/enum/', //获取枚举接口
      errorCode: '/errorcodeLocal/loadByParam/', //根据错误码和语言获取相应提示信息
      upload: '/upload/upload.shtml', //上传图片
    },
    /**
     * 登录注册接口
     */
    pass: {
      login: '/login/login', //登录接口
      logout: '/login/logout', //退出登录登录
      refresh: '/login/refresh', //刷新验证码
      register: '/login/reg', //注册
    },
    supplier: {
      list: '/supplier/list', //供应商列表
      add: '/supplier/build', //添加供应商
      modify: '/supplier/modify', //修改供应商
      load: '/supplier/load/code/', //查询供应商信息
      loadListByMaterialCode: '/supplier/loadListByMaterialCode', //查询供应商信息
      updateState: '/supplier/updateState', //修改供应商状态
    },
    supplierCategory: {
      list: '/supplierCategory/list', //供应商类型列表
      add: '/supplierCategory/build', //添加供应商类型
      modify: '/supplierCategory/modify', //修改供应商类型
      load: '/supplierCategory/load/code/', //查询供应商类型信息
    },
    material: {
      list: '/material/list', //物料列表
      add: '/material/build', //添加物料
      modify: '/material/modify', //修改物料
      load: '/material/load/code/', //查询物料信息
      updateState: '/material/updateState', //修改物料状态
      listForAssembly: '/material/listForAssembly', //某个组件的物料
      listForBom: '/material/listForBom', //某个bom的物料
    },
    materialLog: {
      list: '/materialLog/list', //MaterialLog列表
      load: '/materialLog/load/code/', //查询MaterialLog信息
    },
    materialCategory: {
      list: '/materialCategory/list', //物料类型列表
      add: '/materialCategory/build', //添加物料类型
      modify: '/materialCategory/modify', //修改物料类型
      load: '/materialCategory/load/code/', //查询物料类型信息
    },
    materialBrand: {
      list: '/materialBrand/list', //物料品牌列表
      add: '/materialBrand/build', //添加物料品牌
      modify: '/materialBrand/modify', //修改物料品牌
      load: '/materialBrand/load/code/', //查询物料品牌信息
    },
    materialUnit: {
      list: '/materialUnit/list', //物料单位列表
      add: '/materialUnit/build', //添加物料单位
      modify: '/materialUnit/modify', //修改物料单位
      load: '/materialUnit/load/code/', //查询物料单位信息
    },
    materialCurrency: {
      list: '/materialCurrency/list', //物料货币列表
      add: '/materialCurrency/build', //添加物料货币
      modify: '/materialCurrency/modify', //修改物料货币
      load: '/materialCurrency/load/code/', //查询物料货币信息
    },
    payment: {
      list: '/paymentTerm/list', //支付方式列表
      add: '/paymentTerm/build', //添加支付方式
      modify: '/paymentTerm/modify', //修改支付方式
      load: '/paymentTerm/load/code/', //查询支付方式信息
    },
    cycleTime: {
      list: '/cycleTime/list', //生产周期列表
      add: '/cycleTime/build', //添加生产周期
      modify: '/cycleTime/modify', //修改生产周期
      load: '/cycleTime/load/code/', //查询生产周期信息
    },
    succedaneumMaterial: {
      list: '/succedaneumMaterial/list', //可替代物料列表
      add: '/succedaneumMaterial/build', //添加可替代物料
      modify: '/succedaneumMaterial/modify', //修改可替代物料
      delete: '/succedaneumMaterial/delete', //删除可替代物料
      load: '/succedaneumMaterial/load/code/', //查询可替代物料信息
    },
    sync: {
      syncTrace: {
        list: '/syncTrace/list', //获取同步追踪列表
      },
      newData: {
        list: '/syncNewData/list', //获取可同步数据列表
        detail: '/syncNewData/load/code/', //获取可同步数据详情
      },
      dataTrace: {
        syncTraceCode: '/syncDataTrace/load/syncTraceCode/', //根据同步编码获取详情
      },
    },
    setting: {
      list: '/setting/list', //获取设置列表
      modify: '/setting/modify', //修改设置列表
    },
    staff: {
      list: '/staff/list', //获取员工列表
      listByCode: '/staff/load/code', //根据code获取员工信息
      modify: '/staff/modify', //修改员工信息
      build: '/staff/build', //添加员工
      search: '/staff/listByJobNumberAndNameAndFactoryCode', //搜索
    },
    factory: {
      build: '/factory/build', //工厂创建
      list: '/factory/list', //获取工厂列表
      modify: '/factory/modify', //工厂修改
      detailByCode: '/factory/load/code', //根据code获取工厂信息
    },
    testUnit: {
      list: '/testUnit/list', //查询测试件列表
      detail: '/testUnit/load/code', //根据code码查询测试件详情信息
    },
    testRecord: {
      list: '/testRecord/list', //查询测试记录
    },
    repairFeedback: {
      list: '/repairFeedback/list', //维修记录
    },
    factorySample: {
      build: '/factorySample/build', //工厂样品列表
      list: '/factorySample/list', //工厂创建
      modify: '/factorySample/modify', //工厂修改
    },
    errorType: {
      build: '/errortype/build', //添加错误类型
      list: '/errortype/list', //错误类型列表
      modify: '/errortype/modify', //错误类型修改
    },
    sample: {
      build: '/sample/build', //添加样品
      list: '/sample/list', //样品列表
      modify: '/sample/modify', //修改样品
    },
    testOption: {
      build: '/testOption/build', //添加测试项
      list: '/testOption/list', //获取列表测试项
      modify: '/testOption/modify', //修改测试项
    },
    order: {
      boxList: '/box/list', //库存
      loadBox: '/box/load/sn/', //查看箱内产品
      customerList: '/customer/list', //客户
      loadCustomer: '/customer/load/code/', //客户信息
      orderList: '/order/list', //订单
      loadOrder: '/order/load/code/', //查询Order信息
      orderBoxList: '/orderDetail/listBox', //绑定的箱子
      getBoxSample: '/boxItem/getSampleByBoxSn', //查看箱内产品
    },
    assembly: {
      list: '/assembly/list', //Assembly列表
      add: '/assembly/build', //添加Assembly
      modify: '/assembly/modify', //修改Assembly
      load: '/assembly/get/code/', //查询Assembly信息
      copy: '/assembly/copy', //复制
      updateState: '/assembly/updateState', //修改Assembly状态
      addMaterial: '/assembly/addMaterial', //addMaterial
      listForBom: '/assembly/listForBom', //某个bom的组件
    },
    assemblyCategory: {
      list: '/assemblyCategory/list', //AssemblyCategory列表
      add: '/assemblyCategory/build', //添加AssemblyCategory
      modify: '/assemblyCategory/modify', //修改AssemblyCategory
      load: '/assemblyCategory/get/code/', //查询AssemblyCategory信息
      updateState: '/assemblyCategory/updateState', //修改AssemblyCategory状态
    },
    assemblyLog: {
      list: '/assemblyLog/list', //AssemblyLog列表
      add: '/assemblyLog/build', //添加AssemblyLog
      modify: '/assemblyLog/modify', //修改AssemblyLog
      load: '/assemblyLog/get/code/', //查询AssemblyLog信息
      updateState: '/assemblyLog/updateState', //修改AssemblyLog状态
    },
    assemblyMaterial: {
      list: '/assemblyMaterial/list', //AssemblyMaterial列表
      delete: '/assemblyMaterial/delete', //删除相关材料
    },
    bom: {
      list: '/bom/list', //Bom列表
      add: '/bom/build', //添加Bom
      modify: '/bom/modify', //修改Bom
      load: '/bom/get/code/', //查询Bom信息
      updateState: '/bom/updateState', //修改Bom状态
      copy: '/bom/copy', //复制
      queryBindProductBomList: '/bom/queryBindProductBomList', //queryBindProductBomList
      queryUnBindProductBomList: '/bom/queryUnBindProductBomList', //queryUnBindProductBomList
      queryBindProjectBomList: '/bom/queryBindProjectBomList', //queryBindProjectBomList
      queryUnBindProjectBomList: '/bom/queryUnBindProjectBomList', //queryUnBindProjectBomList
    },
    bomDetail: {
      list: '/bomDetail/list', //BomDetail列表
      add: '/bomDetail/build', //添加BomDetail
      modify: '/bomDetail/modify', //修改BomDetail
      load: '/bomDetail/get/code/', //查询BomDetail信息
      save: '/bomDetail/save', //保存BomDetail信息
      delete: '/bomDetail/delete', //删除BomDetail信息
      updateState: '/bomDetail/updateState', //修改BomDetail状态
    },
    bomDetailLog: {
      list: '/bomDetailLog/list', //BomDetailLog列表
      add: '/bomDetailLog/build', //添加BomDetailLog
      modify: '/bomDetailLog/modify', //修改BomDetailLog
      load: '/bomDetailLog/get/code/', //查询BomDetailLog信息
      updateState: '/bomDetailLog/updateState', //修改BomDetailLog状态
    },
    bomLog: {
      list: '/bomLog/list', //BomLog列表
      add: '/bomLog/build', //添加BomLog
      modify: '/bomLog/modify', //修改BomLog
      load: '/bomLog/get/code/', //查询BomLog信息
      updateState: '/bomLog/updateState', //修改BomLog状态
    },
    mould: {
      list: '/mould/list', //Mould列表
      add: '/mould/build', //添加Mould
      modify: '/mould/modify', //修改Mould
      load: '/mould/get/code/', //查询Mould信息
      updateState: '/mould/updateState', //修改Mould状态
    },
    product: {
      list: '/product/list', //Product列表
      add: '/product/build', //添加Product
      modify: '/product/modify', //修改Product
      load: '/product/get/code/', //查询Product信息
      copy: '/product/copy', //复制
      updateState: '/product/updateState', //修改Product状态
    },
    project: {
      list: '/project/list', //Project列表
      add: '/project/build', //添加Project
      modify: '/project/modify', //修改Project
      load: '/project/load/code/', //查询Project信息
      copy: '/project/copy', //复制
      updateState: '/project/updateState', //修改Project状态
    },
    projectBom: {
      list: '/projectBom/list', //projectBom列表
      add: '/projectBom/build', //添加projectBom
      modify: '/projectBom/modify', //修改projectBom
      delete: '/projectBom/delete', //删除projectBom
    },
    productBom: {
      list: '/productBom/list', //productBom列表
      add: '/productBom/build', //添加productBom
      modify: '/productBom/modify', //修改productBom
      delete: '/productBom/delete', //删除productBom
    },
    projectCategory: {
      list: '/projectCategory/list', //ProjectCategory列表
      add: '/projectCategory/build', //添加ProjectCategory
      modify: '/projectCategory/modify', //修改ProjectCategory
      load: '/projectCategory/get/code/', //查询ProjectCategory信息
      updateState: '/projectCategory/updateState', //修改ProjectCategory状态
    },
    projectStaff: {
      list: '/projectStaff/list', //ProjectStaff列表
      add: '/projectStaff/build', //添加ProjectStaff
      modify: '/projectStaff/modify', //修改ProjectStaff
      load: '/projectStaff/get/code/', //查询ProjectStaff信息
      updateState: '/projectStaff/updateState', //修改ProjectStaff状态
    },
    projectLog: {
      list: '/projectLog/list', //ProjectLog列表
      add: '/projectLog/build', //添加ProjectLog
      modify: '/projectLog/modify', //修改ProjectLog
      load: '/projectLog/get/code/', //查询ProjectLog信息
      updateState: '/projectLog/updateState', //修改ProjectLog状态
    },
  };

  // 路由链接信息
  static ROUTERLINK: any = {
    basic: {
      home: '/main/home',
    },
    pass: {
      login: '/page/login', //登录
    },
    supplier: {
      list: '/main/supplier/suppliers', //列表
      add: '/main/supplier/suppliers/add', //添加
      modify: '/main/supplier/suppliers/modify', //修改
      detail: '/main/supplier/suppliers/detail', //详情
    },
    material: {
      list: '/main/material/materials', //列表
      add: '/main/material/materials/add', //添加
      modify: '/main/material/materials/modify', //修改
      detail: '/main/material/materials/detail', //详情
    },
    staff: {
      list: '/main/managements/staff', //列表
      add: '/main/managements/staff/add', //添加
      modify: '/main/managements/staff/modify', //修改
    },
    sample: {
      list: '/main/managements/sample', //样品列表
      detail: '/main/managements/sample/detail', //样品列表
    },
    errorType: {
      list: '/main/managements/errorType', //错误类型列表
    },
    setting: {
      list: '/main/setting', //设置列表
    },
    factory: {
      list: '/main/managements/factory', //工厂列表
      factorySample: '/main/managements/factory/factorySample', //工厂样品
      add: '/main/managements/factory/add', //工厂列表
      edit: '/main/managements/factory/edit', //工厂列表
    },
    sync: {
      syncTrace: {
        list: '/main/sync/syncTrace', //同步追踪列表
        detail: '/main/sync/syncTrace/detail', //同步追踪详情
      },
      newData: {
        list: '/main/sync/newData', //可同步数据列表
        detail: '/main/sync/newData/detail', //可同步数据详情
      },
    },
    testUnit: {
      detail: '/main/managements/units/detail', //测试件详情/测试记录列表
    },
    testRecord: {
      detail: '/main/managements/test-record/detail', //测试件详情/测试记录列表
    },
    repairRecord: {
      detail: '/main/managements/repair-record/detail', //测试件详情/测试记录列表
    },
    order: {
      order: {
        list: '/main/order/order',
        detail: '/main/order/order/detail',
      },
      customer: {
        list: '/main/order/customer',
        detail: '/main/order/customer/detail',
      },
    },
    bom: {
      list: '/main/bom', //Bom列表
      add: '/main/bom/add', //添加Bom
      modify: '/main/bom/modify', //修改Bom
      detail: '/main/bom/detail', //查询Bom信息
    },
    bomDetailLog: {
      list: '/main/bom/bom-detail-log', //BomDetailLog列表
      add: '/main/bom/bom-detail-log/add', //添加BomDetailLog
      modify: '/main/bom/bom-detail-log/modify', //修改BomDetailLog
      detail: '/main/bom/bom-detail-log/detail', //查询BomDetailLog信息
    },
    bomLog: {
      list: '/main/bom/bom-log', //BomLog列表
      add: '/main/bom/bom-log/add', //添加BomLog
      modify: '/main/bom/bom-log/modify', //修改BomLog
      detail: '/main/bom/bom-log/detail', //查询BomLog信息
    },
    assembly: {
      list: '/main/material/assemblies', //Assembly列表
      add: '/main/material/assemblies/add', //添加Assembly
      modify: '/main/material/assemblies/modify', //修改Assembly
      detail: '/main/material/assemblies/detail', //查询Assembly信息
      materials: '/main/material/assemblies/materials', //查询Assembly的materials信息
    },
    assemblyCategory: {
      list: '/main/material/assembly-category', //AssemblyCategory列表
      add: '/main/material/assembly-category/add', //添加AssemblyCategory
      modify: '/main/material/assembly-category/modify', //修改AssemblyCategory
      detail: '/main/material/assembly-category/detail', //查询AssemblyCategory信息
    },
    assemblyLog: {
      list: '/main/assembly/assembly-log', //AssemblyLog列表
      add: '/main/assembly/assembly-log/add', //添加AssemblyLog
      modify: '/main/assembly/assembly-log/modify', //修改AssemblyLog
      detail: '/main/assembly/assembly-log/detail', //查询AssemblyLog信息
    },
    project: {
      list: '/main/project/projects', //Project列表
      add: '/main/project/projects/add', //添加Project
      modify: '/main/project/projects/modify', //修改Project
      detail: '/main/project/projects/detail', //查询Project信息
    },
    projectCategory: {
      list: '/main/project/project-category', //ProjectCategory列表
    },
    projectLog: {
      list: '/main/project/project-log', //ProjectLog列表
      add: '/main/project/project-log/add', //添加ProjectLog
      modify: '/main/project/project-log/modify', //修改ProjectLog
      detail: '/main/project/project-log/detail', //查询ProjectLog信息
    },
    materialLog: {
      list: '/main/material/log', //MaterialLog列表
    },
    product: {
      list: '/main/product', //Product列表
      add: '/main/product/add', //添加Product
      modify: '/main/product/modify', //修改Product
      detail: '/main/product/detail', //查询Product信息
    },
  };
}
