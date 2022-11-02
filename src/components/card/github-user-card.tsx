import { component$ } from "@builder.io/qwik";
import { GitHubUser } from "~/core/interfaces/models";

interface GitHubUserCardProps {
  user: GitHubUser;
}

export const GitHubUserCard = component$(({ user }: GitHubUserCardProps) => {
  return (
    <div class="w-full  py-10">
      <div class="container mx-auto px-6 flex items-start justify-center">
        <div class="w-full">
          <div class="flex flex-col lg:flex-row mx-auto bg-white dark:bg-gray-800 shadow rounded">
            <div class="w-full lg:w-1/3 px-12 flex flex-col items-center py-10">
              <div class="w-24 h-24 mb-3 p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <img
                  class="w-full h-full overflow-hidden object-cover rounded-full"
                  src={user.avatar}
                  alt="avatar"
                />
              </div>
              <h2 class="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-medium mb-1">
                {user.name}
              </h2>
              <p class="flex text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-3 text-center">
                <span class="cursor-pointer mr-1 text-gray-600 dark:text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-map-pin"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={12} cy={11} r={3} />
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                  </svg>
                </span>
                {user.location}
              </p>
              <p class="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center w-10/12">
                {user.type} - {user.username}
              </p>
              <div class="flex items-start">
                <div>
                  <h2 class="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                    {user.publicRepositories}
                  </h2>
                  <p class="text-gray-800 text-center dark:text-gray-100 text-sm leading-5">
                    Public Repos
                  </p>
                </div>
                <div class="mx-6 lg:mx-3 xl:mx-6 px-8 lg:px-4 xl:px-8 border-l border-r">
                  <h2 class="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                    {user.privateRepositories}
                  </h2>
                  <p class="text-gray-800 text-center dark:text-gray-100 text-sm leading-5">
                    Private Repos
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/3 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-300 flex flex-col items-center py-10">
              <div class="mb-3 w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer text-indigo-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-stack"
                  width={48}
                  height={48}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="12 4 4 8 12 12 20 8 12 4" />
                  <polyline points="4 12 12 16 20 12" />
                  <polyline points="4 16 12 20 20 16" />
                </svg>
              </div>
              <h2 class="text-gray-800 dark:text-gray-100 text-xl tracking-normal text-center font-medium mb-1">
                Full Stack Developer
              </h2>
              <p class="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center w-10/12">
                {user.description}
              </p>
              <div class="flex items-start">
                <div class="bg-gray-200 text-gray-600 cursor-pointer hover:bg-purple-600 hover:text-white dark:text-gray-100 dark:bg-gray-700 rounded text-xs leading-3 py-2 px-3">
                  NestJS
                </div>
                <div class="bg-gray-200 text-gray-600 cursor-pointer hover:bg-purple-600 hover:text-white dark:text-gray-100 dark:bg-gray-700 rounded mx-2 text-xs leading-3 py-2 px-3">
                  Qwik
                </div>
                <div class="bg-gray-200 text-gray-600 cursor-pointer hover:bg-purple-600 hover:text-white dark:text-gray-100 dark:bg-gray-700 rounded text-xs leading-3 py-2 px-3">
                  TypeScript
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/3 flex-col flex justify-center items-center px-12 py-8">
              <h2 class="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                {user.followers}
              </h2>
              <h2 class="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                Followers
              </h2>
              <h2 class="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                {user.following}
              </h2>
              <h2 class="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                Following
              </h2>
              <h2 class="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                {user.publicGists}
              </h2>
              <h2 class="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                Public Gists
              </h2>
              <h2 class="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                {new Date(user.memberSince).toDateString()}
              </h2>
              <h2 class="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                Member since
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
