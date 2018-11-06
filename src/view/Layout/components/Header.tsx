import * as React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
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
              <Link to={v.path}>
                <Icon type={v.icon} />{v.title}
              </Link>
            </Menu.Item>
          )}
        </Menu>
      </div>
    )
  }
}

export default View;