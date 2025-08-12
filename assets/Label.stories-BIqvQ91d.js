import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{L as i}from"./Label-CeOe8dTJ.js";import"./index-CRGxjvZy.js";const u={title:"Components/Label",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Atomic text label for form controls and UI captions."}}},argTypes:{className:{control:{type:"text"},description:"Additional CSS classes"},children:{control:{type:"text"},description:"Custom label content; overrides `title` when provided"},title:{control:{type:"text"},description:"Fallback text content when `children` is not provided",defaultValue:"Label"},htmlFor:{control:{type:"text"},description:"Associates the label with a form control id"}}},e={args:{children:"Label"}},r={render:()=>t.jsxs("div",{className:"flex flex-col",children:[t.jsx(i,{htmlFor:"email",children:"Email"}),t.jsx("input",{id:"email",className:"h-9 rounded border border-neutral-border-interactive px-2",placeholder:"you@example.com"})]})};var o,a,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: "Label"
  }
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var s,n,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col">
      <Label htmlFor="email">Email</Label>
      <input id="email" className="h-9 rounded border border-neutral-border-interactive px-2" placeholder="you@example.com" />
    </div>
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const x=["Default","WithHtmlFor"];export{e as Default,r as WithHtmlFor,x as __namedExportsOrder,u as default};
