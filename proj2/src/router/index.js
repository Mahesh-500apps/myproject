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
//import apis from "@/components/apis"
//import api from "@/components/api1"
//import ap from "@/components/ap1"
import btable from "../components/assignment-1/8thB"
import fo from "../components/assignment-1/9thF"
import search from "../components/assignment-1/search"

import four from "../components/assignment-1/4th"
import five from "../components/assignment-1/5th"
import ten from "../components/assignment-1/10th"
import six from "../components/assignment-1/6thParent"
import child6 from "../components/assignment-1/child6"
import sec from "../components/21-04-22/2nd"
import seven from "../components/21-04-22/7th"
import each from "../components/21-04-22/foreach"
import map from "../components/21-04-22/map"
import filter from "../components/21-04-22/filter"
import find from "../components/21-04-22/find"
import filter1 from "../components/22-04-22/filter1"
import fell from "../components/22-04-22/filter2"
import promise from "../components/22-04-22/promise"
import prom1 from "../components/22-04-22/prom1"
import AQ1 from "../components/Assignment 25-04-22/AQ1"
import AQ2 from "../components/Assignment 25-04-22/AQ2"
import AQ4 from "../components/Assignment 25-04-22/AQ4"
import AQ5 from "../components/Assignment 25-04-22/AQ5"
import AQ6 from "../components/Assignment 25-04-22/AQ6"
import AQ10 from "@/components/Assignment 25-04-22/AQ10"
import AQ8 from "@/components/Assignment 25-04-22/AQ8"
import AQ7 from "@/components/Assignment 25-04-22/AQ7"
import AQ9 from "@/components/Assignment 25-04-22/AQ9"


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
      name: "chec",
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

//{
    //path:"/a",
    //name:"a",
    //component:apis
//},
//{
    //path:"/aa",
    //name:"aa",
    //component:api
//},

//{
   //path:"/aap",
    //name:"aap",
    //component:ap
//},
{
    path:"/tab",
    name:"tab",
    component:btable
},
{
    path:"/fo",
    name:"fo",
    component:fo
},
{
    path:"/sea",
    name:"search",
    component:search
},

{
    path:"/4",
    name:"four",
    component:four

},
{
    path:"/5",
    name :"five",
    component:five
},
{
    path:"/10",
    name:"ten",
    component:ten
},

{
    path:"/6",
    name:"six",
    component:six

} ,
{
    path:"/66",
    name:"sixty",
    component:child6
},
{
    path:"/secc",
    name:"secc",
    component:sec
},
{
    path:"/7",
    name:"seven",
    component:seven
},
{
    path:"/each",
    name:"each",
    component:each
},
{
    path:"/map",
    name:"map",
    component:map
},
{
    path:"/filter",
    name:"filter",
    component:filter
},{
    path:"/find",
    name:"find",
    component:find
},
{
    path:"/fill",
    name:"fill",
    component:filter1 
},
{
    path:"/file",
    name:"fell",
    component:fell
},
{
    path:"/prom",
    name:"promo",
    component:promise
},
{
    path:"/prom1",
    name:"prom1",
    component:prom1
},
{
    path:"/aq1",
    name:"aq1",
    component:AQ1
},
{
    path:"/aq2",
    name:"aq2",
    component:AQ2
},
{
    path:"/aq4",
    name:"aq4",
    component:AQ4
},
{
    path:"/aq5",
    name:"aq5",
    component:AQ5
},
{
    path:"/aq6",
    name:"aq6",
    component:AQ6
},
{
    path:"/aq10",
    name:"aq10",
    component:AQ10
},
{
    path:"/aq8",
    name:"aq8",
    component:AQ8
},
{
    path:"/aq7",
    name:"aq7",
    component:AQ7
},
{
    path:"/aq9",
    name:"aq9",
    component:AQ9
}



]
let router = new Router({ routes })

export default router