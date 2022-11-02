import { component$ } from "@builder.io/qwik";
import { GitHubCommit } from "~/core/interfaces/models";

interface GitHubCommitCardProps {
  commit: GitHubCommit;
}

export const GitHubCommitCard = component$(({ commit }: GitHubCommitCardProps) => {
  return (
    <div class="relative block overflow-hidden  rounded-lg border border-double border-gray-200 border-opacity-1 p-8">
      <span class="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"></span>

      <div class="justify-between sm:flex">
        <div>
          <h3 class="text-lg font-bold text-gray-900 font-mono ">
            {commit.message}
          </h3>

          <p class="mt-1 text-xs font-medium text-gray-600">
            By {commit.committedBy.name}
          </p>
        </div>
      </div>

      <dl class="mt-6 flex">
        <div class="flex flex-col-reverse">
          <dt class="text-sm font-medium text-gray-600">
            {new Date(commit.createdAt).toDateString()}
          </dt>
          <dd class="text-xs text-gray-500">Committed on</dd>
        </div>
      </dl>
    </div>
  );
});
