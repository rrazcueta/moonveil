-- bold-uppercase.lua
-- Converts all bold text to uppercase, keeping bold

-- helper to escape LaTeX special chars
local function escape_latex(s)
  s = s:gsub("\\", "\\textbackslash{}")
  s = s:gsub("([#%%&$_{}])", "\\%1")
  s = s:gsub("%^", "\\textasciicircum{}")
  s = s:gsub("~", "\\textasciitilde{}")
  return s
end

function Strong(el)
  local text = pandoc.utils.stringify(el)
  text = escape_latex(text)
  return pandoc.RawInline('latex', '\\textbf{\\MakeUppercase{' .. text .. '}}')
end
