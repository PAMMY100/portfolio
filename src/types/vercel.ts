export interface VercelProject {
  id: string;
  name: string;
  framework?: string;
  createdAt: number;
  updatedAt: number;
  latestDeployments?: {
    url: string;
    screenshot?: string;
  }[];
}

export interface VercelProjectsResponse {
  projects: VercelProject[];
  pagination: {
    count: number;
    next: number | null;
    prev: number | null;
  };
}
