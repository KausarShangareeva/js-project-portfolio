import { Tag } from "../../../assets/Tag/TagComponent";

export default function ProjectTags({ tags }) {
  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {tags.map((tag) => (
        <Tag key={tag} tagName={tag} />
      ))}
    </div>
  );
}
