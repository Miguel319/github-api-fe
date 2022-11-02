import { component$, Resource, useResource$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { GitHubRepositoryCard, SkeletonCard } from "~/components";
import { GitHubRequest } from "~/core/api/requests";
import { GitHubRepository } from "~/core/interfaces/models";

export default component$(() => {
  const repositories = useResource$<GitHubRepository[]>(({ cleanup }) => {
    const controller = new AbortController();
    cleanup(() => controller.abort());

    return GitHubRequest.getRepositoriesFromUser(
      "Miguel319",
      controller.signal
    );
  });

  return (
    <div>
      <div>
        <Resource
          value={repositories}
          onPending={() => (
            <>
              <div class="grid p-3 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {Array.from(Array(10).keys()).map(() => (
                  <SkeletonCard />
                ))}
              </div>
            </>
          )}
          onResolved={(repos) => (
            <div class="grid p-3 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {repos?.map((repo) => (
                <GitHubRepositoryCard repository={repo} />
              ))}
            </div>
          )}
        />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Repositories",
};
