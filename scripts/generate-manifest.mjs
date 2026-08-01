import { readdirSync, writeFileSync } from "node:fs"

try {
  const productImageFiles = readdirSync(new URL("../public/products", import.meta.url))
  writeFileSync(
    new URL("../config/product-image-manifest.json", import.meta.url),
    `${JSON.stringify(productImageFiles.sort(), null, 2)}\n`,
  )
  console.log(`Successfully generated product-image-manifest.json with ${productImageFiles.length} images.`)
} catch (err) {
  console.warn("Could not generate product-image-manifest.json:", err)
}
