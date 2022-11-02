import { component$, QRL, ValueOrPromise } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface DesktopNavProps {
  onClick$: QRL<() => ValueOrPromise<void>>;
  shouldShow: boolean;
}

export const DesktopNav = component$(
  ({ onClick$, shouldShow }: DesktopNavProps) => {
    return (
      <nav
        class={
          shouldShow
            ? "w-full h-full absolute z-40 transform  translate-x-0 "
            : "w-full h-full absolute z-40 transform -translate-x-full"
        }
      >
        <div
          class="bg-gray-800 opacity-50 inset-0 fixed w-full h-full"
          onClick$={onClick$}
        />
        <div class="w-64 absolute left-0 z-40 top-0 bg-white shadow flex-col justify-between transition duration-150 ease-in-out h-full">
          <div class="flex flex-col justify-between h-full">
            <div class="px-6 pt-4">
              <div class="flex items-center mb-6 justify-between">
                <Link class="flex items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    fill="#7b4bc4"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <p class="font-bold md:text2xl text-base pl-3 text-gray-800">
                    GitHub Integration
                  </p>
                </Link>
                <div id="cross" class=" text-gray-800" onClick$={onClick$}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon cursor-pointer icon-tabler icon-tabler-x "
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </div>
              </div>
              <ul class="f-m-m">
                <li class="text-white pt-8">
                  <Link href="/commits">
                    <div class="flex items-center">
                      <div class="md:w-6 md:h-6 w-5 h-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M7.16667 3H3.83333C3.3731 3 3 3.3731 3 3.83333V7.16667C3 7.6269 3.3731 8 3.83333 8H7.16667C7.6269 8 8 7.6269 8 7.16667V3.83333C8 3.3731 7.6269 3 7.16667 3Z"
                            stroke="#667EEA"
                            strokeWidth={1}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.16667 11.6667H3.83333C3.3731 11.6667 3 12.0398 3 12.5V15.8333C3 16.2936 3.3731 16.6667 3.83333 16.6667H7.16667C7.6269 16.6667 8 16.2936 8 15.8333V12.5C8 12.0398 7.6269 11.6667 7.16667 11.6667Z"
                            stroke="#667EEA"
                            strokeWidth={1}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.1667 11.6667H12.8333C12.3731 11.6667 12 12.0398 12 12.5V15.8334C12 16.2936 12.3731 16.6667 12.8333 16.6667H16.1667C16.6269 16.6667 17 16.2936 17 15.8334V12.5C17 12.0398 16.6269 11.6667 16.1667 11.6667Z"
                            stroke="#667EEA"
                            strokeWidth={1}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.1667 3H12.8333C12.3731 3 12 3.3731 12 3.83333V7.16667C12 7.6269 12.3731 8 12.8333 8H16.1667C16.6269 8 17 7.6269 17 7.16667V3.83333C17 3.3731 16.6269 3 16.1667 3Z"
                            stroke="#667EEA"
                            strokeWidth={1}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p class="text-purple-500 ml-3 text-lg">Commits</p>
                    </div>
                  </Link>
                </li>

                <li class="text-gray-800 pt-8">
                  <Link href="/repositories">
                    <div class="flex items-center">
                      <div class="md:w-6 md:h-6 w-5 h-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M6.66667 13.3333L8.33334 8.33334L13.3333 6.66667L11.6667 11.6667L6.66667 13.3333Z"
                            stroke="currentColor"
                            strokeWidth={1}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                            stroke="currentColor"
                            strokeWidth={1}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span class="text-gray-800 ml-3 text-lg">
                        Repositories
                      </span>
                    </div>
                  </Link>
                </li>
                <li class="text-gray-800 pt-8">
                  <Link href="/branches">
                    <div class="flex items-center">
                      <div class="md:w-6 md:h-6 w-5 h-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M6.66667 13.3333L8.33334 8.33334L13.3333 6.66667L11.6667 11.6667L6.66667 13.3333Z"
                            stroke="currentColor"
                            strokeWidth={1}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                            stroke="currentColor"
                            strokeWidth={1}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span class="text-gray-800 ml-3 text-lg">Branches</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
);
