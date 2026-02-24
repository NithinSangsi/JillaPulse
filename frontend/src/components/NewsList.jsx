function truncate(text, limit = 120) {
  if (!text) return "";
  return text.length > limit ? text.substring(0, limit) + "..." : text;
}

function NewsList({ news }) {

  const firstTen = news.slice(0, 10);

 return (
  <div className="news-container">
    <div className="news-grid-fixed">
      {firstTen.map((article, index) => (
        <div key={index} className="news-card">

          {article.image && (
            <img
              src={article.image}
              alt="news"
              className="news-image"
              onError={(e) => e.target.style.display = "none"}
            />
          )}

          <div className="news-content">
            <h3>{truncate(article.title, 80)}</h3>
            <p>{truncate(article.description, 140)}</p>
            <a href={article.link} target="_blank" rel="noreferrer">
              Read More →
            </a>
          </div>

        </div>
      ))}
    </div>

  </div>
);
}

export default NewsList;