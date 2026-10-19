export interface ProjectRow {
  id: string;
  title: string;
  project_type: string;
  location: string | null;
  status: string;
  client_name: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectFileRow {
  id: string;
  category: string;
  version: string;
  description: string | null;
  storage_path: string;
  file_name: string;
  file_size: number;
  created_at: string;
  signedUrl?: string | null;
}

export interface ProjectUpdateRow {
  id: string;
  title: string;
  body: string | null;
  attachment_path: string | null;
  created_at: string;
}
