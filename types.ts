export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    name?: string;
    short_description?: string;
    full_description?: string;
    icon?: string;
    featured_image?: { url: string; imgix_url: string };
    key_features?: string[] | string;
  };
}

export interface PricingTier extends CosmicObject {
  type: 'pricing-tiers';
  metadata: {
    plan_name?: string;
    price?: number | string;
    billing_period?: string;
    description?: string;
    features?: string[] | string;
    cta_text?: string;
    highlighted?: boolean;
  };
}

export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name?: string;
    role?: string;
    bio?: string;
    photo?: { url: string; imgix_url: string };
    linkedin?: string;
    twitter?: string;
  };
}

export interface BlogPost extends CosmicObject {
  type: 'blog-posts';
  metadata: {
    title?: string;
    excerpt?: string;
    content?: string;
    featured_image?: { url: string; imgix_url: string };
    author?: TeamMember;
    published_date?: string;
  };
}

export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    client_name?: string;
    industry?: string;
    headline?: string;
    challenge?: string;
    solution?: string;
    results?: string;
    featured_image?: { url: string; imgix_url: string };
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    customer_name?: string;
    customer_role?: string;
    company?: string;
    quote?: string;
    avatar?: { url: string; imgix_url: string };
    rating?: number;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}