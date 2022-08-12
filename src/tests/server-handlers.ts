import { graphql } from "msw"; // msw supports graphql too!

const handlers = [
  graphql.query("Users", (req, res, ctx) => {
    return res(
      ctx.data({
        search: {
          userCount: 1,
          edges: [
            {
              node: {
                login: "mikhailbalin",
                name: "Misha Balin",
                avatarUrl:
                  "https://avatars.githubusercontent.com/u/15248481?u=1670b7469f839a402945b790f3ab1b378b67dce2&v=4",
                repositories: {
                  nodes: [
                    {
                      name: "mikhailbalin.github.io",
                      description: "📝 Docs",
                      __typename: "Repository",
                    },
                    {
                      name: "snow-fight",
                      description: "⛄ Snow Fight Webapp",
                      __typename: "Repository",
                    },
                    {
                      name: "mbtools",
                      description: "⌨ A CLI to bootstrap my dev tools",
                      __typename: "Repository",
                    },
                    {
                      name: "last-palace",
                      description: "Web for Last Palace",
                      __typename: "Repository",
                    },
                    {
                      name: "rest_17",
                      description: "Web for Rest_17",
                      __typename: "Repository",
                    },
                    {
                      name: "mikhailbalin",
                      description: "👨🏻‍💻 Profile README",
                      __typename: "Repository",
                    },
                    {
                      name: "figma-tokens-sync",
                      description:
                        "Figma plugin for MyBoard design systems tokens sync",
                      __typename: "Repository",
                    },
                    {
                      name: "mishabalin.github.io",
                      description: null,
                      __typename: "Repository",
                    },
                  ],
                  totalCount: 8,
                  __typename: "RepositoryConnection",
                },
                __typename: "User",
              },
              __typename: "SearchResultItemEdge",
            },
          ],
          __typename: "SearchResultItemConnection",
        },
      })
    );
  }),
  graphql.query("User", (req, res, ctx) => {
    return res(
      ctx.data({
        user: {
          login: "mikhailbalin",
          name: "Misha Balin",
          avatarUrl:
            "https://avatars.githubusercontent.com/u/15248481?u=1670b7469f839a402945b790f3ab1b378b67dce2&v=4",
          repositories: {
            nodes: [
              {
                name: "mikhailbalin.github.io",
                description: "📝 Docs",
                __typename: "Repository",
              },
              {
                name: "snow-fight",
                description: "⛄ Snow Fight Webapp",
                __typename: "Repository",
              },
              {
                name: "mbtools",
                description: "⌨ A CLI to bootstrap my dev tools",
                __typename: "Repository",
              },
              {
                name: "last-palace",
                description: "Web for Last Palace",
                __typename: "Repository",
              },
              {
                name: "rest_17",
                description: "Web for Rest_17",
                __typename: "Repository",
              },
              {
                name: "mikhailbalin",
                description: "👨🏻‍💻 Profile README",
                __typename: "Repository",
              },
              {
                name: "figma-tokens-sync",
                description:
                  "Figma plugin for MyBoard design systems tokens sync",
                __typename: "Repository",
              },
              {
                name: "mishabalin.github.io",
                description: null,
                __typename: "Repository",
              },
            ],
            totalCount: 8,
            __typename: "RepositoryConnection",
          },
          __typename: "User",
        },
      })
    );
  }),
];

export { handlers };
