<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Conocer a detalle cada una de las funciones que debe desarrollar el intérprete y el intérprete de apoyo, así como las técnicas de verificación facilita darle valor al proceso y establecer estrategias de mejoramiento que permitan prestar un servicio de calidad que responda de manera coherente con los requerimientos del cliente, tener claras las responsabilidades que se deben ejecutar, los conocimientos, actitudes y aptitudes que debe poseer el intérprete es precisamente el objetivo de este componente formativo.

    p.mb-5 Una breve revisión de los temas vistos, se encuentran en el siguiente esquema:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Sintesis")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
