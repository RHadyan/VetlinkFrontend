<template>
  <div class="flex justify-center flex-grow">
    <div
      class="bg-white overflow-x-auto w-11/12 grid grid-cols-1 rounded-[20px] text-black shadow-[20px_4px_35px_0px_rgba(0,0,0,0.09)] p-6 overflow-hidden mt-4 mb-4"
    >
      <div class="max-h-[600px] overflow-y-auto">
        <div class="w-full overflow-x-auto">
          <table class="table-auto w-full text-center" style="font-size: 16px">
            <thead class="sticky top-0 bg-white">
              <tr class="border-b-2 text-base border-gray-200">
                <th class="px-4 py-2">Nama Klinik</th>
                <th class="px-4 py-2">Domisili</th>
                <th class="px-4 py-2">Kontak</th>
                <th class="px-4 py-2 min-w-[350px]">Alamat</th>
                <th class="px-4 py-2">Jam Operasional</th>
                <th class="px-4 py-2">Status Pendaftaran</th>
                <th class="px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody class="font-light text-xs text-pretty">
              <div v-if="loading">Loading data, please wait...</div>
              <div v-if="error">{{ error }}</div>
              <tr
                v-for="vet in veteriners"
                :key="vet.id"
                class="hover:bg-gray-50 cursor-pointer"
              >
                <td class="border-t px-4 py-4">{{ vet.clinic_name }}</td>
                <td class="border-t px-4 py-4">{{ vet.city }}</td>
                <td class="border-t px-4 py-4">02189914595</td>
                <td class="border-t px-4 py-4">
                  {{ vet.address }}
                </td>
                <td class="border-t px-4 py-4">
                  {{ vet.open_time }} - {{ vet.close_time }}
                </td>
                <td class="border-t px-4 py-4">
                  <div v-if="vet.register_status === 'approved'">
                    <span
                      class="text-[#5AAF51] px-2 py-1 rounded-md text-sm"
                      style="background: rgba(90, 175, 81, 0.2)"
                      >Disetujui</span
                    >
                  </div>
                  <div v-if="vet.register_status === 'pending'">
                    <span
                      class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm"
                      >Menunggu</span
                    >
                  </div>
                  <div v-if="vet.register_status === 'rejected'">
                    <span
                      class="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm"
                      >Ditolak</span
                    >
                  </div>
                </td>
                <td class="border-t px-4 py-4">
                  <button
                    class="text-red-500 hover:text-red-700"
                    @click="open = true"
                  >
                    <svg
                      class="w-7 h-7"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Modal dialog -->
    <TransitionRoot as="template" :show="open">
      <Dialog class="relative z-10" @close="open = false">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div
            class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
              >
                <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div
                      class="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                    >
                      <ExclamationTriangleIcon
                        class="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle
                        as="h3"
                        class="text-base font-semibold text-gray-900"
                        >Hapus Klinik</DialogTitle
                      >
                      <div class="mt-2">
                        <p class="text-sm text-gray-500">
                          Anda yakin akan menghapus klinik ini?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
                >
                  <button
                    type="button"
                    class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    @click="open = false"
                  >
                    Hapus
                  </button>
                  <button
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    @click="open = false"
                    ref="cancelButtonRef"
                  >
                    Batal
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<!-- <script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";

const open = ref(false);
</script> -->
<script>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";

import { useVets } from "@/composable/vets.js";

export default {
  setup() {
    const { veteriners, loading, error } = useVets();

    return {
      veteriners,
      loading,
      error,
    };
  },
};
</script>
