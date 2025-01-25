import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      info: string;
      warning: string;
      error: string;
      success: string;
    };
    spaces: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
  }
}
