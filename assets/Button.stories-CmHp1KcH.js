import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./iframe-C_JpEGp9.js";import{S as Q}from"./index-C0-1UWSU.js";import{c as X,I as n}from"./Icon-BRNX2Kck.js";const Y=X("inline-flex items-center justify-center rounded truncate text-[15px] font-semibold cursor-pointer disabled:pointer-events-none",{variants:{disabled:{true:"",false:""},size:{default:"h-12 min-w-12 px-3 gap-1",small:"h-8 min-w-8 px-1 gap-0"},variant:{primary:"bg-accented-bg-interactive text-accented-text-interactive hover:bg-accented-bg-interactive-hover hover:text-accented-text-interactive-hover focus-visible:bg-accented-bg-interactive-focus focus-visible:text-accented-text-interactive-focus focus-visible:outline-2 focus-visible:outline-accented-border-interactive-focus",secondary:"bg-neutral-bg-interactive text-neutral-text-interactive border border-neutral-border-interactive hover:bg-neutral-bg-interactive-hover hover:text-neutral-text-interactive-hover hover:border-neutral-border-interactive-hover focus-visible:border-transparent focus-visible:bg-neutral-bg-interactive-focus focus-visible:text-neutral-text-interactive-focus focus-visible:outline-2 focus-visible:outline-neutral-border-interactive-focus"}},compoundVariants:[{variant:"primary",disabled:!0,class:"disabled:bg-accented-bg-interactive-disabled disabled:text-accented-text-interactive-disabled"},{variant:"secondary",disabled:!0,class:"disabled:bg-neutral-bg-interactive-disabled disabled:text-neutral-text-interactive-disabled disabled:outline-none"}],defaultVariants:{disabled:!1,size:"default",variant:"primary"}}),t=({ref:A,asChild:H=!1,children:U,className:W,disabled:m=!1,size:$,variant:F,...G})=>{const J=H?Q:"button";return e.jsx(J,{className:Y({className:W,disabled:m,size:$,variant:F}),disabled:m,ref:A,"data-testid":"Button",...G,children:p.Children.map(U,a=>{if(!p.isValidElement(a))return e.jsx("span",{className:"px-1",children:a});const u=a.type;if((u==null?void 0:u.displayName)==="Icon"){const K=`${a.props.className??""} text-current`.trim();return p.cloneElement(a,{className:K})}return a})})};t.displayName="Button";t.__docgenInfo={description:`Button component.

@remarks
This is a basic button component that follows the project's design system.
Built on top of Radix UI Slot primitive for maximum flexibility.

@example
\`\`\`tsx
<Button variant="primary" size="small" disabled={false} onClick={() => console.log('clicked')}>
  Click me
</Button>
\`\`\``,methods:[],displayName:"Button",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Ref to the underlying DOM element. React 19 allows passing `ref` as a prop without `forwardRef`."},asChild:{required:!1,tsType:{name:"boolean"},description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

@defaultValue false`,defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to display inside the button."},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the button is disabled.

@defaultValue false`,defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"default" | "small"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"small"'}]},description:`The size of the button.

@defaultValue "default"`},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:`The visual variant of the button.

@defaultValue "primary"`}},composes:["VariantProps"]};const se={title:"Components/Button",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"An example of a basic button component with customizable variants and styling."}}},argTypes:{asChild:{control:{type:"boolean"},description:"Change the default rendered element for the one passed as a child"},className:{control:{type:"text"},description:"Additional CSS class names to apply to the button"},children:{control:{type:"text"},description:"The content to display inside the button"},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"},onClick:{action:"clicked",description:"Callback function called when the button is clicked"},size:{control:{type:"radio"},options:["default","small"],description:"The size of the button"},variant:{control:{type:"radio"},options:["primary","secondary"],description:"The visual variant of the button"}}},r={args:{children:"Primary Button",variant:"primary"}},s={args:{children:"Secondary Button",variant:"secondary"}},o={args:{children:"Disabled Button",disabled:!0,variant:"primary"}},i={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{size:"default",children:"Button"}),e.jsx(t,{size:"small",children:"Button"})]})},l={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs(t,{size:"default",children:[e.jsx(n,{glyph:"bolt"}),"Button"]}),e.jsxs(t,{size:"small",children:[e.jsx(n,{glyph:"bolt"}),"Button"]})]})},c={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs(t,{size:"default",children:["Button",e.jsx(n,{glyph:"bolt"})]}),e.jsxs(t,{size:"small",children:["Button",e.jsx(n,{glyph:"bolt"})]})]})},d={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{size:"default","aria-label":"Settings",children:e.jsx(n,{glyph:"bolt"})}),e.jsx(t,{size:"small","aria-label":"Settings",children:e.jsx(n,{glyph:"bolt"})})]})};var b,f,h,v,x;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: "Primary Button",
    variant: "primary"
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source},description:{story:"Primary variant - the default look of the component.",...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.description}}};var y,g,B,T,j;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Secondary Button",
    variant: "secondary"
  }
}`,...(B=(g=s.parameters)==null?void 0:g.docs)==null?void 0:B.source},description:{story:"Secondary variant example.",...(j=(T=s.parameters)==null?void 0:T.docs)==null?void 0:j.description}}};var z,S,I,N,C;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: "Disabled Button",
    disabled: true,
    variant: "primary"
  }
}`,...(I=(S=o.parameters)==null?void 0:S.docs)==null?void 0:I.source},description:{story:"Disabled state example.",...(C=(N=o.parameters)==null?void 0:N.docs)==null?void 0:C.description}}};var R,w,k;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Button size="default">Button</Button>
      <Button size="small">Button</Button>
    </div>
}`,...(k=(w=i.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var V,D,E;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Button size="default">
        <Icon glyph="bolt" />
        Button
      </Button>
      <Button size="small">
        <Icon glyph="bolt" />
        Button
      </Button>
    </div>
}`,...(E=(D=l.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var q,O,P;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Button size="default">
        Button
        <Icon glyph="bolt" />
      </Button>
      <Button size="small">
        Button
        <Icon glyph="bolt" />
      </Button>
    </div>
}`,...(P=(O=c.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var L,_,M;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Button size="default" aria-label="Settings">
        <Icon glyph="bolt" />
      </Button>
      <Button size="small" aria-label="Settings">
        <Icon glyph="bolt" />
      </Button>
    </div>
}`,...(M=(_=d.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};const oe=["Primary","Secondary","Disabled","TextOnlyDefault","IconThenText","TextThenIcon","IconOnly"];export{o as Disabled,d as IconOnly,l as IconThenText,r as Primary,s as Secondary,i as TextOnlyDefault,c as TextThenIcon,oe as __namedExportsOrder,se as default};
