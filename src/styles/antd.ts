import { ThemeConfig } from 'antd';

/**
 * @link https://ant.design/docs/react/customize-theme
 * @see https://ant.design/theme-editor
 */
export const theme: ThemeConfig = {
  token: {
    colorPrimary: '#000000',
    borderRadius: 0,
  },
  components: {
    Layout: {
      headerBg: '#ffffff',
      headerPadding: 8,
    },
    Typography: {
      titleMarginBottom: 0,
      titleMarginTop: 0,
    },
  },
};
