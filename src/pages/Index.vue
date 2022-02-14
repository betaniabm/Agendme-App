<template>
  <div class="q-pa-md">
    <div class="col-md-12">
      <q-card
      class="my-card-tow text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%); border-radius: 0px 0px 100px 0px;"
      >
        <q-img
          class="absolute-full"
          :height="150"
          style="height: 200px bg-image"
        ></q-img>

        <q-card-section>
          <div class="text-h4">Bëtac</div>
          <div class="text-subtitle1">Una nueva forma de diseñar.</div>
        </q-card-section>

        <q-card-section>
          <q-img
          style="max-width: 40%; position: absolute; bottom: 50px;
          right: 50px;"
          src="../assets/frontend-logo.svg" />
        </q-card-section>


    </q-card>
    </div>

  </div>

  <div class="q-pa-md row items-start q-gutter-md flex">
    <q-card class="my-card">
      <q-img class="img-profile" style="border-radius: 0px 0px 200px" src="../assets/imagen-profile.jpg" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            Betania Castillo
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            250 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          Diseñadora UI/UX
        </div>
        <div class="text-caption text-grey">
          Diseñadora con más 7 años de experiencia en Interfaz y Experiencia de usuario. UI/UX web, mobile, apps.
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card>

<q-section>
    <q-item clickable v-ripple class="bg-grey-2 q-pa-md">
        <q-item-section avatar>
          <q-avatar rounded>
            <q-icon name="lab la-html5" size="40px"/>
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <div class="text-h4">Mis Skills</div>
            <q-item-label caption>
              <q-badge color="yellow-6" text-color="black">
                3
                <q-icon
                  name="warning"
                  size="14px"
                  class="q-ml-xs"
                />
              </q-badge>
            </q-item-label>
        </q-item-section>

        <q-item-section side>
          <span>2 min ago</span>
        </q-item-section>
      </q-item>

<q-space />

    <q-item clickable v-ripple class="bg-grey-2 q-pa-md">
        <q-item-section avatar>
          <q-avatar rounded>
            <q-icon name="lab la-html5" size="40px"/>
          </q-avatar>
        </q-item-section>

        <q-item-section>
            <q-item-label>
              HTML
            </q-item-label>
            <q-item-label caption>
              <q-badge color="yellow-6" text-color="black">
                3
                <q-icon
                  name="warning"
                  size="14px"
                  class="q-ml-xs"
                />
              </q-badge>
            </q-item-label>
        </q-item-section>

        <q-item-section side>
          <span>2 min ago</span>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple class="bg-grey-2 q-pa-md">
      <q-item-section avatar>
        <q-avatar rounded>
          <q-icon name="lab la-css3" size="40px"/>
        </q-avatar>
      </q-item-section>

      <q-item-section>
          <q-item-label>
            CSS
          </q-item-label>
          <q-item-label caption>
            <q-badge color="yellow-6" text-color="black">
              3
              <q-icon
                name="warning"
                size="14px"
                class="q-ml-xs"
              />
            </q-badge>
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <span>2 min ago</span>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple class="bg-grey-2 q-pa-md">
        <q-item-section avatar>
          <q-avatar rounded>
            <q-icon name="lab la-js" size="40px"/>
          </q-avatar>
        </q-item-section>

        <q-item-section>
            <q-item-label>
              Javascript
            </q-item-label>
            <q-item-label caption>
              <q-badge color="yellow-6" text-color="black">
                3
                <q-icon
                  name="warning"
                  size="14px"
                  class="q-ml-xs"
                />
              </q-badge>
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <span>2 min ago</span>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="bg-grey-2 q-pa-md">
        <q-item-section avatar>
          <q-avatar rounded>
            <q-icon name="lab la-vuejs" size="40px"/>
          </q-avatar>
        </q-item-section>

        <q-item-section>
            <q-item-label>
              VueJS
            </q-item-label>
            <q-item-label caption>
              <q-badge color="yellow-6" text-color="black">
                3
                <q-icon
                  name="warning"
                  size="14px"
                  class="q-ml-xs"
                />
              </q-badge>
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <span>2 min ago</span>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple class="bg-grey-2 q-pa-md">
        <q-item-section avatar>
          <q-avatar rounded>
            <q-icon name="lab la-bootstrap" size="40px"/>
          </q-avatar>
        </q-item-section>

        <q-item-section>
            <q-item-label>
              Bootstrap CAMBIO xxx
            </q-item-label>
            <q-item-label caption>
              <q-badge color="yellow-6" text-color="black">
                3
                <q-icon
                  name="warning"
                  size="14px"
                  class="q-ml-xs"
                />
              </q-badge>
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <span>2 min ago</span>
          </q-item-section>
        </q-item>
  </q-section>

    </div>

</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      stars: ref(4),
      slide: ref('style'),
      loremdos: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px

.my-card-tow
  width: 100%
  max-width: 1000%
</style>

