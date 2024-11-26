import "/src/styles/Article.css";

const articles = [
  {
    id: 1,
    title: "Understanding Menstrual Health",
    description: "A comprehensive guide to understanding your menstrual cycle.",
    link: "https://www.medicalnewstoday.com/articles/154699",
  },
  {
    id: 2,
    title: "Top 10 Yoga Exercises for Menstrual Pain",
    description: "Watch this video to help alleviate menstrual cramps.",
    link: "https://www.youtube.com/watch?v=3YzSpRncW4s",
  },
  {
    id: 3,
    title: "The Science Behind Mood Swings",
    description: "Explore the hormonal changes during menstruation.",
    link: "https://drbrighten.com/how-hormones-affect-mood-throughout-menstrual-cycle/",
  },
  {
    id: 4,
    title: "Hydration Tips for a Healthy Cycle",
    description: "How water consumption impacts your menstrual health.",
    link: "https://www.bing.com/ck/a?!&&p=178ac0caa233c55e129b6718e81a21d275d0e3ac52d81fcc043956c3aaad8c54JmltdHM9MTczMjQwNjQwMA&ptn=3&ver=2&hsh=4&fclid=02c5a7c5-e48b-65a3-337f-b2c9e55e642e&psq=Hydrate+tips+for+healthy+cycle&u=a1aHR0cHM6Ly93d3cuY3ljbGVwbGFuLmNvLnVrL2N5Y2xlLXNhdnZ5L2hvdy10by1zdGF5LWh5ZHJhdGVkLXdoaWxlLWN5Y2xpbmcvIzp-OnRleHQ9SG93JTIwdG8lMjBzdGF5JTIwaHlkcmF0ZWQlMjB3aGlsZSUyMGN5Y2xpbmclM0ElMjBvdXIlMjB0b3AsZWxlY3Ryb2x5dGVzJTIwLi4uJTIwNSUyMFByYWN0aWNlJTIwaHlkcmF0aW9uJTIwdGhyb3VnaCUyMHRyYWluaW5nJTIw&ntb=1",
  },
  {
    id: 5,
    title: "Common Myths About Menstruation",
    description: "Debunking popular myths and misconceptions about periods.",
    link: "https://www.bing.com/ck/a?!&&p=5c41f4e6c785fed415152e31d287cea716625310d4552e26dc8ed129373e9d4bJmltdHM9MTczMjQwNjQwMA&ptn=3&ver=2&hsh=4&fclid=02c5a7c5-e48b-65a3-337f-b2c9e55e642e&psq=common+myths+about+menstruation&u=a1aHR0cHM6Ly9oYWxpYS5jby9ibG9ncy9mZWF0dXJlZC9tZW5zdHJ1YWwtbXl0aHMtYW5kLW1pc2NvbmNlcHRpb25zLWFib3V0LXBlcmlvZHM&ntb=1",
  },
  {
    id: 6,
    title: "Foods to Eat During Your Period",
    description: "Nutrition tips to maintain energy and reduce period pain.",
    link: "https://www.bing.com/ck/a?!&&p=ee2c2b8622cd45dcb5bd8e64669e7a110fa764c0587ec274e24e2c179230d160JmltdHM9MTczMjQwNjQwMA&ptn=3&ver=2&hsh=4&fclid=02c5a7c5-e48b-65a3-337f-b2c9e55e642e&psq=foods+to+eat+during+period&u=a1aHR0cHM6Ly93d3cuaGVhbHRobGluZS5jb20vaGVhbHRoL3dvbWVucy1oZWFsdGgvd2hhdC10by1lYXQtZHVyaW5nLXBlcmlvZA&ntb=1",
  },
  {
    id: 7,
    title: "Tracking Your Cycle Effectively",
    description: "A guide to using apps and other tools for cycle tracking.",
    link: "https://www.bing.com/ck/a?!&&p=e44a43b5e94b8404068154f94e46f7f9467de5b311233f89b9a27aa9991c9f82JmltdHM9MTczMjQwNjQwMA&ptn=3&ver=2&hsh=4&fclid=02c5a7c5-e48b-65a3-337f-b2c9e55e642e&psq=tracking+your+cycle+effectively&u=a1aHR0cHM6Ly9mbG8uaGVhbHRoL21lbnN0cnVhbC1jeWNsZS9ob3ctdG8tdHJhY2steW91ci1wZXJpb2QjOn46dGV4dD1UcmFja2luZyUyMHlvdXIlMjBjeWNsZSUyMGNhbiUyMGJlJTIwZG9uZSUyMHVzaW5nJTIwYW4sYXJlJTJDJTIwYW5kJTIwYW55JTIwc3ltcHRvbXMlMjB5b3UlMjBub3RpY2UlMjAlMjhlLmcuJTJDJTIwY3JhbXBzJTI5Lg&ntb=1",
  },
  {
    id: 8,
    title: "How to Talk About Periods Openly",
    description: "Breaking the stigma and starting conversations about menstruation.",
    link: "https://www.youtube.com/watch?v=qm0isl11BfY",
  },
  {
    id: 9,
    title: "Exercises to Avoid During Menstruation",
    description: "Understanding what physical activities might be too intense.",
    link: "https://www.youtube.com/watch?v=gA8LEqRXAVk",
  },
  {
    id: 10,
    title: "Menstrual Hygiene ",
    description: "Best practices for maintaining hygiene during your period.",
    link: "https://www.youtube.com/watch?v=qFLElwY-SYE",
  },
];

const Article = () => {
  return (
    <div className="article-page">
      <h1>Articles</h1>
      <div className="articles-container">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="article-link"
            >
              Visit Link
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
