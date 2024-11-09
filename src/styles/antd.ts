import { ThemeConfig, theme as antdTheme } from 'antd';

/**
 * @link https://ant.design/docs/react/customize-theme
 * @see https://ant.design/theme-editor
 */
export const theme: ThemeConfig = {
  algorithm: [antdTheme.darkAlgorithm, antdTheme.compactAlgorithm],
  token: {
    borderRadius: 0,
  },
  components: {
    Typography: {
      titleMarginBottom: 0,
    },
  },
};
