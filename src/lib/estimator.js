export const getAllItems = (groups) => groups.flatMap((g) => g.items);

export const calcTimeline = (count) => {
  if (count === 0) return null;
  if (count <= 3) return "2–4 weeks";
  if (count <= 8) return "4–8 weeks";
  return "8–12 weeks";
};

export const formatMoney = (n) => `$${n.toLocaleString("en-US")}`;

export const calcTotal = (items, multiplier = 1) =>
  Math.round(items.reduce((sum, i) => sum + i.price, 0) * multiplier);

export const buildBriefMailto = ({ email, items, platform, total }) => {
  const lines = [
    "Hi Kivro team,",
    "",
    "I want to build an app with these features:",
    ...items.map((i) => `- ${i.label} ($${i.price})`),
    "",
    `Platform: ${platform}`,
    `Ballpark total: ${formatMoney(total)}`,
  ];
  return `mailto:${email}?subject=${encodeURIComponent("Project brief — ballpark estimate")}&body=${encodeURIComponent(lines.join("\n"))}`;
};