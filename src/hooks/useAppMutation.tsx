import {
  useMutation,
  UseMutationOptions,
  MutationKey,
  MutationFunction,
} from "@tanstack/react-query";

export function useAppMutation<TData, TError, TVariables>(
  mutationFn: MutationFunction<TData, TVariables>,
  options?: Omit<UseMutationOptions<TData, TError, TVariables>, "mutationFn">
) {
  const mutationKey: MutationKey = [mutationFn.name];

  return useMutation<TData, TError, TVariables>({
    ...options,
    mutationFn, // Provide the mutation function directly
    onSuccess: (data, variables, context) => {
      console.log("Mutation success:", data);
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error, variables, context) => {
      console.error("Mutation error:", error);
      options?.onError?.(error, variables, context);
    },
  });
}
