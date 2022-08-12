declare module "@emotion/react" {
  export interface Theme {
    transitions: {
      default: string;
    };
  }
}

export const theme = {
  transitions: {
    default: "all 0.2s ease-in-out",
  },
};
