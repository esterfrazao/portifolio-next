import { IProps } from "../interfaces/reactProps.interface";
import { RepositorieProvider } from "./repositories";

export function APIProvider({ children }: IProps) {
  return RepositorieProvider({ children });
}
