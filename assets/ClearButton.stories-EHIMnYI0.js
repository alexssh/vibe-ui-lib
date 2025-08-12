import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{C as i}from"./ClearButton-StNyAEWN.js";import"./index-CRGxjvZy.js";import"./Icon-DdOvRL-u.js";const b={title:"Components/InputField/ClearButton",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Private subcomponent used by InputField to clear the value. Mirrors secondary Button surface without border."}}},argTypes:{disabled:{control:{type:"boolean"},description:"Whether the button is disabled"},ariaLabel:{control:{type:"text"},description:"Accessible label",defaultValue:"Clear"},onClick:{action:"clicked"}}},e={render:d=>r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(i,{...d}),r.jsx("span",{className:"text-sm text-[color:var(--color-neutral-text-secondary)]",children:"Click to clear"})]})},t={args:{disabled:!0}};var a,s,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-2">
      <ClearButton {...args as any} />
      <span className="text-sm text-[color:var(--color-neutral-text-secondary)]">
        Click to clear
      </span>
    </div>
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var n,c,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const g=["Default","Disabled"];export{e as Default,t as Disabled,g as __namedExportsOrder,b as default};
