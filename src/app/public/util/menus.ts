import { MenuItem } from './model';

/**
 * 本地开发使用菜单
 * 生产环境中菜单信息将由登录接口返回
 */
const suppliers: MenuItem = new MenuItem();
export const MENUS = [suppliers];
