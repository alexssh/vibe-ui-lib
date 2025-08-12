import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as t}from"./Button-DX9pIdPn.js";import{I as n}from"./Icon-DdOvRL-u.js";import"./iframe-DyN-BCYS.js";import"./index-BPm_Tkde.js";import"./index-CRGxjvZy.js";const J={title:"Components/Button",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"An example of a basic button component with customizable variants and styling."}}},argTypes:{asChild:{control:{type:"boolean"},description:"Change the default rendered element for the one passed as a child"},className:{control:{type:"text"},description:"Additional CSS class names to apply to the button"},children:{control:{type:"text"},description:"The content to display inside the button"},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"},onClick:{action:"clicked",description:"Callback function called when the button is clicked"},size:{control:{type:"radio"},options:["default","small"],description:"The size of the button"},variant:{control:{type:"radio"},options:["primary","secondary"],description:"The visual variant of the button"}}},r={args:{children:"Primary Button",variant:"primary"}},s={args:{children:"Secondary Button",variant:"secondary"}},a={args:{children:"Disabled Button",disabled:!0,variant:"primary"}},o={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{size:"default",children:"Button"}),e.jsx(t,{size:"small",children:"Button"})]})},i={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs(t,{size:"default",children:[e.jsx(n,{glyph:"bolt"}),"Button"]}),e.jsxs(t,{size:"small",children:[e.jsx(n,{glyph:"bolt"}),"Button"]})]})},c={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs(t,{size:"default",children:["Button",e.jsx(n,{glyph:"bolt"})]}),e.jsxs(t,{size:"small",children:["Button",e.jsx(n,{glyph:"bolt"})]})]})},l={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{size:"default","aria-label":"Settings",children:e.jsx(n,{glyph:"bolt"})}),e.jsx(t,{size:"small","aria-label":"Settings",children:e.jsx(n,{glyph:"bolt"})})]})};var d,p,m,u,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: "Primary Button",
    variant: "primary"
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:"Primary variant - the default look of the component.",...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.description}}};var y,g,x,b,B;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Secondary Button",
    variant: "secondary"
  }
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source},description:{story:"Secondary variant example.",...(B=(b=s.parameters)==null?void 0:b.docs)==null?void 0:B.description}}};var f,v,j,z,S;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: "Disabled Button",
    disabled: true,
    variant: "primary"
  }
}`,...(j=(v=a.parameters)==null?void 0:v.docs)==null?void 0:j.source},description:{story:"Disabled state example.",...(S=(z=a.parameters)==null?void 0:z.docs)==null?void 0:S.description}}};var I,T,N;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Button size="default">Button</Button>
      <Button size="small">Button</Button>
    </div>
}`,...(N=(T=o.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var D,C,k;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Button size="default">
        <Icon glyph="bolt" />
        Button
      </Button>
      <Button size="small">
        <Icon glyph="bolt" />
        Button
      </Button>
    </div>
}`,...(k=(C=i.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var O,P,w;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Button size="default">
        Button
        <Icon glyph="bolt" />
      </Button>
      <Button size="small">
        Button
        <Icon glyph="bolt" />
      </Button>
    </div>
}`,...(w=(P=c.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var A,E,_;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Button size="default" aria-label="Settings">
        <Icon glyph="bolt" />
      </Button>
      <Button size="small" aria-label="Settings">
        <Icon glyph="bolt" />
      </Button>
    </div>
}`,...(_=(E=l.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};const K=["Primary","Secondary","Disabled","TextOnlyDefault","IconThenText","TextThenIcon","IconOnly"];export{a as Disabled,l as IconOnly,i as IconThenText,r as Primary,s as Secondary,o as TextOnlyDefault,c as TextThenIcon,K as __namedExportsOrder,J as default};
