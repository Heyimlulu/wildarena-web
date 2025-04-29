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

export const NAVIGATION_LABELS: Record<NavigationLink, string> = {
  [NavigationLink.ABOUT]: "A propos",
  [NavigationLink.PRACTICAL_INFO]: "Infos pratiques",
  [NavigationLink.GAME_MODES]: "Modes de jeu",
  [NavigationLink.EVENTS]: "Événements",
  [NavigationLink.BLOG]: "Blog",
  [NavigationLink.PRICING]: "Tarifs",
  [NavigationLink.LOCATIONS]: "Nos arènes",
  [NavigationLink.CONTACT]: "Nous contacter",
  [NavigationLink.FAQ]: "FAQ",
  [NavigationLink.TERMS_OF_SERVICE]: "Conditions d'utilisation",
  [NavigationLink.PRIVACY_POLICY]: "Politique de confidentialité",
  [NavigationLink.CAREERS]: "Emplois",
  [NavigationLink.SOCIALS]: "Réseaux sociaux"
}

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
