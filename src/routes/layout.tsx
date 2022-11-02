import { component$, $, Slot, useStore } from "@builder.io/qwik";
import { DesktopNav, Header, MobileNav } from "~/components";

export default component$(() => {
  const store = useStore({
    shouldShow: false,
  });

  const toggleMenuNavbar$ = $(() => {
    store.shouldShow = !store.shouldShow;
  });

  return (
    <>
      <main>
        <div class="bg-gray-200 pb-10">
          <DesktopNav
            onClick$={toggleMenuNavbar$}
            shouldShow={store.shouldShow}
          />

          <MobileNav onClick$={toggleMenuNavbar$} />

          <Header />

          <div class="container px-6 mx-auto">
            <div class="rounded shadow relative bg-white z-10 -mt-8 mb-8 w-full h-full">
              <section>
                <Slot />
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
});
