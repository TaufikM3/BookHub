<template>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = true"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="Profile"
          nav
        >
          <template v-slot:append>
            <v-btn
              icon="mdi-chevron-left"
              variant="text"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city"  value="/"></v-list-item>
          <v-list-item prepend-icon="mdi-account"  value="/Buku"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline"  value="Kategori"></v-list-item>
          <v-list-item prepend-icon="mdi-account"  value="Pengguna"></v-list-item>
          <v-list-item prepend-icon="mdi-account" value="Pesanan"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        rail: true,
      }
    },
  }
</script>