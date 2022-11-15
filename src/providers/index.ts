import { ReactNode } from "react";
import { RepositorieProvider } from "./repositories";

export interface IProps {
  children: ReactNode;
}

export default function APIProvider({ children }: IProps) {
  return RepositorieProvider({ children });
}
