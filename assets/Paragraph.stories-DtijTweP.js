import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{P as p}from"./Paragraph-Da1EpVcC.js";import"./iframe-DyN-BCYS.js";import"./index-CRGxjvZy.js";const g={title:"Components/Paragraph",component:p,tags:["autodocs"],parameters:{docs:{description:{component:"Body text 16/20. Supports alternative tags and nested content."}}},argTypes:{as:{control:{type:"radio"},options:["p","div","span"]},content:{control:{type:"text"}},className:{control:{type:"text"}}}},t={args:{as:"p",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat."}},r={render:()=>e.jsxs(p,{children:["This is ",e.jsx("strong",{children:"bold"}),", ",e.jsx("em",{children:"italic"}),", and ",e.jsx("a",{href:"#",children:"a link"}),"."]})};var a,s,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    as: "p",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat."
  }
}`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var n,i,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <Paragraph>
      This is <strong>bold</strong>, <em>italic</em>, and <a href="#">a link</a>
      .
    </Paragraph>
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const h=["Default","NestedElements"];export{t as Default,r as NestedElements,h as __namedExportsOrder,g as default};
