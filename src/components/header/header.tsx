import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { GitHubRequest } from "~/core/api/requests";
import { GitHubUser } from "~/core/interfaces/models";
import { HeaderData } from "./header-data";

export const Header = component$(() => {
  const userData = useResource$<GitHubUser>(({ cleanup }) => {
    const controller = new AbortController();
    cleanup(() => controller.abort());

    return GitHubRequest.getUserInfo("Miguel319", controller.signal);
  });

  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/" && (
        <div class="bg-gray-800 pt-8 pb-16 relative z-10">
          <div class="container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <Resource
              value={userData}
              onPending={() => <HeaderData />}
              onResolved={(data) => <HeaderData userData={data} />}
            />
          </div>
        </div>
      )}
    </>
  );
});
