import LeftContentBlock from "./LeftContentBlock";
import LeftContentBlock2 from "./LeftContentBlock2";
import RightContentBlock from "./RightContentBlock";
import RightContentBlock2 from "./RightContentBlock2";
import { ContentBlockProps } from "./types";

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if (props.type === "right2") return <RightContentBlock2 {...props} />;
  if (props.type === "left2") return <LeftContentBlock2 {...props} />;
  return null;
};

export default ContentBlock;
