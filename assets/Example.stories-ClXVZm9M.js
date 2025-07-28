import{r as s,R as ne}from"./iframe--2Mn0E9n.js";var K={exports:{}},x={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae=Symbol.for("react.transitional.element"),oe=Symbol.for("react.fragment");function ee(e,r,n){var t=null;if(n!==void 0&&(t=""+n),r.key!==void 0&&(t=""+r.key),"key"in r){n={};for(var a in r)a!=="key"&&(n[a]=r[a])}else n=r;return r=n.ref,{$$typeof:ae,type:e,key:t,ref:r!==void 0?r:null,props:n}}x.Fragment=oe;x.jsx=ee;x.jsxs=ee;K.exports=x;var c=K.exports;function re(e){var r,n,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(r=0;r<a;r++)e[r]&&(n=re(e[r]))&&(t&&(t+=" "),t+=n)}else for(n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function se(){for(var e,r,n=0,t="",a=arguments.length;n<a;n++)(e=arguments[n])&&(r=re(e))&&(t&&(t+=" "),t+=r);return t}function S(e,r){if(typeof e=="function")return e(r);e!=null&&(e.current=r)}function ie(...e){return r=>{let n=!1;const t=e.map(a=>{const o=S(a,r);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let a=0;a<t.length;a++){const o=t[a];typeof o=="function"?o():S(e[a],null)}}}}function le(e){const r=de(e),n=s.forwardRef((t,a)=>{const{children:o,...l}=t,i=s.Children.toArray(o),p=i.find(ue);if(p){const u=p.props.children,te=i.map(C=>C===p?s.Children.count(u)>1?s.Children.only(null):s.isValidElement(u)?u.props.children:null:C);return c.jsx(r,{...l,ref:a,children:s.isValidElement(u)?s.cloneElement(u,void 0,te):null})}return c.jsx(r,{...l,ref:a,children:o})});return n.displayName=`${e}.Slot`,n}var ce=le("Slot");function de(e){const r=s.forwardRef((n,t)=>{const{children:a,...o}=n;if(s.isValidElement(a)){const l=fe(a),i=me(o,a.props);return a.type!==s.Fragment&&(i.ref=t?ie(t,l):l),s.cloneElement(a,i)}return s.Children.count(a)>1?s.Children.only(null):null});return r.displayName=`${e}.SlotClone`,r}var pe=Symbol("radix.slottable");function ue(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===pe}function me(e,r){const n={...r};for(const t in r){const a=e[t],o=r[t];/^on[A-Z]/.test(t)?a&&o?n[t]=(...i)=>{const p=o(...i);return a(...i),p}:a&&(n[t]=a):t==="style"?n[t]={...a,...o}:t==="className"&&(n[t]=[a,o].filter(Boolean).join(" "))}return{...e,...n}}function fe(e){var t,a;let r=(t=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:t.get,n=r&&"isReactWarning"in r&&r.isReactWarning;return n?e.ref:(r=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=r&&"isReactWarning"in r&&r.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}const b=ne.forwardRef(({variant:e="primary",children:r,className:n,asChild:t=!1,...a},o)=>{const l=se("vibe-Example",`vibe-Example--variant-${e}`,n),i=t?ce:"button";return c.jsx(i,{className:l,ref:o,"data-testid":"example",...a,children:r})});b.displayName="Example";b.__docgenInfo={description:`Example component for demonstration purposes.

@remarks
This is a basic button component that follows the project's design system.
Built on top of Radix UI Slot primitive for maximum flexibility.

@example
\`\`\`tsx
<Example variant="primary" onClick={() => console.log('clicked')}>
  Click me
</Example>
\`\`\``,methods:[],displayName:"Example",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:`The visual variant of the button.

@defaultValue "primary"`,defaultValue:{value:'"primary"',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to display inside the button."},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback function called when the button is clicked."},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names to apply to the button."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Additional inline styles to apply to the button."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the button is disabled."},asChild:{required:!1,tsType:{name:"boolean"},description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

@defaultValue false`,defaultValue:{value:"false",computed:!1}}}};const he={title:"Components/Example",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"A basic button component with customizable variants and styling."}}},argTypes:{variant:{control:{type:"radio"},options:["primary","secondary"],description:"The visual variant of the button"},children:{control:{type:"text"},description:"The content to display inside the button"},onClick:{action:"clicked",description:"Callback function called when the button is clicked"},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"},className:{control:{type:"text"},description:"Additional CSS class names to apply to the button"},asChild:{control:{type:"boolean"},description:"Change the default rendered element for the one passed as a child"}}},d={render:e=>c.jsx(b,{...e})},m={...d,args:{variant:"primary",children:"Click me",disabled:!1}},f={...d,args:{variant:"primary",children:"Primary Button"}},y={...d,args:{variant:"secondary",children:"Secondary Button"}},h={...d,args:{variant:"primary",children:"Disabled Button",disabled:!0}},v={...d,args:{variant:"primary",asChild:!0,children:c.jsx("a",{href:"https://example.com",children:"Link Button"})}},g={...d,args:{variant:"secondary",asChild:!0,children:c.jsx("div",{children:"Div Button"})}};var E,T,k,R,P;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Template,
  args: {
    variant: "primary",
    children: "Click me",
    disabled: false
  }
}`,...(k=(T=m.parameters)==null?void 0:T.docs)==null?void 0:k.source},description:{story:"Playground story with all controls available.",...(P=(R=m.parameters)==null?void 0:R.docs)==null?void 0:P.description}}};var A,j,_,w,B;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Template,
  args: {
    variant: "primary",
    children: "Primary Button"
  }
}`,...(_=(j=f.parameters)==null?void 0:j.docs)==null?void 0:_.source},description:{story:"Primary variant - the default look of the component.",...(B=(w=f.parameters)==null?void 0:w.docs)==null?void 0:B.description}}};var D,N,V,q,I;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Template,
  args: {
    variant: "secondary",
    children: "Secondary Button"
  }
}`,...(V=(N=y.parameters)==null?void 0:N.docs)==null?void 0:V.source},description:{story:"Secondary variant example.",...(I=(q=y.parameters)==null?void 0:q.docs)==null?void 0:I.description}}};var L,W,O,$,F;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...Template,
  args: {
    variant: "primary",
    children: "Disabled Button",
    disabled: true
  }
}`,...(O=(W=h.parameters)==null?void 0:W.docs)==null?void 0:O.source},description:{story:"Disabled state example.",...(F=($=h.parameters)==null?void 0:$.docs)==null?void 0:F.description}}};var H,M,Y,z,G;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...Template,
  args: {
    variant: "primary",
    asChild: true,
    children: <a href="https://example.com">Link Button</a>
  }
}`,...(Y=(M=v.parameters)==null?void 0:M.docs)==null?void 0:Y.source},description:{story:"Example using asChild prop to render as a link.",...(G=(z=v.parameters)==null?void 0:z.docs)==null?void 0:G.description}}};var J,U,Z,Q,X;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...Template,
  args: {
    variant: "secondary",
    asChild: true,
    children: <div>Div Button</div>
  }
}`,...(Z=(U=g.parameters)==null?void 0:U.docs)==null?void 0:Z.source},description:{story:"Example using asChild prop to render as a div.",...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};const ve=["Playground","Primary","Secondary","Disabled","AsLink","AsDiv"];export{g as AsDiv,v as AsLink,h as Disabled,m as Playground,f as Primary,y as Secondary,ve as __namedExportsOrder,he as default};
