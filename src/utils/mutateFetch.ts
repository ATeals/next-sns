type MutationMethod = "DELETE" | "PATCH" | "POST" | "PUT";

interface mutateOption<T> {
  method?: MutationMethod;
  body?: T;
}

const mutateFetch = async <T>(
  url: string,
  { method = "POST", body }: mutateOption<T>
): Promise<T | void> => {
  try {
    const response = await fetch(url, {
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
      method: method,
    });
    const json = await response.json();
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return json;
  } catch (error) {
    throw error;
  }
};

export default mutateFetch;
