import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import { GitHubCommitCard, SkeletonCard } from "~/components";
import { GitHubRequest } from "~/core/api/requests";
import { GitHubCommit } from "~/core/interfaces/models";

export const onGet: RequestHandler<GitHubCommit[]> = async () => {
  return GitHubRequest.getCommitsFromRepository("Miguel319", "NgSpotify");
};

export default component$(() => {
  const commits = useResource$<GitHubCommit[]>(({ cleanup }) => {
    const controller = new AbortController();
    cleanup(() => controller.abort());

    return GitHubRequest.getCommitsFromRepository(
      "Miguel319",
      "github-api",
      controller.signal
    );
  });

  return (
    <Resource
      value={commits}
      onPending={() => (
        <>
          <div class="grid p-3 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {Array.from(Array(10).keys()).map(() => (
              <SkeletonCard />
            ))}
          </div>
        </>
      )}
      onResolved={(commit) => (
        <div class="grid p-3 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {commit?.map((v) => (
            <GitHubCommitCard key={v.nodeId} commit={v} />
          ))}
        </div>
      )}
    />
  );
});

export const head: DocumentHead = {
  title: "Commits",
};
