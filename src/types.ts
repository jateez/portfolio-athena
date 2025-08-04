export interface Experience {
  id: number;
  title: string;
  name: string;
  timeStart: string;
  timeEnd: string;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  techStacks: string[];
  repoUrl: string;
  appUrl: string;
  imageUrl: string;
  isOngoing: boolean;
  littleNote: string;
}

export interface FeaturedProject extends Project {
  id: number;
}
