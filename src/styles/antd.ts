import { ThemeConfig } from 'antd';

/**
 * @link https://ant.design/docs/react/customize-theme
 * @see https://ant.design/theme-editor
 */
export const theme: ThemeConfig = {
  token: {
    colorPrimary: '#F7FDB6',
    borderRadius: 0,
  },
  components: {
    Layout: {
      headerBg: '#ffffff',
    },
    Typography: {
      titleMarginBottom: 0,
    },
  },
};
