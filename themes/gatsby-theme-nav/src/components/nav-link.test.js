import { isSamePath } from "./nav-link"

describe("isSamePath", () => {
  it("is true for /,/", () => {
    expect(isSamePath("/", "/")).toBe(true)
  })
  it("is true for /en/recherche/plasma/,/en/recherche/plasma", () => {
    expect(isSamePath("/en/recherche/plasma/", "/en/recherche/plasma")).toBe(
      true
    )
  })
  it("is true for /en/recherche/plasma/,/en/recherche/plasma/", () => {
    expect(isSamePath("/en/recherche/plasma/", "/en/recherche/plasma/")).toBe(
      true
    )
  })
  it("is false for /fr/recherche/plasma/,/en/recherche/plasma/", () => {
    expect(isSamePath("/fr/recherche/plasma/", "/en/recherche/plasma/")).toBe(
      false
    )
  })
})
