// Centralized navigation enum for use in header, footer, and shared components
export enum NavigationLink {
  ABOUT = "about",
  PRACTICAL_INFO = "practical-info",
  GAME_MODES = "game-modes",
  EVENTS = "events",
  BLOG = "blog",
  PRICING = "pricing",
  LOCATIONS = "locations",
  CONTACT = "contact",
  FAQ = "faq",
  TERMS_OF_SERVICE = "terms-of-service",
  PRIVACY_POLICY = "privacy-policy",
  CAREERS = "careers",
  SOCIALS = "socials"
}

export const NAVIGATION_LABEL_KEYS: Record<NavigationLink, string> = {
  [NavigationLink.ABOUT]: "nav.about",
  [NavigationLink.PRACTICAL_INFO]: "nav.practical_info",
  [NavigationLink.GAME_MODES]: "nav.game_modes",
  [NavigationLink.EVENTS]: "nav.events",
  [NavigationLink.BLOG]: "nav.blog",
  [NavigationLink.PRICING]: "nav.pricing",
  [NavigationLink.LOCATIONS]: "nav.locations",
  [NavigationLink.CONTACT]: "nav.contact",
  [NavigationLink.FAQ]: "nav.faq",
  [NavigationLink.TERMS_OF_SERVICE]: "nav.terms_of_service",
  [NavigationLink.PRIVACY_POLICY]: "nav.privacy_policy",
  [NavigationLink.CAREERS]: "nav.careers",
  [NavigationLink.SOCIALS]: "nav.socials"
};

export const NAVIGATION_PATHS: Record<NavigationLink, string> = {
  [NavigationLink.ABOUT]: "/about",
  [NavigationLink.PRACTICAL_INFO]: "/practical-info",
  [NavigationLink.GAME_MODES]: "/game-modes",
  [NavigationLink.EVENTS]: "/events",
  [NavigationLink.BLOG]: "/blog",
  [NavigationLink.PRICING]: "/pricing",
  [NavigationLink.LOCATIONS]: "/locations",
  [NavigationLink.CONTACT]: "/contact",
  [NavigationLink.FAQ]: "/faq",
  [NavigationLink.TERMS_OF_SERVICE]: "/terms-of-service",
  [NavigationLink.PRIVACY_POLICY]: "/privacy-policy",
  [NavigationLink.CAREERS]: "/careers",
  [NavigationLink.SOCIALS]: "https://linktr.ee/wild_arena_ch"
}
