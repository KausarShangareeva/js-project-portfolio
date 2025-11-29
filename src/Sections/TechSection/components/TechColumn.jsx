import { TechTagItem } from "./TechTagItem";
import { TechTagList } from "./TechTagList";

export function TechColumn({ tag }) {
  if (!tag) return null;

  return (
    <div>
      <TechTagItem title={tag.tagitem} />
      <TechTagList tags={tag.taglist} />
    </div>
  );
}
