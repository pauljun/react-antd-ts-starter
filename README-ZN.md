[English](./README-ZN.md)

## 项目依赖 
- [Create React App](https://github.com/facebookincubator/create-react-app)
- [react-router (4.4.0)](https://reacttraining.com/react-router/web/guides/quick-start)
- [mobx (5.6.0)](https://cn.mobx.js.org/)
- [mobx-react (5.3.6)](https://github.com/mobxjs/mobx-react)
- [postcss-scss (1.0.6)](https://github.com/postcss/postcss-scss)
- [antd (3.10.3)](https://ant.design/docs/react/introduce-cn)


## 目录结构
```
rewired/
  README.md
  README-ZH.md
  config/           //webpack配置文件
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    manifest.json
  scripts/
  src/              //主目录
    _router.ts
    App.tsx
    App.test.tsx
    menuList.ts     //菜单栏配置
    registerServiceWorker.ts
    store/
    view/
    model/
    libs/
    components/
    assets/
  theme.json
```

可以自定义主题颜色,修改```theme.json```文件, 参数配置[参考](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)