import styled from "@emotion/styled";

export const Avatar = styled.img<{ size?: "regular" | "large" }>(
  ({ size = "regular" }) => ({
    width: size === "regular" ? "30px" : "50px",
    height: size === "regular" ? "30px" : "50px",
    borderRadius: "50%",
    backgroundColor: "var(--color-muted)",
  })
);
