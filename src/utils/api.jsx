const BASE_URL = "https://v2.api.noroff.dev/online-shop";

export async function fetchProducts() {
  const response = await fetch(`${BASE_URL}`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}
