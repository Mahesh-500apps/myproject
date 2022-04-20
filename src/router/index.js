import Vue from 'vue'

import Router from 'vue-router'

import demo from '../components/demo'



Vue.use(Router)

const routes = [



    {

        path: '/hi',

        name: "btable",

        component: demo

    }

]

let router = new Router({ routes })

export default router



