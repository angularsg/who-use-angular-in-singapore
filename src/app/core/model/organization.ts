export interface Organization {
  // Required
  name: string;
  websiteUrl: string;
  description: string;
  logo?: string;
  publicUrl?: string;
  ngVersions: {
    angularjs?: boolean;
    angular?: boolean;
    ionic?: boolean;
  };
}
