import Vue from "vue"

import Router from "vue-router"

import HelloWorld from "@/components/HelloWorld"

import ex from "@/components/example"

import table from "@/components/bTable"

import bro from "@/components/first"
import child from "@/components/childprop"
import parent from "@/components/parentprop"
import card from "@/components/b-card"
import list from "@/components/vfor"
import list1 from "@/components/first"
import form from "@/components/bforms"
import second from "@/components/second"
import form1 from "@/components/forms"
import check from "@/components/checkbox"
import card1 from "@/components/bcard1"
import parent1 from "@/components/parent1"
import emit from "@/components/emitParent"
import rest from "@/components/rest"
import const1 from "@/components/const"
import apis from "@/components/apis"
import api from "@/components/api1"
import ap from "@/components/ap1"




Vue.use(Router)

const routes = [

{ path: "/hello", name: "hello", component: HelloWorld},

{ path: "/ex", name: "ex", component: ex},

{
     path: "/btable",
     name: "table",
     component: table
},

{
    path: "/bro",
     name: "bro ",
     component: bro 
},
{
    path: "/card",
     name: "card",
     component:card
},
{
     path: "/st",
      name: "ist",
      component:list
 },
 {
     path: "/list",
      name: "blist",
      component:list1
 },
 {
     path: "/form",
      name: "form",
      component:form
 },
 {
     path: "/sec",
      name: "sec",
      component:second
 },
 {
     path: "/morf",
      name: "fro",
      component:form1
 },
 {
     path: "/check",
      name: "che",
      component:check
 },
 {
     path: "/card1",
      name: "che",
      component:card1
 },
 {
     path: "/child",
      name: "child",
      component:child
 },
 {
     path: "/parent",
     name: "parent",
     component:parent
},
{
    path: "/parent1",
    name: "parent1",
    component:parent1
},
{
    path: "/emit",
    name: "emit",
    component:emit
},
{
    path: "/rest",
    name: "est",
    component:rest
},
{
    path: "/cnst",
    name: "const",
    component:const1
},
{
    path: "/ap",
    name: "ap",
    component:ap
}
]
let router = new Router({ routes })

export default router