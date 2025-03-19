import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  fill?: string;
  size?: number;
  height?: number;
  width?: number;
};
