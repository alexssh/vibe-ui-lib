import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{H as m}from"./Hint-BCYiD2zo.js";import"./index-CRGxjvZy.js";const g={title:"Components/Hint",component:m,tags:["autodocs"],parameters:{docs:{description:{component:"Atomic hint/help or error message text displayed near inputs."}}},argTypes:{className:{control:{type:"text"},description:"Additional CSS classes"},children:{control:{type:"text"},description:"Custom content; overrides `title` when provided"},title:{control:{type:"text"},description:"Fallback text content when `children` is not provided",defaultValue:"Hint"},variant:{control:{type:"radio"},options:["default","error"],description:"Visual tone of the hint text",defaultValue:"default"}}},e={args:{children:"Helpful hint goes here",variant:"default"}},r={args:{children:"There is an error with this field",variant:"error"}},t={render:()=>o.jsxs("div",{className:"flex flex-col",children:[o.jsx("input",{className:"h-9 rounded border border-neutral-border-interactive px-2"}),o.jsx(m,{children:"This is some guidance below an input"})]})};var n,a,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: "Helpful hint goes here",
    variant: "default"
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,d,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "There is an error with this field",
    variant: "error"
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,p,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col">
      <input className="h-9 rounded border border-neutral-border-interactive px-2" />
      <Hint>This is some guidance below an input</Hint>
    </div>
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const v=["Default","Error","WithGutter"];export{e as Default,r as Error,t as WithGutter,v as __namedExportsOrder,g as default};
