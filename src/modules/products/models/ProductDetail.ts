export interface ProductDetailRequest {
  id: string
}

export interface ProductDetailResponse {
  id: number
  name: string
  description: string
  alternateNames: AlternateName[]
  localisedData: LocalisedDatum[]
  gender: string
  productCode: string
  pdpLayout: string
  brand: Brand
  sizeGuide: null
  sizeGuideApiUrl: null
  isNoSize: boolean
  isOneSize: boolean
  isInStock: boolean
  countryOfManufacture: null
  hasVariantsWithProp65Risk: boolean
  webCategories: unknown[]
  variants: Variant[]
  media: Media
  badges: unknown[]
  info: Info
  shippingRestriction: null
  price: Price
  isDeadProduct: boolean
  rating: null
  productType: ProductType
  plpIds: PlpID[]
  baseUrl: string
}

export interface AlternateName {
  locale: string
  title: string
}

export interface Brand {
  brandId: number
  name: string
  description: string
}

export interface Info {
  aboutMe: string
  sizeAndFit: null
  careInfo: string
}

export interface LocalisedDatum {
  locale: string
  title: string
  pdpUrl: string
}

export interface Media {
  images: Image[]
  catwalk: unknown[]
  spinset: unknown[]
  swatchSprite: unknown[]
}

export interface Image {
  url: string
  type: string
  colourWayId: number | null
  colourCode: string
  colour: string
  isPrimary: boolean
}

export interface PlpID {
  id: number
  type: string
}

export interface Price {
  current: Current
  previous: Current
  rrp: Current
  xrp: Current
  currency: string
  isMarkedDown: boolean
  isOutletPrice: boolean
  startDateTime: Date
  previousEndDate: null
  lowestPriceInLast30DaysValue: null
  lowestPriceInLast30DaysText: null
  lowestPriceInLast30DaysEndDate: null
  lowestPriceInLast30DaysPercentage: null
  wasPriceStartDate: null
}

export interface Current {
  value: number | null
  text: string
  versionId: string
  conversionId: string
}

export interface ProductType {
  id: number
  name: string
}

export interface Variant {
  id: number
  name: string
  sizeId: number
  brandSize: string
  sizeDescription: string
  displaySizeText: string
  sizeOrder: number
  sku: string
  isLowInStock: boolean
  isInStock: boolean
  isAvailable: boolean
  colourWayId: number
  colourCode: null
  colour: string
  price: Price
  isPrimary: boolean
  isProp65Risk: boolean
  ean: null
  seller: null
}
