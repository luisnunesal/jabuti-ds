"use strict";var f=Object.create;var l=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var p=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var i=(o,e)=>l(o,"name",{value:e,configurable:!0});var B=(o,e)=>{for(var a in e)l(o,a,{get:e[a],enumerable:!0})},m=(o,e,a,d)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of y(e))!x.call(o,n)&&n!==a&&l(o,n,{get:()=>e[n],enumerable:!(d=h(e,n))||d.enumerable});return o};var s=(o,e,a)=>(a=o!=null?f(p(o)):{},m(e||!o||!o.__esModule?l(a,"default",{value:o,enumerable:!0}):a,o)),k=o=>m(l({},"__esModule",{value:!0}),o);var P={};B(P,{Box:()=>c,Button:()=>g});module.exports=k(P);var u=s(require("styled-components")),c=u.default.div.attrs(o=>({as:o.as}))`
    ${o=>o.display&&`display: ${o.display}`};
    ${o=>o.flexDirection&&`flex-direction: ${o.flexDirection}`};
    ${o=>o.justifyContent&&`justify-content: ${o.justifyContent}`};
    ${o=>o.alignItems&&`align-items: ${o.alignItems}`};
    ${o=>o.width&&`width: ${o.width}`};
    ${o=>o.maxWidth&&`max-width: ${o.maxWidth}`};
    ${o=>o.height&&`height: ${o.height}`};
    ${o=>o.gap&&`gap: ${o.gap}`};
    ${o=>o.bg&&`background-color: ${o.bg}`};
    ${o=>o.padding&&`padding: ${o.padding}`};
    ${o=>o.margin&&`margin: ${o.margin}`};
    ${o=>o.gridTemplateColumns&&`display: ${o.gridTemplateColumns}`};
`;var b=s(require("react"));var t=s(require("styled-components"));var r={colors:{baseDark:"#26292E",baseLight:"#FCFCFC",baseLightHover:"#F5F5F5",deepDark:"#000",deepLight:"#FFF",main:"#003750",complementary:"#F6BA20",information:"#3399FF",success:"#2CB567",danger:"#E12712",warning:"#FFBB00",primary:"#32AFDC",secondary:"#2D81AA",tertiary:"#2CE571",disabled:"#b8b8b8"}};var v=i(({size:o})=>{switch(o){case"small":return t.css`
            height: 3.2rem;
            padding: 0 1.2rem;
        `;case"normal":return t.css`
            height: 4.4rem;
            padding: 0 1.2rem;
        `;case"large":return t.css`
            height: 5.6rem;
            width: 100%;
        `;default:return t.css`
            height: 4.4rem;
            padding: 0 1.2rem;
        `}},"buttonSize"),C=i(()=>t.css`
  color: ${r.colors.baseLight};
  background: ${r.colors.primary};
  border-color: ${r.colors.primary};

  &:hover {
    color: ${r.colors.baseLightHover};
    background: ${r.colors.primary};
    border-color: ${r.colors.baseLight};
  }

  &:focus {
    color: ${r.colors.baseLightHover};
    background: ${r.colors.primary};
    border-color: ${r.colors.baseLight};

    &:hover {
      border-color: ${r.colors.baseLightHover};
    }
  }

  &:active {
    &,
    &:hover,
    &:focus {
        color: ${r.colors.baseLightHover};
        background: ${r.colors.primary};
        border-color: ${r.colors.baseLight};
    }
  }

  &:disabled {
    background: ${r.colors.disabled};
    border-color: ${r.colors.disabled};
    color: ${r.colors.baseDark};
    cursor: default;
  }
`,"ButtonContained"),F=i(()=>t.css`
  background: transparent;
  color: ${r.colors.primary};
  border-color: ${r.colors.primary};

  &:hover {
    color: ${r.colors.baseLight};
    background: ${r.colors.primary};
    border-color: ${r.colors.primary};
  }

  &:focus {
    color: ${r.colors.baseLight};
    background: ${r.colors.primary};
    border-color: ${r.colors.primary};

    &:hover {
        border-color: ${r.colors.primary};
    }
  }

  &:active {
    &,
    &:hover,
    &:focus {
      background-color: transparent;
      color: ${r.colors.baseLight};
      border-color: ${r.colors.primary};
    }
  }

  &:disabled {
    background: ${r.colors.disabled};
    border-color: ${r.colors.disabled};
    color: ${r.colors.baseDark};
    cursor: default;
  }
`,"ButtonOutlined"),L=i(()=>t.css`
  background: transparent;
  color: ${r.colors.baseDark};
  border-color: transparent;
  border-radius: none;

  &:hover {
    color: ${r.colors.primary};
    text-decoration: underline;
  }

  &:focus {
    color:  ${r.colors.primary};
    text-decoration: underline;
  }

  &:active {
    color:  ${r.colors.primary};
    text-decoration: underline;
  }

  &:disabled {
    color: ${r.colors.disabled};
    text-decoration: none;
    cursor: default;
  }
`,"ButtonLinked"),D=i(({variant:o})=>{switch(o){case"outlined":return F();case"linked":return L();default:return C()}},"buttonVariant"),w=(0,t.css)(({fullWidth:o})=>({width:o?"100%":"fit-content"})),I=t.css`

    outline: 0;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Arial, sans-serif';
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2rem;
    letter-spacing: 0.4px;
    border: 1px solid red;
    border-radius: 0.4rem;
    ${v}
    ${w}
    ${D}
`,$=(0,t.default)(c).attrs(o=>({display:"flex",justifyContent:"center",alignItems:"center"}))`
    ${I}
`;var g=i(o=>b.default.createElement($,{display:o.display,justifyContent:o.justifyContent,alignItems:o.justifyContent,flexDirection:"row",size:o.size,variant:o.variant,fullWidth:o.fullWidth,...o},o.children),"ButtonComponent");0&&(module.exports={Box,Button});
