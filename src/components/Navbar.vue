<template>
  <div>
    <b-navbar toggleable="lg" type="primary" variant="info">
      <b-navbar-brand href="/">Inicio</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/search">Buscar</b-nav-item>
          <b-nav-item href="/delete">Eliminar</b-nav-item>
          <b-nav-item href="/edit">Editar</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  }
}
</script>