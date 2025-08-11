import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{I as t}from"./Icon-BRNX2Kck.js";const b={title:"Components/Icon",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Icon container with fixed 24×24 size. Inherits color from theme by default (via `--color-neutral-icon-default`). Override using Tailwind class `text-[color:var(--color-…)]` or `style={{ color: '#rrggbb' }}`."}}},argTypes:{glyph:{control:{type:"select"},options:["bolt","like","star","check","arrowDown","arrowUp","clear"],description:"Which glyph to render"},className:{control:{type:"text"},description:"Additional classes. Use `text-[color:var(--color-neutral-icon-default)]` to theme."},color:{control:{type:"color"},description:"Inline color override (maps to CSS color)"}}},r={args:{glyph:"bolt"}},o={args:{glyph:"star",className:"text-[color:var(--color-neutral-icon-default)]"}},a={args:{glyph:"check",className:"text-[color:var(--color-accented-icon-interactive)]"}},s={args:{glyph:"like",color:"#ff0066"}},c={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{glyph:"arrowUp"}),e.jsx(t,{glyph:"arrowDown"}),e.jsx(t,{glyph:"clear"})]})};var n,l,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    glyph: "bolt"
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var i,d,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    glyph: "star",
    className: "text-[color:var(--color-neutral-icon-default)]"
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,u,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    glyph: "check",
    className: "text-[color:var(--color-accented-icon-interactive)]"
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,x,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    glyph: "like",
    color: "#ff0066"
  }
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,w,I;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Icon glyph="arrowUp" />
      <Icon glyph="arrowDown" />
      <Icon glyph="clear" />
    </div>
}`,...(I=(w=c.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};const j=["Default","ThemedNeutral","ThemedAccented","CustomHex","Arrows"];export{c as Arrows,s as CustomHex,r as Default,a as ThemedAccented,o as ThemedNeutral,j as __namedExportsOrder,b as default};
