import styled, { css } from "styled-components";

interface CardContainerProps {
  isSelected: boolean;
}

export const CardContainer = styled.button<CardContainerProps>`
  position: relative;
  cursor: pointer;
  max-width: 20rem;
  width: 100%;
  height: 6rem;

  background: ${({ theme }) => theme.colors.gray};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px transparent;
  border-radius: 5px;

  ${({ isSelected }) => isSelected && css`
    border: 1px solid ${({ theme }) => theme.colors.green};
  `}

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    text-align: center;
    font-weight: 500;
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors["light-gray"]};
  }
`;

export const SelectedContainer = styled.div` 
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray};
  border: 1px solid ${({ theme }) => theme.colors.green};
  border-radius: 1000px;
  position: absolute;
  top: -1rem;
  left: -1rem;

  svg {
    color: ${({ theme }) => theme.colors.green};
  }
`;