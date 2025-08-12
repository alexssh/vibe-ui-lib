import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{C as i}from"./Card-CR6hdc20.js";import"./index-CRGxjvZy.js";const x={title:"Components/Card",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Container block with rounded corners and a divider border. Accepts content via `children` or `slot`. When empty, renders the literal string 'Placeholder'."}}},argTypes:{className:{control:{type:"text"},description:"Extra CSS classes"},children:{control:{type:"text"},description:"Content inside the card (alias of `slot`)"},slot:{control:{type:"text"},description:"Figma 'slot' content; treated as children"}}},e={args:{}},t={args:{slot:o.jsxs("div",{className:"flex w-full flex-col gap-2 px-4",children:[o.jsx("h3",{className:"text-[21px] font-semibold",children:"Slot Title"}),o.jsx("p",{className:"text-[16px] leading-[20px] text-[color:var(--color-neutral-text-secondary)]",children:"Provided via slot prop"})]})}};var r,s,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {}
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var l,n,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    slot: <div className="flex w-full flex-col gap-2 px-4">
        <h3 className="text-[21px] font-semibold">Slot Title</h3>
        <p className="text-[16px] leading-[20px] text-[color:var(--color-neutral-text-secondary)]">
          Provided via slot prop
        </p>
      </div>
  }
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const h=["Default","WithSlotProp"];export{e as Default,t as WithSlotProp,h as __namedExportsOrder,x as default};
