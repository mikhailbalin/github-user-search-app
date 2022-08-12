import styled from "@emotion/styled";
import { block } from "../../theme/mixins";

export const Root = styled.main({
  minHeight: "calc(100vh - 4rem)",
  display: "flex",
  flexDirection: "column",
  padding: "2rem 0",
});

export const SearchWrapper = styled.div({
  ...block,
  marginBottom: "20px",
});

export const ContentWrapper = styled.div({
  ...block,
  flex: 1,
  display: "flex",
  justifyContent: "center",
});
