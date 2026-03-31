export interface ProjectInterface {
  id: number;
  name: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  links: { demo: string; github: string };
}
