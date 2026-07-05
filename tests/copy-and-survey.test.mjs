import assert from "node:assert/strict"
import { readdir, readFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { painPoints } from "../src/lib/copy.js"
import { routeSurvey, routes, surveyQuestions } from "../src/lib/survey.js"

const bannedWords = [
  "innovative",
  "seamless",
  "robust",
  "leverage",
  "synergy",
  "utilize",
  "revolutionize",
  "transforming",
  "elevating",
  "comprehensive",
  "cutting-edge",
  "state-of-the-art",
]

assert.equal(surveyQuestions.length, 5)
assert.equal(painPoints.length, 6)

assert.equal(
  routeSurvey({ organization: "nonprofit", funding: "sales", hours: "grant-writing", mascot: "no", technical: "managed" }),
  routes.grant,
)
assert.equal(
  routeSurvey({ organization: "social-purpose", funding: "sales", hours: "operations", mascot: "yes", technical: "self-run" }),
  routes.steward,
)
assert.equal(
  routeSurvey({ organization: "other", funding: "mix", hours: "content", mascot: "yes", technical: "self-run" }),
  routes.build,
)
assert.equal(
  routeSurvey({ organization: "individual", funding: "sales", hours: "content", mascot: "no", technical: "self-run" }),
  routes.insider,
)

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(dir, entry.name)
      return entry.isDirectory() ? collectFiles(fullPath) : fullPath
    }),
  )
  return files.flat()
}

const srcDir = fileURLToPath(new URL("../src", import.meta.url))
const sourceFiles = (await collectFiles(srcDir)).filter((file) =>
  /\.(js|css)$/.test(file),
)

const storagePattern = /(localStorage|sessionStorage)/
for (const file of sourceFiles) {
  const content = await readFile(file, "utf8")
  assert.equal(storagePattern.test(content), false, `${file} should not use browser storage`)
  for (const word of bannedWords) {
    const pattern = new RegExp(`\\b${word}\\b`, "i")
    assert.equal(pattern.test(content), false, `${file} includes banned copy word: ${word}`)
  }
}

console.log("copy and survey checks passed")
