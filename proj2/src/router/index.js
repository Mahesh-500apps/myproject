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
import AQ21 from "@/components/assignment 26-04-22/AQ21"
import AQ22 from "@/components/assignment 26-04-22/AQ22"
import AQ23 from "@/components/assignment 26-04-22/AQ23"
import AQ24 from "@/components/assignment 26-04-22/AQ24"
import AQ25 from "@/components/assignment 26-04-22/AQ25"
import AQ26 from "@/components/assignment 26-04-22/AQ26"
import AQ31 from "@/components/27-04-22/AQ31"
import AQ32 from "@/components/27-04-22/AQ32"
import AQ33 from "@/components/27-04-22/AQ33"
import AQ34 from "@/components/27-04-22/AQ34"
import AQ35 from "@/components/27-04-22/AQ35"
import spin from "@/components/Assignment 28-04-22/spin"
import page from "@/components/Assignment 28-04-22/page"
import AQ41 from "@/components/Assignment 28-04-22/AQ41"
import AQ42 from "@/components/Assignment 28-04-22/AQ42"
import AQ45 from "@/components/assignment-1/AQ45"
import alert from "@/components/29-04-22/alert"
//import scrap from "@/components/29-04-22/scrap"
import abc from "@/components/29-04-22/abc"
//import eighth from "@/components/asssignment7/eighth"
import third from "@/components/asssignment7/third"
import fifth from "@/components/asssignment7/fifth"
import scrap from "@/components/3-may-2022/web"
import crud from "@/components/3-may-2022/crud"
import filterr from "@/components/3-may-2022/filterrr"
import promis from "@/components/3-may-2022/promis"
import crudop from "@/components/04-may-2022/crudop"
import methods from "@/components/05-may-2022/methos"
import computed from "@/components/05-may-2022/computed"
import scroll from "@/components/05-may-2022/scrollspy"
import scrcs from "@/components/05-may-2022/scrcs"
import srsrs from "@/components/05-may-2022/2501"
import comprop from "@/components/6-MAY-2022/comprop1"
import covsme from "@/components/6-MAY-2022/covsme"
import tabs from "@/components/6-MAY-2022/tabs"
import kmm from "@/components/6-MAY-2022/kmm"
import tafob from "@/components/6-MAY-2022/tafob"
import disn from "@/components/6-MAY-2022/disn"
import color from "@/components/6-MAY-2022/color"
import vif from "@/components/6-MAY-2022/vif"
import colla from "@/components/6-MAY-2022/collaform"
import popro from "@/components/6-MAY-2022/poprop"
import bus1 from "@/components/7th -may-2020/bus1"
import bus2 from "@/components/7th -may-2020/bus2"
import proo from "@/components/9-may-2022/proo1"
import pagetab from "@/components/9-may-2022/pagetab"
import tatab from "@/components/9-may-2022/tabtable"
import actab from "@/components/9-may-2022/accotable"
import coll from "@/components/9-may-2022/coll"
import ppt  from "@/components/9-may-2022/pptab"
import ccc from "@/components/9-may-2022/ccc"
import pizza from "@/components/9-may-2022/pizza"
import ass1 from "@/components/10-may-2022/ass1"
import lower from "@/components/10-may-2022/lower"
import table2 from "@/components/10-may-2022/table10"
import compare from "@/components/11-may-2022/compare"
import alert5 from "@/components/11-may-2022/alert"
import lc from "@/components/11-may-2022/lifecycle"
import twow from "@/components/11-may-2022/twoway"
import listredn from "@/components/11-may-2022/listredn"
import parent21 from "@/components/11-may-2022/parent21"
import refs from "@/components/12-may-2022/refs"
import avatar from "@/components/12-may-2022/avatar"
import emit22 from "@/components/12-may-2022/emit22"
import emit12 from "@/components/12-may-2022/emit12"
import table11 from "@/components/10-may-2022/table11"
import emit13 from "@/components/13-may-2022/emi13"
import props12 from "@/components/16-may-2022/props12"
import unique from "@/components/13-may-2022/unique"
import form123 from "@/components/16-may-2022/form123"



//import phone from "@/components/9-may-2022/phone"
Vue.use(Router)

const routes = [

    {path:"/pop",name:"pop",component:popro},   
     {path:"/twow",name:"twow ",component:twow},
     {path:"listredn",name:"lire",component:listredn},
     {path:"/999",name:"324",component:parent21},
     {path:"/998",name:"325",component:refs},
     {path:"/997",name:"326",component:emit22},
     {path:"/996",name:"327",component:avatar},
     {path:"/995",name:"328",component:emit13},
     {path:"/954",name:"327",component:unique},
     {path:"/props12",name:"props12",component:props12},
     {path:"/form123",name:"form123",component:form123},

    {path:"/alert3",name:"alert3",component:alert5},
    {path:"/compare",name:"compare",component:compare},
    {path:"/ass1",name:"ass1",component:ass1},
    {path:"/paget",name:"paget",component:pagetab},
    {path:"/tatab",name:"tatab",component:tatab},
    {path:"/actab",name:"actab",component:actab},
    {path:"/lower",name:"lower",component:lower},
    {path:"/coll",name:"coll",component:coll},
    {path:"/ppt",name:"ppt",component:ppt},
    {path:"/ccc",name:"ccc",component:ccc},
    {path:"/pizza",name:"pizza",component:pizza},
{path:"/table2",name:"table2",component:table2},
{path:"/lc",name:"lc",component:lc},
{path:"/888",name:"99",component:emit12},
{path:"/10",name:"10",component:table11},

    {path:"/proo",name:"proo",component:proo},
    {path:"/bus1",name:"bus1",component:bus1},
    {path:"/bus2",name:"bus2",component:bus2},
    {path:"/comprop",name:"comprop",component:comprop},
    {path:"/come",name:"come",component:methods},
    {path:"/321",name:"321",component:scroll},
    {path:"/123",name:"123",component:scrcs},
    {path:"/tab",name:"tab",component:tabs},
    {path:"/2501",name:"2501",component:srsrs},
    {path:"/covsme",name:"covsme",component:covsme},
    {path:"/cameo",name:"cameo",component:computed},
    { path: "/third", name: "third", component: third},
    {path:"/fifth",name :"fifth",component:fifth},
    {path:"/scrap",name:"scrap",component:scrap},
    {path:"/crud",name:"crud",component:crud},
    {path:"/crudop",name:"crudop",component:crudop},
    {path:"/filterr",name:"filterr",component:filterr},
    {path:"/promis",name:"promis",component:promis},
{ path: "/hello", name: "hello", component: HelloWorld},
{path :"/alert", name:"alert",component:alert},
{ path: "/ex", name: "ex", component: ex},
{ path:"/aq42",name:"aq42",component:AQ42},
{path:"/aq45",name:"aq45",component:AQ45},
// {path:"/scrap",name:"scrap",component:scrap},
{path:"/abc",name:"abc",component:abc},
//{path:"/eighth",name:"eighth",component:eighth},
{path:"/tafob",name:"tafob",component:tafob},
{path:"/disn",name:"disn",component:disn},
{path:"/vif",name:"vif",component:vif},
{path:"/colla",name:"colla",component:colla},
{path:"/kmm",name:"kmm",component:kmm},
{path:"/color",name:"color",component:color},


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
    path:"/tab153",
    name:"tab123",
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
},
{
    path:"/aq21",
    name:"aq21",
    component:AQ21
},
{
    path:"/aq22",
    name:"aq22",
    component:AQ22
},
{
    path:"/aq24",
    name:"aq24",
    component:AQ24
},
{
    path:"/aq23",
    name:"aq23",
    component:AQ23
},
{
    path:"/aq25",
    name:"aq25",
    component:AQ25
},
{
    path:"/aq26",
    name:"aq26",
    component:AQ26
},
{
    path:"/aq31",
    name:"aq31",
    component:AQ31

},
{
    path:"/aq32",
    name:"aq32",
    component:AQ32
},
{
    path:"/aq33",
    name:"aq33",
    component:AQ33
},
{
    path:"/aq34",
    name:"aq34",
    component:AQ34
},
{
    path:"/aq35",
    name:"aq35",
    component:AQ35
},
{
    path:"/spin",
    name:"spin",
    component:spin
},
{
    path:"/page",
    name:"page",
    component:page
},
{
    path:"/aq41",
    name:"aq41",
    component:AQ41
}



]
let router = new Router({ routes })

export default router