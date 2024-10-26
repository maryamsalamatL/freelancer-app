import { ThreeDots } from "react-loader-spinner";

export default function Loading({ width = 50, height = 50 }) {
  return (
    <ThreeDots
      visible={true}
      height={height}
      width={width}
      color="rgb(var(--color-primary-800))"
      radius="9"
      wrapperStyle={{ display: "flex", justifyContent: "center" }}
    />
  );
}
