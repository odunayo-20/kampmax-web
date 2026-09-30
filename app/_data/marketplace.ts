import type { MarketplaceCategory, MarketplaceProduct } from "@/types/marketplace"

/**
 * Local mock marketplace data. Kept behind the helpers below rather than
 * read directly by components, so this can later be swapped for a
 * `kampmax-api` call without touching any presentation code.
 */
const categories: MarketplaceCategory[] = [
  { slug: "food-drinks", name: "Food & Drinks", enabled: true },
  { slug: "fashion", name: "Fashion", enabled: true },
  { slug: "electronics", name: "Electronics", enabled: true },
  { slug: "beauty", name: "Beauty & Personal Care", enabled: true },
  { slug: "books-supplies", name: "Books & School Supplies", enabled: true },
  { slug: "home-living", name: "Home & Living", enabled: true },
  { slug: "digital", name: "Digital Products", enabled: true },
  { slug: "agriculture", name: "Agriculture", enabled: false },
  { slug: "other", name: "Other", enabled: true },
]

const products: MarketplaceProduct[] = [
  {
    slug: "campus-snack-box",
    name: "Campus Snack Box",
    description:
      "An assorted box of snacks and drinks, put together for students who'd rather not leave campus for a run to the store.",
    categorySlug: "food-drinks",
    price: 3500,
    campusSlug: "unilag",
  },
  {
    slug: "ankara-tote-bag",
    name: "Ankara Tote Bag",
    description:
      "A handmade tote bag in Ankara print fabric, sized for textbooks, a laptop, or everyday essentials.",
    categorySlug: "fashion",
    price: 6000,
    campusSlug: "oau",
  },
  {
    slug: "refurbished-wireless-earbuds",
    name: "Refurbished Wireless Earbuds",
    description:
      "Tested, working wireless earbuds at a fraction of the retail price — a practical option for lectures and study sessions.",
    categorySlug: "electronics",
    price: 15000,
  },
  {
    slug: "shea-butter-skincare-set",
    name: "Shea Butter Skincare Set",
    description:
      "A set of shea-butter-based skincare essentials, made locally and sized for a hostel shelf.",
    categorySlug: "beauty",
    price: 4500,
    campusSlug: "ui",
  },
  {
    slug: "100-level-past-questions-bundle",
    name: "100 Level Past Questions Bundle",
    description:
      "A compiled set of past exam questions for first-year courses, shared by students who've already sat them.",
    categorySlug: "books-supplies",
    price: 2000,
    campusSlug: "futo",
  },
  {
    slug: "flyer-design-template-pack",
    name: "Flyer Design Template Pack",
    description:
      "A pack of editable flyer templates for campus events, society launches, and small business promotions.",
    categorySlug: "digital",
    price: 3000,
  },
  {
    slug: "custom-portrait-sketch",
    name: "Custom Portrait Sketch",
    description:
      "A made-to-order pencil portrait from a photo of your choice. Pricing depends on size and detail — reach out to discuss.",
    categorySlug: "other",
  },
]

/** All configured categories that are currently active. */
export function getEnabledCategories(): MarketplaceCategory[] {
  return categories.filter((category) => category.enabled)
}

/** A single category by slug, or `undefined` if it doesn't exist or is disabled. */
export function getCategoryBySlug(slug: string): MarketplaceCategory | undefined {
  return categories.find((category) => category.slug === slug && category.enabled)
}

/** All products whose category is currently active. */
export function getProducts(): MarketplaceProduct[] {
  const enabledSlugs = new Set(getEnabledCategories().map((category) => category.slug))
  return products.filter((product) => enabledSlugs.has(product.categorySlug))
}

/** A single product by slug, or `undefined` if it doesn't exist or its category is disabled. */
export function getProductBySlug(slug: string): MarketplaceProduct | undefined {
  return getProducts().find((product) => product.slug === slug)
}
