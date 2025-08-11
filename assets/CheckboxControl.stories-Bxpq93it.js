import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as v}from"./iframe-C_JpEGp9.js";import{C as o}from"./CheckboxControl-Bj4Z2zGW.js";import"./Icon-BRNX2Kck.js";import"./index-C0-1UWSU.js";import"./index-Ci8-TjZE.js";const U={title:"Components/Checkbox/CheckboxControl (private)",component:o,tags:["autodocs"],parameters:{controls:{exclude:["onCheckedChange"]}},argTypes:{id:{control:!1},name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"}}},r={args:{checked:!1}},c={args:{checked:!0}},s={render:t=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(o,{checked:!1,disabled:!0}),e.jsx(o,{checked:!0,disabled:!0})]})},a={render:t=>{const[f,b]=v.useState(t.checked??!1);return e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx(o,{...t,checked:f,onCheckedChange:b})})}};var n,d,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var h,m,i;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(i=(m=c.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var p,k,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex flex-col gap-4">
        <CheckboxControl checked={false} disabled />
        <CheckboxControl checked={true} disabled />
      </div>;
  }
}`,...(u=(k=s.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var x,C,g;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(args.checked ?? false);
    return <div className="flex flex-col gap-4">
        <CheckboxControl {...args} checked={checked} onCheckedChange={setChecked} />
      </div>;
  }
}`,...(g=(C=a.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const _=["Unchecked","Checked","Disabled","Interactive"];export{c as Checked,s as Disabled,a as Interactive,r as Unchecked,_ as __namedExportsOrder,U as default};
