export interface Profile {
  name: string;
  title: string;
  location: ProfileLocation;
  images: ProfileImages;
  social_media: ProfileSocialMedia[];
}

export interface ProfileLocation {
  country: string;
  province: string;
  city: string;
}

export interface ProfileImages {
  profile_path: string;
}

export interface ProfileSocialMedia {
  name: string;
  icon: string;
  value: string;
  url: string;
}
