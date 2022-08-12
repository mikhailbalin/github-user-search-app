import styled from "@emotion/styled";

export const Message = styled.p({
  margin: "auto",
});

export const UserList = styled.ul({
  margin: 0,
  padding: 0,
  listStyle: "none",
  width: "100%",
});

export const User = styled.li(({ theme: { transitions } }) => ({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
  backgroundColor: "var(--color-root-default)",
  border: "1px solid var(--color-border-default)",
  borderRadius: "0.8rem",
  marginBottom: "0.8rem",
  cursor: "pointer",
  transition: transitions.default,

  "&:hover": {
    backgroundColor: "var(--color-hover-default)",
  },
}));

export const StyledLink = styled.a({
  display: "flex",
  padding: "0.8rem",
  alignItems: "center",
  gap: "1rem",
  textDecoration: "none",
  width: "100%",
});

export const Name = styled.div({
  fontWeight: "bold",
});

export const Login = styled.div({
  color: "var(--color-muted)",
});
