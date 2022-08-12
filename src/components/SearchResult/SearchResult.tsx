import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { UseQueryState } from "urql";
import { Exact, UsersQuery } from "../../generated/graphql";
import { Avatar } from "../Avatar";
import {
  Login,
  Message,
  Name,
  StyledLink,
  User,
  UserList,
} from "./SearchResult.styled";

interface SearchResultProps {
  result: UseQueryState<
    UsersQuery,
    Exact<{
      query: string;
    }>
  >;
}

export const SearchResult = ({ result }: SearchResultProps) => {
  const navigate = useNavigate();

  console.log({ result: result.data });

  if (result.fetching) {
    return <Message>Loading...</Message>;
  }

  if (result.error) {
    return (
      <Message>
        <FontAwesomeIcon icon={faTriangleExclamation} color="yellow" /> Error :(
      </Message>
    );
  }

  if (result.data) {
    return (
      <UserList>
        {result.data.search.edges?.map((edge) => {
          if (edge?.node?.__typename === "User") {
            const user = edge.node;
            const { name, avatarUrl, login, repositories } = user;
            return (
              <User key={login}>
                <StyledLink
                  onClick={() =>
                    navigate(`/${login}`, {
                      state: {
                        user: { name, avatarUrl, login, repositories },
                      },
                    })
                  }
                >
                  <Avatar src={avatarUrl} alt={name ? name : undefined} />
                  <div data-testid="user">
                    <Name>{name}</Name>
                    <Login>{login}</Login>
                  </div>
                </StyledLink>
              </User>
            );
          }

          return <div>test</div>;
        })}
      </UserList>
    );
  }

  return <Message>Search Github user...</Message>;
};
