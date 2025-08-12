import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as N}from"./iframe-DyN-BCYS.js";import{I as a}from"./InputField-D1E3Z9M6.js";import{L as I}from"./Label-CeOe8dTJ.js";import{H as S}from"./Hint-BCYiD2zo.js";import"./index-CRGxjvZy.js";import"./ClearButton-StNyAEWN.js";import"./Icon-DdOvRL-u.js";const k={title:"Components/InputField",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Basic text input with optional clear button and error state."}}},argTypes:{className:{control:{type:"text"}},disabled:{control:{type:"boolean"}},showClear:{control:{type:"boolean"},defaultValue:!0},error:{control:{type:"boolean"}},onChange:{action:"changed",description:"Value change"},onClear:{action:"cleared",description:"Clear button clicked"}}},r={args:{placeholder:"Placeholder"}},l={args:{defaultValue:"Value"}},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{placeholder:"Disabled placeholder",disabled:!0}),e.jsx(a,{value:"Disabled value",disabled:!0})]})},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(I,{children:"Email"}),e.jsx(a,{defaultValue:"invalid@",error:!0}),e.jsx(S,{variant:"error",children:"Please enter a valid email"})]})},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(I,{children:"Username"}),e.jsx(a,{placeholder:"Type your username"}),e.jsx(S,{children:"Use 3–16 characters"})]})},n={render:()=>{const[W,c]=N.useState("Hello");return e.jsx(a,{value:W,onChange:F=>c(F.target.value),onClear:()=>c("")})}};var d,i,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: "Placeholder"
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,m,h;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    defaultValue: "Value"
  }
}`,...(h=(m=l.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var x,v,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <InputField placeholder="Disabled placeholder" disabled />
      <InputField value="Disabled value" disabled />
    </div>
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var g,f,j;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-1">
      <Label>Email</Label>
      <InputField defaultValue="invalid@" error />
      <Hint variant="error">Please enter a valid email</Hint>
    </div>
}`,...(j=(f=t.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var V,C,H;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-1">
      <Label>Username</Label>
      <InputField placeholder="Type your username" />
      <Hint>Use 3–16 characters</Hint>
    </div>
}`,...(H=(C=o.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var y,L,E;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = React.useState("Hello");
    return <InputField value={val} onChange={e => setVal(e.target.value)} onClear={() => setVal("")} />;
  }
}`,...(E=(L=n.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};const B=["Empty","WithValue","Disabled","ErrorWithLabelAndHint","WithLabelAndHint","ControlledWithClear"];export{n as ControlledWithClear,s as Disabled,r as Empty,t as ErrorWithLabelAndHint,o as WithLabelAndHint,l as WithValue,B as __namedExportsOrder,k as default};
