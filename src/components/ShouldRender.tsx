import React, { type PropsWithChildren } from "react";

type ShouldRenderProps = PropsWithChildren & {
  isVisible: boolean;
};

const ShouldRender: React.FC<ShouldRenderProps> = ({ isVisible, children }) => {
  return <div>{isVisible && <>{children}</>}</div>;
};

export default ShouldRender;
