import useSWR from "swr";
import StyledLink from "@/components/Link";
import styled from "styled-components";

export default function ProductList() {
  const { data, isLoading, mutate } = useSWR("/api/products");

  async function handleDelete(id) {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      mutate();
    }
  }

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {!data && <h1>No products found</h1>}
      {data && (
        <StyledList>
          {data.map((product) => (
            <li key={product._id}>
              <StyledLink href={`/${product._id}`}>{product.name}</StyledLink>
              <StyledButton onClick={() => handleDelete(product._id)}>
                Delete
              </StyledButton>
            </li>
          ))}
        </StyledList>
      )}
    </>
  );
}

const StyledHeading = styled.h2`
  text-align: center;
  color: var(--color-nemo);
`;

const StyledList = styled.ul`
  list-style-type: none;
  display: grid;
  gap: 1rem;
  justify-items: center;
  padding: 0;
`;
const StyledButton = styled.button`
  background-color: var(--color-nemo);
  color: var(--color-foam);
  border: none;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
`;
