import { component$ } from "@builder.io/qwik";
import { GitHubRepository } from "~/core/interfaces/models";

interface GitHubRepositoryCardProps {
  repository: GitHubRepository;
}

export const GitHubRepositoryCard = component$(
  ({ repository }: GitHubRepositoryCardProps) => {
    return (
      <div class="relative block overflow-hidden  rounded-lg border border-double border-gray-200 border-opacity-1 p-8">
        <span class="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"></span>

        <div class="justify-between sm:flex">
          <div>
            <h3 class="text-lg font-bold text-gray-900 font-mono ">
              {repository.name}
            </h3>

            <p class="mt-1 text-xs font-medium text-gray-600">
              {repository.description}
            </p>
          </div>
        </div>

        <dl class="mt-6 flex justify-between">
          <div class="flex flex-col-reverse">
            <dt class="text-sm font-medium text-gray-600">
              {repository.visibility}
            </dt>
            <dd class="text-xs text-gray-500">Visibility</dd>
          </div>
          <div class="flex flex-col-reverse">
            <dt class="text-sm font-medium text-gray-600">
              {new Date(repository.createdAt).toDateString()}
            </dt>
            <dd class="text-xs text-gray-500">Created At</dd>
          </div>
        </dl>
      </div>
    );
  }
);
