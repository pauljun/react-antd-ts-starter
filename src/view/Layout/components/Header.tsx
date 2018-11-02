import * as React from 'react';
import { Menu, Icon } from 'antd';
import MenuList from '../../../menuList';
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
class View extends React.Component {
  public render() {
    return (
      <div className='header'>
        <Menu
          mode="horizontal"
        >
          {MenuList.map((v, i) =>
            <Menu.Item key={i}>
              <Icon type="mail" />{v.title}
            </Menu.Item>
          )}
          <Menu.Item key="mail">
            <Icon type="mail" />首页
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default View;