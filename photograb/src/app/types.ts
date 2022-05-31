export type ImageSizes =
  | 'raw'
  | 'full'
  | 'regular'
  | 'small'
  | 'thumb'
  | 'small_s3';

export interface UnsplashRandomRoot {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: any;
  alt_description: any;
  urls: UnsplashRandomUrls;
  links: UnsplashRandomLinks;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: any;
  topic_submissions: UnsplashRandomTopicSubmissions;
  user: UnsplashRandomUser;
  exif: UnsplashRandomExif;
  location: Location;
  views: number;
  downloads: number;
}

export interface UnsplashRandomUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface UnsplashRandomLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface UnsplashRandomTopicSubmissions {}

export interface UnsplashRandomUser {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: any;
  portfolio_url: any;
  bio: any;
  location: any;
  links: UnsplashRandomLinks2;
  profile_image: UnsplashRandomProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: UnsplashRandomSocial;
}

export interface UnsplashRandomLinks2 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface UnsplashRandomProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface UnsplashRandomSocial {
  instagram_username: string;
  portfolio_url: any;
  twitter_username: any;
  paypal_email: any;
}

export interface UnsplashRandomExif {
  make: string;
  model: string;
  name: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}

export interface UnsplashRandomLocation {
  title: string;
  name: string;
  city: string;
  country: string;
  position: UnsplashRandomPosition;
}

export interface UnsplashRandomPosition {
  latitude: number;
  longitude: number;
}
