import './BlogSection.css';

export default function BlogSection() {
  const blogs = [
    {
      title: "Cheapest Way to Book Flights With Points",
      desc: "An in-depth guide on analyzing award graphs and finding the absolute lowest benchmarks for your dream trips.",
      link: "/cheapest-way-to-book-flight-with-points"
    },
    {
      title: "Are NYC to London Miles Worth It?",
      desc: "A specific route breakdown showing when to use cash versus when to blow 60k points to fly upper class to the UK.",
      link: "/nyc-to-london-miles-worth-it"
    },
    {
      title: "How to Save Miles & Avoid Overpaying",
      desc: "Stop spending 30% more than you need to. Learn how searching 25+ airline programs can double your rewards value.",
      link: "/how-to-save-miles"
    }
  ];

  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="blog-header">
          <h2 className="blog-title">Travel Tips & Insights</h2>
          <p className="blog-subtitle">Discover expert advice on maximizing your miles and finding the best flight deals.</p>
        </div>

        <div className="blog-grid">
          {blogs.map((blog, idx) => (
            <div key={idx} className="blog-card">
              <div className="blog-image-placeholder">
                <span className="blog-image-text">Flightpoints Insight</span>
              </div>
              <div className="blog-content">
                <h3 className="blog-card-title">{blog.title}</h3>
                <p className="blog-card-desc">{blog.desc}</p>
                <div className="blog-card-footer">
                  <span className="blog-time">7 min read</span>
                  <a href={blog.link} className="blog-read-more">Read article →</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="blog-action">
          <button className="btn-secondary">Read More Articles →</button>
        </div>
      </div>
    </section>
  );
}
