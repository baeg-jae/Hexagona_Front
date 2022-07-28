import { css } from "@emotion/react";

export default function flex({
  justify = "center",
  align = "center",
  direction = "row",
  gap,
}) {
  return css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    flex-direction: ${direction};
    gap: ${gap};
  `;
}
