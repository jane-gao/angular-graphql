/*setting*/
export class Setting {
  public user: any = {
    name: 'Admin',
  };

  public static APP: any = {
    name: 'jane',
    description: 'jane',
    copyright: 'jane', //© 2018 - pi-top
    logo: '../../../assets/img/logo.png',
    defaultImg: '../../../assets/img/dummy.png',
    userDefaultImg: '../../../assets/img/user-default.png',
  };
  public static MENUS: Array<any> = []; //menu

  //storage key
  public static storage: any = {
    menusInfo: 'menus', //menu
    language: 'language', //language
    token: 'AuthorizationToken', //token
  };

  /**
   * 国际化数据本地存储
   */
  public static I18nData = {};
}
