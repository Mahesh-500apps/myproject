<template>

  <div :class="[isVisible ? 'bg-info' : 'bg-light', 'border', 'p-2', 'text-center']"
      style="overflow-y: scroll;"
    >
<h1>hello</h1>
 <div>
    <p class="mt-2">
      Visible: {{ isVisible }}
    </p>
  </div>
    <b-card no-body>
      <b-nav pills card-header slot="header" v-b-scrollspy:nav-scroller>
        <b-nav-item href="#fat" @click="scrollIntoView">@fat</b-nav-item>
        <b-nav-item href="#mdo" @click="scrollIntoView">@mdo</b-nav-item>
        <b-nav-item-dropdown text="Dropdown 1,2,3" right-alignment>
          <b-dropdown-item href="#one" @click="scrollIntoView">one</b-dropdown-item>
          <b-dropdown-item href="#two" @click="scrollIntoView">two</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item href="#three" @click="scrollIntoView">three</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#pi0" @click="scrollIntoView">@pi0</b-nav-item>
      </b-nav>

      <b-card-body
        id="nav-scroller"
        ref="content"
        style="position:relative; height:300px; overflow-y:scroll;"
      >
        <p>{{ text }}</p>
        <h4 id="fat">@fat</h4>
        <p>{{ text }}</p>
        <h4 id="mdo">@mdo</h4>
        <p>{{ text }}</p>
        <h4 id="one">one</h4>
        <p >{{ text }}</p>
        <h4 id="two">two</h4>
        <b-badge v-b-visible="handleVisibility">Element with v-b-visible directive</b-badge>
        <p>{{ text }}</p>
        <h4 id="three">three</h4>
        <p>{{ text }}</p>
        <h4 id="pi0">@pi0</h4>
        <p>{{ text }}</p>
       
  
  
      </b-card-body>
    </b-card>
    
  </div>
 </template>

<script>
  export default {
    name:"MahI",
    data(){
      return {
        isVisible: false,
        text: `
          vue uses an html based Template syntax that allows you to declaratively bind the rendered
          DOM to the underlyingcomponent instance's data.All vue templatesare syntacticallyvalid Html
          that can be passed by brosers and html passes.
          the most basic
        `
      }
    },
    methods: {
      scrollIntoView(event) {
        event.preventDefault()
        const href = event.target.getAttribute('href')
        const el = href ? document.querySelector(href) : null
        if (el) {
          this.$refs.content.scrollTop = el.offsetTop
        }
      },
      handleVisibility(isVisible) {
        this.isVisible = isVisible
      }
    },
    
  }
</script>