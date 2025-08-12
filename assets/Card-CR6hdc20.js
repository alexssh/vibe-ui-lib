import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as l}from"./index-CRGxjvZy.js";const i=l("relative rounded border border-neutral-border-divider bg-neutral-bg-default"),a=({ref:r,children:t,className:n,slot:o=null,...d})=>{const s=o??t??"Placeholder";return e.jsx("div",{ref:r,className:i({className:n}),"data-testid":"Card",...d,children:e.jsx("div",{className:"box-border flex min-h-16 w-full flex-col items-start justify-start gap-2 px-0 py-4",children:s})})};a.displayName="Card";a.__docgenInfo={description:`Card component.

Container block with rounded corners and subtle divider border, intended to wrap arbitrary content.
Extracted from Figma via MCP. Honors \`slot\` as an alias for \`children\`.

@example
\`\`\`tsx
<Card>
  <h3 className="text-base font-semibold">Title</h3>
  <p className="text-sm text-[color:var(--color-neutral-text-secondary)]">Body</p>
</Card>
\`\`\``,methods:[],displayName:"Card",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref to the underlying DOM element. React 19 allows passing `ref` as a prop without `forwardRef`."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Content area. If not provided, the component renders a literal "Placeholder" string
instead of Figma's placeholder graphics, per MCP guidelines.`},slot:{required:!1,tsType:{name:"union",raw:"React.ReactNode | null",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"null"}]},description:'Figma-extracted prop name for content. Treated the same as `children`.\nWhen omitted and no `children` are provided, the literal string "Placeholder" is rendered.',defaultValue:{value:"null",computed:!1}}},composes:["Omit","VariantProps"]};export{a as C};
