<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="las la-bars"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Menú Agendme
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
        <th colspan="2">
            <div class="row no-wrap items-center">
              <q-img
                src="https://cdn.quasar.dev/img/material.png"
                native-context-menu
                alt="Logo"
                basic
                style="height: 120px;max-width: 120px"
              />

              <q-avatar size="56px" class="q-mb-sm">
                    <img src="https://cdn.quasar.dev/img/avatar.png">
                  </q-avatar>
              <div class="text-h3 q-ml-md"><h5>dssdgdfgfd</h5></div>
              <div class="text-h3 q-ml-md"><h5></h5></div>

              <q-img
                class="absolute-top"
                src="../assets/fondo-general.svg"
                style="height: 150px"
              >
                <div class="absolute-bottom bg-transparent">
                  <q-avatar size="56px" class="q-mb-sm">
                    <img src="https://cdn.quasar.dev/img/avatar.png" />
                  </q-avatar>
                  <div class="text-weight-bold">Dra. Irma Zárraga</div>
                  <div>@ClinicaITC</div>
                </div>
              </q-img>

            </div>
          </th>
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>



    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Mis Citas',
    caption: 'quasar.dev',
    icon: 'las la-calendar-check',
    link: 'Index'
  },
  {
    title: 'Perfiles Adultos',
    caption: 'github.com/quasarframework',
    icon: 'las la-user-tie',
    link: 'Perfil-Adulto'
  },
  {
    title: 'Historias Clinicas',
    caption: 'chat.quasar.dev',
    icon: 'las la-feather-alt',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Perfiles Niños',
    caption: 'forum.quasar.dev',
    icon: 'las la-child',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Prueba Dialogs',
    caption: '@quasarframework',
    icon: 'las la-low-vision',
    link: 'PruebaDialogs'
  },
  {
    title: 'Agregar Historia Clínica',
    caption: 'Nuevos Ingresos',
    icon: 'las la-low-vision',
    link: 'Form'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'las la-low-vision',
    link: 'https://awesome.quasar.dev'
  }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
