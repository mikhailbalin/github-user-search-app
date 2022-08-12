import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { block } from "../../theme/mixins";

export const Root = styled.main({
  ...block,
  margin: "2rem 0",
  position: "relative",
});

export const StyledLink = styled(Link)(({ theme: { transitions } }) => ({
  display: "flex",
  padding: "0.5rem",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "var(--color-btn-primary-bg)",
  borderRadius: "50%",
  width: "2rem",
  height: "2rem",
  position: "absolute",
  top: "-1rem",
  left: "-1rem",
  color: "var(--color-primary-white)",
  transition: transitions.default,

  "&:hover": {
    backgroundColor: "var(--color-btn-primary-hover-bg)",
  },
}));

export const Name = styled.div({
  fontWeight: "bold",
});

export const Login = styled.div({
  color: "var(--color-muted)",
});

export const RepoTab = styled.div({
  fontWeight: "bold",
  marginBottom: "1rem",
});

export const UserInfo = styled.div({
  display: "flex",
  gap: "2rem",
  alignItems: "center",
  marginBottom: "2rem",
});

export const ReposWrapper = styled.div({
  backgroundColor: "var(--color-root-default)",
  border: "1px solid var(--color-border-default)",
  padding: "0.5rem",
});

export const Repo = styled.div({
  borderBottom: "1px solid var(--color-border-default)",
  marginBottom: "1rem",
  paddingBottom: "1rem",

  "&:last-child": {
    borderBottom: "none",
  },
});

export const RepoName = styled.div({
  fontWeight: "bold",
});

export const RepoDescription = styled.div({
  padding: "0.2rem 0 0",
  fontSize: "0.8rem",
});

export const HelpText = styled.p(({ theme: { transitions } }) => ({
  fontSize: "1rem",
  marginTop: "1rem",
  textAlign: "center",
  padding: "0 1rem",

  "& a": {
    color: "var(--color-btn-primary-bg)",
    transition: transitions.default,

    "&:hover, &:visited": {
      color: "var(--color-btn-primary-hover-bg)",
    },
  },
}));
