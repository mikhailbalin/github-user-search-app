import styled from "@emotion/styled";

export const IconWrapper = styled.div({
  pointerEvents: "none",
  position: "absolute",
  zIndex: 1,
  left: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "42px",
  color: "var(--color-primary-white)",
});

export const Input = styled.input({
  height: "42px",
  lineHeight: "40px",
  fontSize: "16px",
  width: "100%",
  color: "var(--color-primary-white)",
  display: "block",
  textAlign: "left",
  minHeight: "42px",
  paddingRight: "42px",
  borderRadius: "32px",
  border: "1px solid var(--color-border-default)",
  backgroundColor: "var(--color-root-default)",
  paddingLeft: "42px",

  "&:focus": {
    outline: "1px solid var(--color-primary-white)",
  },
});

export const ButtonWrapper = styled.div({
  position: "absolute",
  top: "0px",
  bottom: "0px",
  right: "0px",
  display: "flex",
  WebkitBoxAlign: "center",
  alignItems: "center",
  WebkitBoxPack: "center",
  justifyContent: "center",
  width: "42px",
});

export const Button = styled.button(({ theme: { transitions } }) => ({
  cursor: "pointer",
  fontSize: "16px",
  backgroundColor: "var(--color-btn-primary-bg)",
  color: "var(--color-primary-white)",
  border: "1px solid transparent",
  position: "relative",
  height: "32px",
  width: "32px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: transitions.default,

  "&:hover": {
    backgroundColor: "var(--color-btn-primary-hover-bg)",
  },
}));

export const Search = styled.div<{ animate: boolean }>(({ animate }) => ({
  position: "relative",

  ...(animate && {
    animation: "shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both",
  }),
}));
