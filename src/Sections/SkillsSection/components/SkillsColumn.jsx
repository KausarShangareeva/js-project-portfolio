import { SkillsTagItem } from "./SkillsTagItem";
import { SkillsTagList } from "./SkillsTagList";

export function SkillsColumn({ tag }) {
  if (!tag) return null;

  return (
    <div>
      <SkillsTagItem title={tag.tagitem} />
      <SkillsTagList tags={tag.taglist} />
    </div>
  );
}
