import React, { useEffect } from "react";
import { themeChange } from "theme-change";

const ThemeChanger = () => {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <div title="Change Theme" className="dropdown dropdown-end">
      <div tabIndex="0" class="btn gap-1 btn-ghost" data-choose-theme>
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          ></path>
        </svg>
        <span class="hidden md:inline normal-case">Theme</span>
        <svg
          width="12px"
          height="12px"
          class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>

      <div class="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16">
        <div class="grid grid-cols-1 gap-3 p-3" tabindex="0">
          <div
            class="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
            data-set-theme="cupcake"
            data-act-class="outline"
          >
            <div
              data-theme="cupcake"
              class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
            >
              <div class="grid grid-cols-5 grid-rows-3">
                <div class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div class="flex-grow text-sm font-bold">cupcake</div>
                  <div class="flex flex-shrink-0 flex-wrap gap-1">
                    <div class="bg-primary w-2 rounded"></div>
                    <div class="bg-secondary w-2 rounded"></div>
                    <div class="bg-accent w-2 rounded"></div>
                    <div class="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2 outline"
            data-set-theme="pastel"
            data-act-class="outline"
          >
            <div
              data-theme="pastel"
              class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
            >
              <div class="grid grid-cols-5 grid-rows-3">
                <div class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div class="flex-grow text-sm font-bold">pastel</div>
                  <div class="flex flex-shrink-0 flex-wrap gap-1">
                    <div class="bg-primary w-2 rounded"></div>
                    <div class="bg-secondary w-2 rounded"></div>
                    <div class="bg-accent w-2 rounded"></div>
                    <div class="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2 outline"
            data-set-theme="valentine"
            data-act-class="outline"
          >
            <div
              data-theme="valentine"
              class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
            >
              <div class="grid grid-cols-5 grid-rows-3">
                <div class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div class="flex-grow text-sm font-bold">valentine</div>
                  <div class="flex flex-shrink-0 flex-wrap gap-1">
                    <div class="bg-primary w-2 rounded"></div>
                    <div class="bg-secondary w-2 rounded"></div>
                    <div class="bg-accent w-2 rounded"></div>
                    <div class="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
            data-set-theme="retro"
            data-act-class="outline"
          >
            <div
              data-theme="retro"
              class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
            >
              <div class="grid grid-cols-5 grid-rows-3">
                <div class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div class="flex-grow text-sm font-bold">retro</div>
                  <div class="flex flex-shrink-0 flex-wrap gap-1">
                    <div class="bg-primary w-2 rounded"></div>
                    <div class="bg-secondary w-2 rounded"></div>
                    <div class="bg-accent w-2 rounded"></div>
                    <div class="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2 outline"
            data-set-theme="night"
            data-act-class="outline"
          >
            <div
              data-theme="night"
              class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
            >
              <div class="grid grid-cols-5 grid-rows-3">
                <div class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div class="flex-grow text-sm font-bold">night</div>
                  <div class="flex flex-shrink-0 flex-wrap gap-1">
                    <div class="bg-primary w-2 rounded"></div>
                    <div class="bg-secondary w-2 rounded"></div>
                    <div class="bg-accent w-2 rounded"></div>
                    <div class="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2 outline"
            data-set-theme="dracula"
            data-act-class="outline"
          >
            <div
              data-theme="dracula"
              class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
            >
              <div class="grid grid-cols-5 grid-rows-3">
                <div class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div class="flex-grow text-sm font-bold">dracula</div>
                  <div class="flex flex-shrink-0 flex-wrap gap-1">
                    <div class="bg-primary w-2 rounded"></div>
                    <div class="bg-secondary w-2 rounded"></div>
                    <div class="bg-accent w-2 rounded"></div>
                    <div class="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2 outline"
            data-set-theme="synthwave"
            data-act-class="outline"
          >
            <div
              data-theme="synthwave"
              class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
            >
              <div class="grid grid-cols-5 grid-rows-3">
                <div class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div class="flex-grow text-sm font-bold">synthwave</div>
                  <div class="flex flex-shrink-0 flex-wrap gap-1">
                    <div class="bg-primary w-2 rounded"></div>
                    <div class="bg-secondary w-2 rounded"></div>
                    <div class="bg-accent w-2 rounded"></div>
                    <div class="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
            data-set-theme="cyberpunk"
            data-act-class="outline"
          >
            <div
              data-theme="cyberpunk"
              class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
            >
              <div class="grid grid-cols-5 grid-rows-3">
                <div class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div class="flex-grow text-sm font-bold">cyberpunk</div>
                  <div class="flex flex-shrink-0 flex-wrap gap-1">
                    <div class="bg-primary w-2 rounded"></div>
                    <div class="bg-secondary w-2 rounded"></div>
                    <div class="bg-accent w-2 rounded"></div>
                    <div class="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeChanger;