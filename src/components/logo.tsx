import type { ComponentProps } from "react";

export function Logo(props: Pick<ComponentProps<"img">, "className">) {
  return (
    <img
      src="https://u4d6xf5i5b.ufs.sh/f/6kGNuz9TajAxEJB4CjAGwJ9PSBoW0YuCK1iDGROyFLzNgX3H"
      width="24"
      height="24"
      className={props.className}
    />
  );
}
