import{r as m,O as _,w as c,a as d,b as u,d as a,u as h,Z as p,e as s,f as t,t as f,m as b,z as v,F as B}from"./app-398ad6d1.js";import{_ as w}from"./GoBackNavLink-db60fb6d.js";import{_ as $}from"./DataTable-ddbc77e5.js";import{_ as y}from"./SearchBar-66d02794.js";import{_ as g}from"./FlexButton-28caee34.js";import{_ as S}from"./OrgTabs-aa6d022b.js";import{d as k}from"./index-b35c3beb.js";import{_ as x}from"./Card-915d2e9b.js";import{P as A}from"./PlusIcon-f434a426.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Paginator-85e18341.js";import"./index-7c45f06a.js";const D={class:"py-8"},E={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},N={class:"card-header !mb-4"},O={class:"flex justify-between items-center mb-4 gap-4"},P=["placeholder"],G={__name:"Branches",props:{branches:Object},setup(n){const r=m(""),l=k(()=>{_.visit(route("branches.index",{term:r.value}),{preserveState:!0,preserveScroll:!0})},500);return c(r,l),(e,o)=>(d(),u(B,null,[a(h(p),{title:e.__("Branches")},null,8,["title"]),a(w,null,{tabs:s(()=>[a(S)]),default:s(()=>[t("div",D,[t("div",E,[a(x,{class:"!mt-0"},{default:s(()=>[t("h1",N,f(e.__("Current Branches")),1),t("div",O,[a(g,{href:e.route("branches.create"),text:e.__("Add Branch")},{default:s(()=>[a(A)]),_:1},8,["href","text"]),a(y,null,{default:s(()=>[b(t("input",{type:"text",id:"table-search-users","onUpdate:modelValue":o[0]||(o[0]=i=>r.value=i),class:"input-class",placeholder:e.__("Search for a branch")},null,8,P),[[v,r.value]])]),_:1})]),a($,{controller:"branches",head:[e.__("ID"),e.__("Name"),e.__("Phone"),e.__("Email"),e.__("Address"),e.__("Employees")],data:n.branches,hasActions:!0,hasLink:!0},null,8,["head","data"])]),_:1})])])]),_:1})],64))}};export{G as default};