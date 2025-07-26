type Modifiers = Record<string, string | boolean | undefined>

/**
 * Generates BEM-style class names in the format Block[__Element][_modName-modVal or _modName]
 *
 * @param block - the block name
 * @param element - the element name (without __), if any
 * @param mods - an object with modifiers (string or boolean values)
 * @param extra - an array of additional class names
 * @returns a space-separated string of class names
 */
const bem = (
  block: string,
  element?: string,
  mods: Modifiers = {},
  extra: string[] = []
): string => {
  const base = element ? `${block}__${element}` : block
  const classList = [base]

  for (const [key, value] of Object.entries(mods)) {
    if (typeof value === "string") {
      classList.push(`${base}_${key}-${value}`)
    } else if (value === true) {
      classList.push(`${base}_${key}`)
    }
  }

  return classList.concat(extra).join(" ")
}

export { bem }
