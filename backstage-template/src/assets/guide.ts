/*
 * @Author: zdj
 */

const steps = [
  {
    element: "#collapse-button",
    popover: {
      title: "菜单伸缩",
      description: "点击可以收缩菜单",
      position: "right",
    },
  },
  {
    element: "#search-icon",
    popover: {
      title: "功能搜索",
      description: "在这里快速搜索功能",
      position: "bottom-right",
    },
  },
  {
    element: "#fullscreen-wrap",
    popover: {
      title: "全屏开关",
      description: "点击可以全屏展示",
      position: "bottom-right",
    },
  },
  {
    element: "#user-center",
    popover: {
      title: "用户操作",
      description: "用户相关操作都在这里",
      position: "bottom-right",
    },
  },
  {
    element: ".router-tab__nav",
    popover: {
      title: "选项卡右键操作",
      description: "更多操作在这里触发",
      position: "bottom-right",
    },
  },
];

export default steps;
