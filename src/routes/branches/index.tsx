import { component$, Resource, useResource$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { GitHubRequest } from "~/core/api/requests";
import { GitHubBranch } from "~/core/interfaces/models";

export default component$(() => {
  const branches = useResource$<GitHubBranch[]>(({ cleanup }) => {
    const controller = new AbortController();
    cleanup(() => controller.abort());

    return GitHubRequest.getBranchesFromRepository(
      "Miguel319",
      "github-api",
      controller.signal
    );
  });

  return (
    <div>
      <div class="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
        <table class="min-w-full divide-y divide-gray-200 text-sm">
          <thead class="bg-gray-100">
            <tr>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div class="flex items-center gap-2">Name</div>
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div class="flex items-center gap-2">Protected</div>
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Commit Pointer
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            <Resource
              value={branches}
              onResolved={(data) => (
                <>
                  {data.map((v) => (
                    <tr>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        {v.name}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2">
                        <strong class="rounded bg-red-100 px-3 py-1.5 text-xs font-medium ">
                          <span
                            class={`${
                              v.protected ? "text-green-700" : "text-red-700"
                            }`}
                          >
                            {v.protected ? "Yes" : "No"}
                          </span>
                        </strong>
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {v.commit}
                      </td>
                    </tr>
                  ))}
                </>
              )}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Branches",
};
