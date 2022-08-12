import { createClient } from "urql";

export const client = createClient({
  url: "https://api.github.com/graphql",
  fetchOptions: {
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_USER_SEARCH_APP_TOKEN}`,
    },
  },
});
