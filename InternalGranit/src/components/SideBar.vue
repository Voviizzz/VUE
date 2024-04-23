<script setup></script>

<template>
  <div
    class="sidebar max-w-80 w-full bg-sidebar font-ruso text-base items-center justify-between py-6 :active={ isActive }"
  >
    <div class="h-screen text-white flex-1">
      <div class="sidebar__header px-7 flex items-center justify-between pb-4">
        <img class="" src="../assets/Logo.svg" alt="" />
        <div class="header__text flex flex-col items-center pl-2">
          <p class="text-gray-200 text-xl">АО РПТП ГРАНИТ</p>
          <span class="text-base">Корпоративный портал</span>
        </div>
        <!-- <div
            class="sidebar__close mr-1 relative h-[50px] w-[27px] inline-block bg-[#D9D9D9] opacity-50 hover:opacity-100 cursor-pointer bg rounded-md shadow-sm transition-all after:content-[''] after:absolute after:right-1 after:top-7 after:opacity-100 after:h-[3px] after:w-[20px] after:rounded after:rotate-90 after:bg-[#ffffff] after:transition-all before:content-[''] before:absolute before:rotate-[-45deg] before:opacity-100 before:right-1 before:top-4 before:h-[3px] before:w-[20px] before:bg-white"
          ></div> -->
      </div>

      <div class="sidebar__menu text-2xl">
        <ul>
          <RouterLink to="/">
            <li
              class="group sidebar__link hover:bg-white hover:cursor-pointer text-center px-7 py-7 text-xl"
            >
              <a class="flex items-center" href="#">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="group-hover:stroke-sidebar"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.98735 21.5V16.0093H14.0531V21.5H21V7.98364L10.8823 1.5L1 7.98364V21.5H7.98735Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                <p class="group-hover:text-sidebar pl-5">Главная</p>
              </a>
            </li>
          </RouterLink>
          <RouterLink to="/ads">
            <li
              class="group sidebar__link hover:bg-white hover:cursor-pointer text-center px-7 py-7 text-xl"
            >
              <a class="flex items-center" href="#">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="group-hover:stroke-sidebar"
                    d="M12.2441 17.0347V13.0347"
                    stroke="#FFFF"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                  <path
                    class="group-hover:stroke-sidebar"
                    d="M12.2401 9.23877H12.2501"
                    stroke="#FFFF"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                  <path
                    class="group-hover:stroke-sidebar"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.5 22.2847V3.78467H3V22.2847H21.5Z"
                    stroke="#FFFF"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                <p class="group-hover:text-sidebar pl-5">Объявления</p>
              </a>
            </li>
          </RouterLink>
          <RouterLink to="/material">
            <li
              class="group sidebar__link hover:bg-white hover:cursor-pointer text-center px-7 py-7 text-xl"
            >
              <a class="flex items-center" href="#">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="group-hover:stroke-sidebar"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.98735 21.5V16.0093H14.0531V21.5H21V7.98364L10.8823 1.5L1 7.98364V21.5H7.98735Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>

                <p class="group-hover:text-sidebar pl-5">Материалы</p>
              </a>
            </li>
          </RouterLink>
          <RouterLink to="/works">
            <li
              class="group sidebar__link hover:bg-white hover:cursor-pointer text-center px-7 py-7"
            >
              <a class="flex items-center" href="#">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="group-hover:stroke-sidebar"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.98735 21.5V16.0093H14.0531V21.5H21V7.98364L10.8823 1.5L1 7.98364V21.5H7.98735Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>

                <p class="group-hover:text-sidebar pl-5">Рабочие сайты</p>
              </a>
            </li>
          </RouterLink>
        </ul>
      </div>
    </div>
  </div>
</template>
