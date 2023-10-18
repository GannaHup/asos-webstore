export interface ProductListRequest {
  q: string
  offset: number
}

export interface ProductListResponse {
  searchTerm: string
  categoryName: null
  itemCount: number
  redirectUrl: string
  products: Product[]
  facets: Facet[]
  diagnostics: Diagnostics
  searchPassMeta: SearchPassMeta
  queryId: null
  discoverSearchProductTypes: unknown[]
  campaigns: Campaigns
}

export interface Campaigns {
  imageTiles: unknown[]
  promoBanners: unknown[]
  sponsoredProducts: unknown[]
}

export interface Diagnostics {
  requestId: string
  processingTime: number
  queryTime: number
  recommendationsEnabled: boolean
  recommendationsAnalytics: RecommendationsAnalytics
  advertisementsEnabled: boolean
  advertisementsAnalytics: AdvertisementsAnalytics
}

export interface AdvertisementsAnalytics {
  status: number
  customerOptIn: boolean
  numberOfItemsFromPartner: number
  items: unknown[]
  itemsFromPartner: unknown[]
  placementBeacons: PlacementBeacons
}

export interface PlacementBeacons {
  onLoadBeacon: null
  onViewBeacon: null
}

export interface RecommendationsAnalytics {
  personalisationStatus: number
  numberOfItems: number
  numberOfRecs: number
  personalisationType: string
  experimentTrackerkey: string
  items: unknown[]
}

export interface Facet {
  id: string
  name: string
  facetValues: FacetValue[]
  displayStyle: string
  facetType: string
  hasSelectedValues: boolean
}

export interface FacetValue {
  count: number
  id: string
  name: string
  isSelected: boolean
}

export interface Product {
  id: number
  name: string
  price: Price
  colour: string
  colourWayId: number
  brandName: string
  hasVariantColours: boolean
  hasMultiplePrices: boolean
  groupId: number | null
  productCode: number
  productType: string
  url: string
  imageUrl: string
  additionalImageUrls: string[]
  videoUrl: null | string
  showVideo: boolean
  isSellingFast: boolean
  sponsoredCampaignId: null
  facetGroupings: FacetGrouping[]
  advertisement: null
}

export interface FacetGrouping {
  products: FacetGroupingProduct[]
  type: string
}

export interface FacetGroupingProduct {
  productId: number
}

export interface Price {
  current: Current
  previous: Current
  rrp: Current
  isMarkedDown: boolean
  isOutletPrice: boolean
  currency: string
}

export interface Current {
  value: number | null
  text: string
}

export interface SearchPassMeta {
  isPartial: boolean
  isSpellcheck: boolean
  searchPass: SearchPass[]
  alternateSearchTerms: unknown[]
}

export interface SearchPass {
  name: string
  numberOfResults: number
}
