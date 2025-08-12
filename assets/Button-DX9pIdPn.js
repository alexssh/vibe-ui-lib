import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{r as a}from"./iframe-DyN-BCYS.js";import{S as b}from"./index-BPm_Tkde.js";import{c as v}from"./index-CRGxjvZy.js";const x=v("inline-flex items-center justify-center rounded truncate text-[16px] leading-[20px] font-semibold cursor-pointer disabled:pointer-events-none",{variants:{disabled:{true:"",false:""},size:{default:"h-12 min-w-12 px-3 gap-1",small:"h-8 min-w-8 px-1 gap-0"},variant:{primary:"bg-accented-bg-interactive text-accented-text-interactive hover:bg-accented-bg-interactive-hover hover:text-accented-text-interactive-hover focus-visible:bg-accented-bg-interactive-focus focus-visible:text-accented-text-interactive-focus focus-visible:outline-2 focus-visible:outline-accented-border-interactive-focus",secondary:"bg-neutral-bg-interactive text-neutral-text-interactive border border-neutral-border-interactive hover:bg-neutral-bg-interactive-hover hover:text-neutral-text-interactive-hover hover:border-neutral-border-interactive-hover focus-visible:border-transparent focus-visible:bg-neutral-bg-interactive-focus focus-visible:text-neutral-text-interactive-focus focus-visible:outline-2 focus-visible:outline-neutral-border-interactive-focus"}},compoundVariants:[{variant:"primary",disabled:!0,class:"disabled:bg-accented-bg-interactive-disabled disabled:text-accented-text-interactive-disabled"},{variant:"secondary",disabled:!0,class:"disabled:bg-neutral-bg-interactive-disabled disabled:text-neutral-text-interactive-disabled disabled:outline-none"}],defaultVariants:{disabled:!1,size:"default",variant:"primary"}}),r=({ref:s,asChild:l=!1,children:o,className:c,disabled:n=!1,size:d,variant:u,...m})=>{const f=l?b:"button";return i.jsx(f,{className:x({className:c,disabled:n,size:d,variant:u}),disabled:n,ref:s,"data-testid":"Button",...m,children:a.Children.map(o,e=>{if(!a.isValidElement(e))return i.jsx("span",{className:"px-1",children:e});const t=e.type;if((t==null?void 0:t.displayName)==="Icon"){const p=`${e.props.className??""} text-current`.trim();return a.cloneElement(e,{className:p})}return e})})};r.displayName="Button";r.__docgenInfo={description:`Button component.

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

@defaultValue "primary"`}},composes:["VariantProps"]};export{r as B};
