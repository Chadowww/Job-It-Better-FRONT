export interface UserType {
  id: number | null;
  email: string | null;
  password: string | null;
  roles: number | null;
  is_verified: number | null;
  created_at: string | null;
  updated_at: string | null;
  firstname: string | null;
  lastname: string | null;
  phone: string | null;
  address: string | null;
  city: string | null;
  country: string | null;
  avatar: string | null;
  slug: string;
  coverLetter: string | null;
  user_id: number | null;
  linkedin: string | null;
  github: string | null;
  twitter: string | null;
  facebook: string | null;
  instagram: string | null;
  website: string | null;
}
