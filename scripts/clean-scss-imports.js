import fs from "fs"
import { glob } from "glob"

const files = glob.sync("dist/tmp-types/**/*.d.ts")

for (const file of files) {
  const content = fs.readFileSync(file, "utf-8")

  const cleaned = content.replace(
    /^\s*import\s+['"][^'"]+\.scss['"];?\s*$/gm,
    ""
  )

  fs.writeFileSync(file, cleaned, "utf-8")
}
