import { useState } from "react";

interface UseMutationState<T> {
  data?: T;
  error?: unknown;
  isLoading: boolean;
}

type MutationMethod = "DELETE" | "PATCH" | "POST" | "PUT";

type UseMutationResult<T> = {
  mutate: (url: string, method: MutationMethod, body?: any) => Promise<T | void>;
  state: UseMutationState<T>;
};

interface UseMutationParameters {
  onSussess?: () => void;
  onError?: () => void;
}

export default function useMutation<T = any>({
  onSussess,
  onError,
}: UseMutationParameters = {}): UseMutationResult<T> {
  const [state, setState] = useState<UseMutationState<T>>({
    data: undefined,
    error: undefined,
    isLoading: false,
  });
  async function mutate(url: string, method: MutationMethod, body?: any): Promise<T | void> {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      const response = await fetch(url, {
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
        method: method,
      });
      const json = await response.json();
      setState((prev) => ({ ...prev, data: json }));
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      if (onSussess) onSussess();
      return json;
    } catch (error) {
      setState((prev) => ({ ...prev, error: error }));
      console.error(error);
      if (onError) onError();
      return;
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  }

  return { mutate, state };
}
