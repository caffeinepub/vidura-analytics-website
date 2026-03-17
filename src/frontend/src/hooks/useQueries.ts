import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ContactSubmission, SampleSubmission } from "../backend";
import { useActor } from "./useActor";

export function useGetSampleSubmissions() {
  const { actor, isFetching } = useActor();

  return useQuery<SampleSubmission[]>({
    queryKey: ["sampleSubmissions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getSampleSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetContactSubmissions() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactSubmission[]>({
    queryKey: ["contactSubmissions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getContactSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}
