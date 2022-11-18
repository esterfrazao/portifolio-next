import axios from "axios";
import { createContext, useContext, useState } from "react";
import { IProps } from "../interfaces/reactProps.interface";

interface IProject {
  id: string;
  name: string;
  html_url: string;
  description: string;
  languages_url: string;
  updated_at: string;
  fork: boolean;
  homepage: string;
}

interface IRepoContext {
  repositories: IProject[];
  getLanguages: Function;
}

const RepositorieContext = createContext<IRepoContext>({
  repositories: [],
  getLanguages: () => {},
});

export function RepositorieProvider({ children }: IProps) {
  const [repositories, setRepositories] = useState<IProject[]>([]);

  axios
    .get("https://api.github.com/users/esterfrazao/repos")
    .then((res) => setRepositories(res.data));

  async function getLanguages(url: string) {
    return axios.get(url).then((res) => Object.keys(res.data));
  }

  return (
    <RepositorieContext.Provider value={{ repositories, getLanguages }}>
      {children}
    </RepositorieContext.Provider>
  );
}

export const useRepositories = () => useContext(RepositorieContext);
