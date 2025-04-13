export interface SidebarProps {
  class?: string;
  sectionRouteItems: SectionRouteItem[];
}

export interface NavbarProps {
  sectionRouteItems: SectionRouteItem[];
}

export interface SectionRouteItem {
  name: string;
  icon: string;
  path: string;
}
