import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as v}from"./iframe-DyN-BCYS.js";import{C as o}from"./CheckboxControl-DyxfA-xI.js";import"./Icon-DdOvRL-u.js";import"./index-CRGxjvZy.js";import"./index-BPm_Tkde.js";import"./index-D41dteU4.js";const _={title:"Components/Checkbox/CheckboxControl (private)",component:o,tags:["autodocs"],parameters:{controls:{exclude:["onCheckedChange"]}},argTypes:{id:{control:!1},name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"}}},r={args:{checked:!1}},c={args:{checked:!0}},s={render:t=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(o,{checked:!1,disabled:!0}),e.jsx(o,{checked:!0,disabled:!0})]})},a={render:t=>{const[f,b]=v.useState(t.checked??!1);return e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx(o,{...t,checked:f,onCheckedChange:b})})}};var n,d,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,h,i;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(i=(h=c.parameters)==null?void 0:h.docs)==null?void 0:i.source}}};var p,k,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(C=a.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const y=["Unchecked","Checked","Disabled","Interactive"];export{c as Checked,s as Disabled,a as Interactive,r as Unchecked,y as __namedExportsOrder,_ as default};
