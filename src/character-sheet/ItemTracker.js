import React from "react";

export function ItemTracker({
  value,
  onChange,
  style,
  lines = 3,
  max,
  element,
  pastTense,
}) {
  const [editing, setEditing] = React.useState(false);
  const [temp, setTemp] = React.useState(value || "");

  React.useEffect(() => setTemp(value || ""), [value]);

  // Split into non-empty lines for numbering
  const items = temp
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "1em",
        ...style,
      }}
    >
      {editing ? (
        <textarea
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
          onBlur={() => {
            setEditing(false);
            if (onChange) onChange(temp);
          }}
          autoFocus
          rows={Math.max(lines, 3)}
          style={{
            width: "100%",
            resize: "vertical",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "4px",
            padding: "0.25em",
            font: "inherit",
            color: "inherit",
          }}
        />
      ) : (
        <div
          onClick={() => setEditing(true)}
          style={{
            cursor: "text",
            whiteSpace: "pre-wrap",
            minHeight: `${lines}em`,
            fontFamily: "inherit",
          }}
        >
          {items.length > 0
            ? items.map((line, i) => `${i + 1}. ${line}`).join("\n")
            : "..."}
        </div>
      )}
      <small
        style={{
          color:
            items.length > max
              ? "red"
              : items.length === max
              ? "yellow"
              : "lightgray",
          marginTop: "0.25em",
        }}
      >
        {max
          ? `${items.length}/${max} ${element}${
              items.length !== 1 ? "s" : ""
            } ${pastTense}`
          : `${items.length} ${element}${
              items.length !== 1 ? "s" : ""
            } ${pastTense}`}{" "}
        {items.length > max ? `- Enumbered` : ""}
      </small>
    </div>
  );
}
