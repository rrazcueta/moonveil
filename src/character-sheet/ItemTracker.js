import React from "react";

const keywordData = {
  protected: "+1 Limit",
  evasive: "When Pocket is Even, +1 Evade",
  breakable: "Breaks on Critical",
  resist: "Reduce incoming Damage",
  poised: "Can roll Pocket when Moving",
};

export function ItemTracker({
  value,
  onChange,
  style,
  lines = 3,
  max,
  element,
  pastTense,
  onKeywordsChange,
  showIndex = true,
}) {
  const [editing, setEditing] = React.useState(false);
  const [temp, setTemp] = React.useState(value || "");

  React.useEffect(() => setTemp(value || ""), [value]);

  // Split into non-empty lines for numbering
  const items = temp
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  // Extract detected keywords for parent use
  React.useEffect(() => {
    if (!onKeywordsChange) return;
    const found = Object.keys(keywordData).filter((word) =>
      new RegExp(`\\b${word}\\b`, "i").test(temp)
    );
    onKeywordsChange(found);
  }, [temp, onKeywordsChange]);

  function highlightKeywords(text) {
    const parts = text.split(/(\b)/); // keep word boundaries
    return parts.map((part, i) => {
      const key = Object.keys(keywordData).find(
        (word) => word.toLowerCase() === part.toLowerCase()
      );
      if (key && onKeywordsChange) {
        return (
          <span
            key={i}
            title={keywordData[key]} // built-in browser tooltip
            style={{
              color: "#ffd166",
              fontWeight: "bold",
              cursor: "help",
              textDecoration: "underline dotted",
            }}
          >
            {part}
          </span>
        );
      }
      return part;
    });
  }

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
            ? items.map((line, i) => (
                <div key={i}>
                  {showIndex ? <strong>{i + 1}.</strong> : <></>}{" "}
                  {highlightKeywords(line)}
                </div>
              ))
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
