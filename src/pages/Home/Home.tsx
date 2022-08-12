import React from "react";
import { SearchField, SearchResult } from "../../components";
import { useUsersQuery } from "../../generated/graphql";
import { ContentWrapper, Root, SearchWrapper } from "./Home.styled";

export function Home() {
  const [query, setQuery] = React.useState("");

  const [result, executeQuery] = useUsersQuery({
    variables: {
      query,
    },
    pause: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) return;
    executeQuery();
  };

  return (
    <Root>
      <SearchWrapper>
        <SearchField
          query={query}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </SearchWrapper>
      <ContentWrapper>
        <SearchResult result={result} />
      </ContentWrapper>
    </Root>
  );
}
