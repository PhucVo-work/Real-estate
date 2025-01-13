import { create } from 'zustand';

const useProjectStore = create((set) => ({
    projects: [],
    selectedProject: null,
    fetchProjects: async () => {
      try {
        const response = await fetch("https://dummyjson.com/c/ca4b-ae65-46a2-afa3");
        if (!response.ok) throw new Error("Failed to fetch projects");
        const data = await response.json();
        set({ projects: data });
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    },
    setSelectedProject: (project) => set({ selectedProject: project }),
  }));
  
export default useProjectStore;