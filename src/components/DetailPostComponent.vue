<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div
      class="p-4 flex-col md:flex-row h-10/12 w-11/12 bg-white rounded-lg space-y-2 shadow-md"
    >
      <div class="items-center">
        <button class="hover:bg-opacity-80 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="36"
            viewBox="0 0 91 54"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27 0C12.0883 0 0 12.0883 0 27C0 41.9117 12.0883 54 27 54H64C78.9117 54 91 41.9117 91 27C91 12.0883 78.9117 0 64 0H27ZM26 26.5831C26 25.662 26.3622 24.7786 27.0069 24.1269L39.9892 11.0187C40.6348 10.3667 41.5105 10.0002 42.4237 10C43.3369 9.99978 44.2128 10.3658 44.8587 11.0175C45.5046 11.6693 45.8675 12.5533 45.8678 13.4752C45.868 14.3971 45.5054 15.2814 44.8598 15.9334L37.7535 23.1074H64.2299C65.1431 23.1074 66.0188 23.4736 66.6645 24.1254C67.3102 24.7772 67.6729 25.6613 67.6729 26.5831C67.6729 27.5049 67.3102 28.389 66.6645 29.0409C66.0188 29.6927 65.1431 30.0589 64.2299 30.0589H37.7535L44.8598 37.2328C45.1796 37.5557 45.4333 37.939 45.6064 38.3608C45.7795 38.7826 45.8686 39.2348 45.8686 39.6914C45.8686 40.1479 45.7795 40.6001 45.6064 41.0219C45.4333 41.4437 45.1796 41.827 44.8598 42.1499C44.54 42.4727 44.1603 42.7288 43.7425 42.9036C43.3246 43.0783 42.8768 43.1682 42.4245 43.1682C41.9722 43.1682 41.5244 43.0783 41.1065 42.9036C40.6887 42.7288 40.309 42.4727 39.9892 42.1499L27.0069 29.0393C26.3622 28.3876 26 27.5042 26 26.5831Z"
              class="fill-current text-[#FF004E] group-hover:text-[#B08BBB]"
            />
          </svg>
        </button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4">
        <div
          style="max-width: 550px; max-height: 550px; overflow: hidden"
          class="rounded-xl"
        >
          <img
            src="@/assets/images/cat1.png"
            alt="Post Pict"
            style="width: 100%; height: 100%; object-fit: cover"
          />
        </div>
        <div
          class="space-y-3 overflow-y-scroll no-scrollbar pe-5"
          style="max-height: 550px"
        >
          <div class="flex items-center space-x-2">
            <div
              class="rounded-full"
              style="width: 80px; height: 80px; overflow: hidden"
            >
              <img
                src="@/assets/images/cat1.png"
                alt="Post Pict"
                style="width: 100%; height: 100%; object-fit: cover"
              />
            </div>
            <div>
              <p class="font-bold text-3xl">Ramadhan</p>
            </div>
          </div>
          <div
            class="flex items-center gap-2 bg-white rounded-md pt-2 pb-2 ps-2"
            style="box-shadow: 5px 10px 45px 0px rgba(0, 0, 0, 0.07)"
          >
            <div class="flex space-x-2 items-center">
              <p class="text-[#3FA2F6] text-xl font-medium">Lokasi</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3"
                height="26"
                viewBox="0 0 2 36"
                fill="none"
              >
                <path
                  d="M1 1L1 35"
                  stroke="#3FA2F6"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div>
              <p class="font-regular text-base">Bekasi</p>
            </div>
          </div>
          <div
            class="items-center gap-2 bg-white rounded-md pt-2 pb-2 ps-2"
            style="box-shadow: 5px 10px 45px 0px rgba(0, 0, 0, 0.07)"
          >
            <div class="items-center space-y-1">
              <p class="text-[#3FA2F6] text-xl ps-2 font-medium">Judul</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="67"
                height="3"
                viewBox="0 0 89 4"
                fill="none"
              >
                <path
                  d="M2 2L87 2"
                  stroke="#3FA2F6"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div class="mt-2">
              <p class="font-regular text-base text-pretty">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum odio tortor, rhoncus eget varius vitae, accumsan
                vitae nulla. Sed quis tristique magna.
              </p>
            </div>
          </div>
          <div
            class="items-center gap-2 bg-white rounded-md pt-2 pb-2 ps-2"
            style="box-shadow: 5px 10px 45px 0px rgba(0, 0, 0, 0.07)"
          >
            <div class="items-center space-y-1">
              <p class="text-[#3FA2F6] text-xl ps-2 font-medium">
                Terakhir Terlihat
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="167"
                height="3"
                viewBox="0 0 205 3"
                fill="none"
              >
                <path
                  d="M2 2L203 1.99998"
                  stroke="#3FA2F6"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div class="mt-2">
              <p class="font-regular text-base text-pretty">Depan gerbang UI</p>
            </div>
          </div>
          <div
            class="items-center gap-2 bg-white rounded-md pt-2 pb-2 ps-2"
            style="box-shadow: 5px 10px 45px 0px rgba(0, 0, 0, 0.07)"
          >
            <div class="items-center space-y-1">
              <p class="text-[#3FA2F6] text-xl ps-2 font-medium">Ciri-ciri</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="3"
                viewBox="0 0 205 3"
                fill="none"
              >
                <path
                  d="M2 2L203 1.99998"
                  stroke="#3FA2F6"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div class="mt-2">
              <p class="font-regular text-base text-pretty">
                Orange putih, mata hitam kuning, pecicilan
              </p>
            </div>
          </div>
          <div
            class="items-center gap-2 bg-white rounded-md pt-2 pb-2 ps-2"
            style="box-shadow: 5px 10px 45px 0px rgba(0, 0, 0, 0.07)"
          >
            <div class="items-center space-y-1">
              <p class="text-[#3FA2F6] text-xl ps-2 font-medium">Deskripsi</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="107"
                height="3"
                viewBox="0 0 205 3"
                fill="none"
              >
                <path
                  d="M2 2L203 1.99998"
                  stroke="#3FA2F6"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div
              class="mt-2 overflow-y-scroll no-scrollbar"
              style="max-height: 200px"
            >
              <p class="font-regular text-base text-pretty">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum odio tortor, rhoncus eget varius vitae, accumsan
                vitae nulla. Sed quis tristique magna. Phasellus mattis pulvinar
                nibh. Quisque laoreet, velit et ornare egestas, massa magna
                fringilla est, eget fringilla lacus nunc sed metus. Sed aliquet
                non sapien at scelerisque. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam eget sem sed lorem
                elementum dapibus. In eu quam pretium, facilisis risus non,
                lobortis odio. Duis vitae porta sem. Duis at turpis varius eros
                semper rutrum sed vel risus. Donec ut mauris ante. Donec sit
                amet placerat sem, ut molestie elit. Etiam vehicula lacus sit
                amet eros luctus finibus. Integer eros erat, euismod ut dui ut,
                aliquam luctus eros. Praesent posuere tincidunt est ac
                tincidunt. Aliquam euismod bibendum volutpat. Quisque porta
                lorem et odio condimentum varius. Sed luctus sagittis varius. Ut
                consequat lacinia orci, sit amet imperdiet nibh commodo id.
                Vestibulum eu volutpat dolor, id ullamcorper diam. Sed at
                malesuada magna. Nam consequat vestibulum sem a blandit. Sed at
                purus eget sem cursus ullamcorper. Ut ullamcorper libero non
                aliquet aliquet. Nullam in semper nisi. Sed suscipit porta elit,
                at mattis nulla maximus nec. Curabitur rhoncus faucibus magna,
                eu semper mi rutrum ac. Mauris quis velit dolor. Maecenas et
                enim in nisi laoreet gravida. Fusce malesuada sollicitudin
                tristique. Nam nec orci orci. Maecenas suscipit ex ante. Aenean
                aliquam vulputate sem sed tempus. Duis ultricies vel ante vitae
                vestibulum. Quisque scelerisque aliquet sapien, in efficitur dui
                imperdiet at. Cras mollis feugiat libero ac volutpat. Sed ut
                tempor nisl. Vivamus pharetra vitae tellus eu facilisis. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                tellus mauris, luctus iaculis felis quis, porttitor volutpat
                urna. Duis metus neque, imperdiet ut quam dapibus, auctor
                faucibus lacus. Phasellus venenatis metus lorem, quis interdum
                ipsum mattis et. Cras vulputate lacus magna, quis congue ipsum
                sodales et. Pellentesque id ornare mauris, quis hendrerit dui.
                Nam id magna imperdiet, sagittis leo eget, sagittis enim. Donec
                leo mauris, varius et lacus vel, laoreet placerat libero.
                Pellentesque semper enim ut neque tincidunt euismod. Quisque
                maximus ante lectus, eu hendrerit urna bibendum ac. Donec
                interdum velit a est fringilla, egestas ultrices nisi euismod.
                Proin suscipit libero nec elit imperdiet, eget consequat ex
                congue. Curabitur vel nisl quis nunc ornare condimentum vel
                vitae nisi. Proin dignissim, lectus ac congue pulvinar, odio
                nisl lobortis sem, nec condimentum tortor sem non tortor. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Aliquam ligula tortor, euismod vel ipsum
                sit amet, lacinia sagittis lorem. Maecenas ullamcorper arcu eu
                commodo dapibus. Ut elementum est eu orci hendrerit auctor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
