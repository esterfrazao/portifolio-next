import axios from "axios";
import { createContext, useContext, useState } from "react";
import { IProps } from "../interfaces/reactProps.interface";

interface IProject {
  id: string;
  name: string;
  html_url: string;
  description: string;
  language: string;
  updated_at: string;
  fork: boolean;
}

interface IRepoContext {
  repositories: IProject[];
}

const RepositorieContext = createContext<IRepoContext>({ repositories: [] });

export function RepositorieProvider({ children }: IProps) {
  const [repositories, setRepositories] = useState<IProject[]>([]);

  axios
    .get("https://api.github.com/users/esterfrazao/repos")
    .then((res) => setRepositories(res.data));

  return (
    <RepositorieContext.Provider value={{ repositories }}>
      {children}
    </RepositorieContext.Provider>
  );
}

export const useRepositories = () => useContext(RepositorieContext);
