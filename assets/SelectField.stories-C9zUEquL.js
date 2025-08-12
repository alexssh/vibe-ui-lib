import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as L}from"./iframe-DyN-BCYS.js";import{S as a}from"./SelectField-5zXVRRsx.js";import{L as A}from"./Label-CeOe8dTJ.js";import{H as F}from"./Hint-BCYiD2zo.js";import"./index-CRGxjvZy.js";import"./Icon-DdOvRL-u.js";const w={title:"Components/SelectField",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Basic select field styled with a dropdown icon."}}},argTypes:{className:{control:{type:"text"}},disabled:{control:{type:"boolean"}},error:{control:{type:"boolean"},description:"Visual error state (adds red outline)"},onChange:{action:"changed",description:"Fires when the selected option changes"}}},o={render:t=>e.jsxs(a,{...t,children:[e.jsx("option",{value:"alpha",children:"Alpha"}),e.jsx("option",{value:"bravo",children:"Bravo"}),e.jsx("option",{value:"charlie",children:"Charlie"})]})},r={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs(a,{disabled:!0,children:[e.jsx("option",{value:"alpha",children:"Alpha"}),e.jsx("option",{value:"bravo",children:"Bravo"}),e.jsx("option",{value:"charlie",children:"Charlie"})]}),e.jsxs(a,{value:"bravo",disabled:!0,children:[e.jsx("option",{value:"alpha",children:"Alpha"}),e.jsx("option",{value:"bravo",children:"Bravo"}),e.jsx("option",{value:"charlie",children:"Charlie"})]})]})},l={render:()=>{const[t,y]=L.useState("");return e.jsx("div",{className:"flex flex-col gap-1",children:e.jsxs(a,{value:t,onChange:B=>y(B.target.value),children:[e.jsx("option",{value:"alpha",children:"Alpha"}),e.jsx("option",{value:"bravo",children:"Bravo"}),e.jsx("option",{value:"charlie",children:"Charlie"})]})})}},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(A,{children:"Country"}),e.jsxs(a,{defaultValue:"",children:[e.jsx("option",{value:"alpha",children:"Alpha"}),e.jsx("option",{value:"bravo",children:"Bravo"}),e.jsx("option",{value:"charlie",children:"Charlie"})]}),e.jsx(F,{children:"Choose your country from the list"})]})},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(A,{children:"Country"}),e.jsxs(a,{defaultValue:"",error:!0,children:[e.jsx("option",{value:"alpha",children:"Alpha"}),e.jsx("option",{value:"bravo",children:"Bravo"}),e.jsx("option",{value:"charlie",children:"Charlie"})]}),e.jsx(F,{variant:"error",children:"This field is required"})]})};var s,c,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <SelectField {...args}>
      <option value="alpha">Alpha</option>
      <option value="bravo">Bravo</option>
      <option value="charlie">Charlie</option>
    </SelectField>
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,h,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <SelectField disabled>
        <option value="alpha">Alpha</option>
        <option value="bravo">Bravo</option>
        <option value="charlie">Charlie</option>
      </SelectField>
      <SelectField value="bravo" disabled>
        <option value="alpha">Alpha</option>
        <option value="bravo">Bravo</option>
        <option value="charlie">Charlie</option>
      </SelectField>
    </div>
}`,...(u=(h=r.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var v,x,m;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = React.useState("");
    return <div className="flex flex-col gap-1">
        <SelectField value={val} onChange={e => setVal(e.target.value)}>
          <option value="alpha">Alpha</option>
          <option value="bravo">Bravo</option>
          <option value="charlie">Charlie</option>
        </SelectField>
      </div>;
  }
}`,...(m=(x=l.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var j,f,b;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-1">
      <Label>Country</Label>
      <SelectField defaultValue="">
        <option value="alpha">Alpha</option>
        <option value="bravo">Bravo</option>
        <option value="charlie">Charlie</option>
      </SelectField>
      <Hint>Choose your country from the list</Hint>
    </div>
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,C,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-1">
      <Label>Country</Label>
      <SelectField defaultValue="" error>
        <option value="alpha">Alpha</option>
        <option value="bravo">Bravo</option>
        <option value="charlie">Charlie</option>
      </SelectField>
      <Hint variant="error">This field is required</Hint>
    </div>
}`,...(S=(C=i.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const T=["Default","Disabled","Controlled","WithLabelAndHint","WithLabelAndError"];export{l as Controlled,o as Default,r as Disabled,i as WithLabelAndError,n as WithLabelAndHint,T as __namedExportsOrder,w as default};
