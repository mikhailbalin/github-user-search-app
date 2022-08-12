import { useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBookBookmark,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import {
  RepositoryConnection,
  User as TUser,
  useUserQuery,
} from "../../generated/graphql";
import { Avatar } from "../../components";
import {
  HelpText,
  Login,
  Name,
  Repo,
  RepoDescription,
  RepoName,
  ReposWrapper,
  RepoTab,
  Root,
  StyledLink,
  UserInfo,
} from "./User.styled";

type UserParams = {
  login: string;
};

interface UserProps {
  user?: Pick<TUser, "name" | "avatarUrl" | "login"> & {
    repositories: RepositoryConnection;
  };
}

export const User = () => {
  const location = useLocation();
  const state = location.state as UserProps;

  const params = useParams<UserParams>();

  const [result] = useUserQuery({
    variables: {
      login: params.login || "",
    },
    pause: !params.login || !!state,
  });

  const user = state?.user || result?.data?.user;
  const repos = user?.repositories?.nodes;
  const totalCount = user?.repositories.totalCount;

  return (
    <Root>
      <StyledLink to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
      </StyledLink>

      {result.error ? (
        <div>
          <FontAwesomeIcon icon={faTriangleExclamation} color="yellow" />{" "}
          {result.error.message}
        </div>
      ) : (
        <>
          <UserInfo>
            {user?.avatarUrl && <Avatar src={user.avatarUrl} size="large" />}
            <div>
              <Name>{user?.name}</Name>
              <Login>{user?.login}</Login>
            </div>
          </UserInfo>

          {user?.repositories && (
            <RepoTab>
              <FontAwesomeIcon icon={faBookBookmark} /> Repositories:{" "}
              {totalCount}
            </RepoTab>
          )}

          {repos && repos?.length > 0 && (
            <ReposWrapper>
              {repos.map((repo) => {
                if (repo?.__typename === "Repository") {
                  const { name, description } = repo;
                  return (
                    <Repo key={name}>
                      <RepoName>{name}</RepoName>
                      {description && (
                        <RepoDescription>{description}</RepoDescription>
                      )}
                    </Repo>
                  );
                }

                return null;
              })}
            </ReposWrapper>
          )}

          {totalCount && totalCount > 100 && (
            <HelpText>
              End of the list of first 100 repositories. For a complete list
              please visit{" "}
              <a
                href={`https://github.com/${user.login}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.login}'s profile
              </a>
            </HelpText>
          )}
        </>
      )}
    </Root>
  );
};
