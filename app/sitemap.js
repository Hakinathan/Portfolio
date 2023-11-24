const url = "https://nathan-lemoine.be";

export default function sitemap() {
  return [
    {
      url: url,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
