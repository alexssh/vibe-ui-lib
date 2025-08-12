import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{T as r}from"./TextArea-CY83hfox.js";import{L as j}from"./Label-CeOe8dTJ.js";import{H as w}from"./Hint-BCYiD2zo.js";import"./index-CRGxjvZy.js";const D={title:"Components/TextArea",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Basic multiline text input with error state."}}},argTypes:{className:{control:{type:"text"}},disabled:{control:{type:"boolean"}},error:{control:{type:"boolean"}},onChange:{action:"changed"}}},a={args:{placeholder:"Placeholder",rows:3}},s={args:{defaultValue:`Line 1
Line 2`,rows:4}},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{placeholder:"Disabled placeholder",disabled:!0,rows:3}),e.jsx(r,{defaultValue:"Disabled value",disabled:!0,rows:3})]})},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(j,{children:"About you"}),e.jsx(r,{placeholder:"Tell us something about yourself",rows:4}),e.jsx(w,{children:"Minimum 20 characters"})]})},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(j,{children:"About you"}),e.jsx(r,{defaultValue:"Too short",error:!0,rows:4}),e.jsx(w,{variant:"error",children:"Please provide at least 20 characters"})]})};var n,c,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    placeholder: "Placeholder",
    rows: 3
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var i,p,u;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    defaultValue: "Line 1\\nLine 2",
    rows: 4
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,x,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <TextArea placeholder="Disabled placeholder" disabled rows={3} />
      <TextArea defaultValue="Disabled value" disabled rows={3} />
    </div>
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,f,g;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-1">
      <Label>About you</Label>
      <TextArea placeholder="Tell us something about yourself" rows={4} />
      <Hint>Minimum 20 characters</Hint>
    </div>
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,A,L;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-1">
      <Label>About you</Label>
      <TextArea defaultValue="Too short" error rows={4} />
      <Hint variant="error">Please provide at least 20 characters</Hint>
    </div>
}`,...(L=(A=l.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};const E=["Empty","WithValue","Disabled","WithLabelAndHint","ErrorWithLabelAndHint"];export{o as Disabled,a as Empty,l as ErrorWithLabelAndHint,t as WithLabelAndHint,s as WithValue,E as __namedExportsOrder,D as default};
