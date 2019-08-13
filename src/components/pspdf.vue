<template>
  <div id="psdf">
    <div>
    <input type="file" id="selectPDF" v-on:change="openPDF" accept="application/pdf" />
    <span class="error">{{errorMsg}}</span>
  </div>
  <div class="App-viewer">
    <pdfkit :pdf-url="pdf" :license-key="LICENSE_KEY" :base-url="baseUrl"></pdfkit>
  </div>
  </div>
</template>

<script>
import PSPDFKit from 'pspdfkit'
import Vue from 'vue'
export default {
  name: "pspdf",
   components: { pspdfkit: pspdfkit },
  data: function data() {
    return {
      pdf: 'example.pdf',
      LICENSE_KEY: LICENSE_KEY,
      baseUrl: '',
      errorMsg: '',
    }
  },
 methods: {
    openPDF: function openPDF(e) {
      this.pdf = window.URL.createObjectURL(e.target.files[0])
    }
  },
}
const LICENSE_KEY = 'TRIAL-iNBf5NbSCqUTxy3G3etSB2qCIhZVV4V6oPSWFpV2566rFCqAtOVOJQAl8u_Qd-FZPLsA9ArhuNi5JbFJdF-LVA';
/**
 * PSPDFKit for Web example component
 */
const pspdfkit = Vue.component ('pdfkit', {
  /**
   * PSPDFKit for Web UI container template
   */
  template: '<div class="container"></div>',
  name: 'pdfkit',
  /**
   * The component receives these parameters:
   * @pdfUrl: string - URL of the PDF to be loaded.
   * @licenseKey: string - license key (from the variable set above)
   * @baseUrl: string - URL from which the PSPDFKit library should get its payload and artifacts.
   */
  props: ['pdfUrl', 'licenseKey', 'baseUrl'],
  _instance: null,
  /**
   * We wait until the template has been rendered to load the document into the library.
   */
  mounted: function mounted() {
    this.load()
  },
  /**
   * Our component has these two methods, one to trigger document loading and other to unload and clean up,
   * so the component is ready to load another document.
   */
  methods: {
    load: function load() {
      const that = this;
      PSPDFKit.load({
        pdf: this.pdfUrl,
        container: '.container',
        licenseKey: this.licenseKey,
        baseUrl: this.baseUrl,
      })
        .then(function (instance) {
          that._instance = instance;
          that.$parent.errorMsg = ''
        })
        .catch(function (err) {
          PSPDFKit.unload('.container')
          that.$parent.errorMsg = err.message
        });
    },
    unload: function unload() {
      if (this._instance) {
        PSPDFKit.unload(this._instance || '.container')
        this._instance = null
      }
    }
  },
  /**
   * We watch for pdfUrl prop changes, and trigger unloading and loading when there's a new document to load.
   */
  watch: {
    pdfUrl: function pdfUrl() {
      this.unload()
      this.load()
    }
  },
  /**
   * Clean up when the component is unmounted (not needed in this example).
   */
  beforeDestroy: function beforeDestroy() {
    this.unload()
  }
})
</script>

<style>
body {
  height: 100vh;
}
#pspdf,
.App-viewer,
.container {
  height: 100%;
}
</style>
