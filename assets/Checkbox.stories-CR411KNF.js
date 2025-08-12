import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{C as o}from"./Checkbox-JdXdWDyD.js";import"./iframe-DyN-BCYS.js";import"./index-CRGxjvZy.js";import"./CheckboxControl-DyxfA-xI.js";import"./Icon-DdOvRL-u.js";import"./index-BPm_Tkde.js";import"./index-D41dteU4.js";const v={title:"Components/Checkbox",component:o,tags:["autodocs"],argTypes:{title:{control:"text"},checked:{control:!1,table:{category:"State"}},defaultChecked:{control:"boolean",table:{category:"State"}},disabled:{control:"boolean"},onCheckedChange:{action:"checkedChange"},name:{control:"text"},value:{control:"text"},id:{control:"text"}}},e={args:{title:"Label"}},t={args:{title:"Checked",defaultChecked:!0}},r={render:h=>a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx(o,{checked:!1,title:"Label",disabled:!0}),a.jsx(o,{checked:!0,title:"Checked",disabled:!0})]})};var c,s,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: "Label"
  }
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var d,n,i;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: "Checked",
    defaultChecked: true
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex flex-col gap-4">
        <Checkbox checked={false} title="Label" disabled />
        <Checkbox checked={true} title="Checked" disabled />
      </div>;
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const D=["Default","Checked","Disabled"];export{t as Checked,e as Default,r as Disabled,D as __namedExportsOrder,v as default};
