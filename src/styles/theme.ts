import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    color: {
      blues: BlueTheme;
      greens: GreenTheme;
      monochromatics: MonochromaticTheme;
    };
  }
}

interface BlueTheme {
  dark1: string;
  dark2: string;
  dark3: string;
  dark4: string;
}

interface GreenTheme {
  green1: string;
  green2: string;
  green3: string;
  green4: string;
}

interface MonochromaticTheme {
  black: string;
  grey1: string;
  grey2: string;
  grey3: string;
  grey4: string;
  grey5: string;
  grey6: string;
  grey7: string;
  grey8: string;
  white: string;
}

export const collorPallete: DefaultTheme = {
  color: {
    blues: {
      dark1: "#264478",
      dark2: "#112240",
      dark3: "#1C1F26",
      dark4: "#181a20",
    },
    greens: {
      green1: "#D1E6DB",
      green2: "#8FE0B6",
      green3: "#3BE88E",
      green4: "#289B5F",
    },
    monochromatics: {
      black: "#0C0C0D",
      grey1: "#252526",
      grey2: "#3D3E40",
      grey3: "#626366",
      grey4: "#7A7C80",
      grey5: "#ABAEB2",
      grey6: "#C4C6CC",
      grey7: "#DCDFE5",
      grey8: "#E5E8EF",
      white: "#F2F5FA",
    },
  },
};
