export const BaseApiFetch: typeof useFetch = (request, opts?) => {
  const config = useRuntimeConfig();
  const token = useCookie("token");

  let headers = {
    Authorization: `Token ${token.value}`,
    "Content-Type": "application/json",
  };

  if (opts)
    opts["headers"] = opts["headers"]
      ? { ...opts["headers"], ...headers }
      : headers;
  return useFetch(request, { baseURL: config.public.baseURL, ...opts });
};
