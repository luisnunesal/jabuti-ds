var l=Object.defineProperty;var t=(o,n)=>l(o,"name",{value:n,configurable:!0});import c from"styled-components";var a=c.div.attrs(o=>({as:o.as}))`
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
`;import h from"react";import s,{css as e}from"styled-components";var r={colors:{baseDark:"#26292E",baseLight:"#FCFCFC",baseLightHover:"#F5F5F5",deepDark:"#000",deepLight:"#FFF",main:"#003750",complementary:"#F6BA20",information:"#3399FF",success:"#2CB567",danger:"#E12712",warning:"#FFBB00",primary:"#32AFDC",secondary:"#2D81AA",tertiary:"#2CE571",disabled:"#b8b8b8"}};var d=t(({size:o})=>{switch(o){case"small":return e`
            height: 3.2rem;
            padding: 0 1.2rem;
        `;case"normal":return e`
            height: 4.4rem;
            padding: 0 1.2rem;
        `;case"large":return e`
            height: 5.6rem;
            width: 100%;
        `;default:return e`
            height: 4.4rem;
            padding: 0 1.2rem;
        `}},"buttonSize"),m=t(()=>e`
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
`,"ButtonContained"),u=t(()=>e`
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
`,"ButtonOutlined"),$=t(()=>e`
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
`,"ButtonLinked"),b=t(({variant:o})=>{switch(o){case"outlined":return u();case"linked":return $();default:return m()}},"buttonVariant"),g=e(({fullWidth:o})=>({width:o?"100%":"fit-content"})),f=e`

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
    ${d}
    ${g}
    ${b}

    


`,i=s(a).attrs(o=>({display:"flex",justifyContent:"center",alignItems:"center"}))`
    ${f}
`;var y=t(o=>h.createElement(i,{display:o.display,justifyContent:o.justifyContent,alignItems:o.justifyContent,flexDirection:"row",size:o.size,variant:o.variant,fullWidth:o.fullWidth,...o},o.children),"ButtonComponent");export{a as Box,y as Button};
