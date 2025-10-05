import React, { useState, useEffect } from "react";
import { useCharacterSheet } from "./CharacterSheet";

export function NamedEditableField({ propertyName, type = "text", style }) {
  const { sheet, updateSheet } = useCharacterSheet();

  const value = sheet[propertyName];

  return (
    <EditableField
      value={value}
      type={type}
      style={style}
      onChange={(v) => {
        if (v.toString().length === 0) return;

        const parsed = type === "number" ? Number(v) : v;

        updateSheet({ [propertyName]: parsed });
      }}
    />
  );
}

export function EditableField({ value, onChange, type = "text", style }) {
  const [editing, setEditing] = useState(false);
  const [temp, setTemp] = useState(value);

  // Sync temp with value whenever value changes
  useEffect(() => {
    setTemp(value);
  }, [value]);

  return editing ? (
    <input
      type={type}
      value={temp}
      onChange={(e) => setTemp(e.target.value)}
      onBlur={() => {
        setEditing(false);
        onChange(temp);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          setEditing(false);
          onChange(temp);
        }
      }}
      style={{
        width: `${String(temp).length + 1}ch`,
        fontSize: "inherit",
        fontWeight: "inherit",
        color: "inherit",
        background: "transparent",
        border: "1px solid rgba(255,255,255,0.3)",
        borderRadius: "4px",
        padding: "0",
        textAlign: "center",
        outline: "none",
        ...style,
      }}
      autoFocus
    />
  ) : (
    <span
      onClick={() => setEditing(true)}
      style={{ cursor: "pointer", borderBottom: "1px dotted gray", ...style }}
      title="Click to edit"
    >
      {value}
    </span>
  );
}
