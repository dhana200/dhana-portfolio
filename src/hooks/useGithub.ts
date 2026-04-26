import { useEffect, useState } from "react";

interface Repository {
  id: number;
  name: string;
  description: string;
}

export const useGithub = () => {
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/dhana200/repos")
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  return { repos };
};