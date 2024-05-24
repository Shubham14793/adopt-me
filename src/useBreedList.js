import fetchBreedList from "./fetchBreedList";
import { useQuery } from "@tanstack/react-query";

export default function useBreedList(animal) {
  const results = useQuery(['animal-breed-list', animal], fetchBreedList);
  return [results?.data?.breeds ?? [], results.status];
}
