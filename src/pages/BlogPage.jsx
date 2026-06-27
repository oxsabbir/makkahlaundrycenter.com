import PageLayout from "../components/layout/PageLayout";

export default function BlogPage() {
  return (
    <PageLayout
      variant="default"
      title="Shared on THEMELOCK.COM - Pamar - Plumbing & Repair Service HTML Template - Blog"
      description="Pamar - Plumbing & Repair Service HTML Template"
    >
<div className="react-fragment">{/*==============================
    Breadcumb
============================== */}
  <div className="breadcumb-wrapper bg-mask " data-mask-src="/assets/img/shape/breadcumb-shape.png" data-bg-src="/assets/img/bg/breadcumb-bg.jpg">
    <div className="container">
      <div className="row">
        <div className="col-xxl-12">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title text-anim" data-cue="slideInUp" data-delay={100}>
              All Blogs </h1>
            <ul className="breadcumb-menu" data-cue="slideInUp" data-delay={300}>
              <li><a href="/">Home</a></li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>{/*==============================
Blog Area
==============================*/}
  <section className="th-blog-wrapper space">
    <div className="container">
      <div className="row gx-60">
        <div className="col-xl-8 col-lg-7">
          <div className="th-blog blog-single has-post-thumbnail" data-cue="slideInUp">
            <div className="blog-img position-relative">
              <a href="/blog/details"><img src="/assets/img/blog/blog-s-1-1.jpg" alt="Blog Image" /></a>
              <div className="blog-date">
                <h3>22</h3>
                <span>July</span>
              </div>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <a href="/blog" className="border1"><span>Kitchen Plumbing</span></a>
                <a href="/blog"><i className="fa-regular fa-comment" /> Comments (3)</a>
              </div>
              <h2 className="blog-title"><a href="/blog/details">Achieving calm minds from plumbing issues</a>
              </h2>
              <p className="blog-text">With transparent pricing, fast response times, and 24/7 emergency availability, we’re always here when you need us. Our customer-first approach means we treat every job with care, cleanliness, and professionalism. When you choose us, you're choosing plumbing done with integrity, efficiency, and peace of mind.</p>
              <a href="/blog/details" className="link-btn">
                Read More
                <span className="after-bg" />
              </a>
            </div>
          </div>
          <div className="th-blog blog-single has-post-thumbnail" data-cue="slideInUp">
            <div className="blog-img position-relative">
              <a href="/blog/details"><img src="/assets/img/blog/blog-s-1-2.jpg" alt="Blog Image" /></a>
              <div className="blog-date">
                <h3>26</h3>
                <span>July</span>
              </div>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <a href="/blog" className="border1"><span>Kitchen Plumbing</span></a>
                <a href="/blog"><i className="fa-regular fa-comment" /> Comments (3)</a>
              </div>
              <h2 className="blog-title"><a href="/blog/details">Achieving calm minds from plumbing issues</a>
              </h2>
              <p className="blog-text">With transparent pricing, fast response times, and 24/7 emergency availability, we’re always here when you need us. Our customer-first approach means we treat every job with care, cleanliness, and professionalism. When you choose us, you're choosing plumbing done with integrity, efficiency, and peace of mind.</p>
              <a href="/blog/details" className="link-btn">
                Read More
                <span className="after-bg" />
              </a>
            </div>
          </div>
          <div className="th-blog blog-single" data-cue="slideInUp">
            <div className="blog-content position-relative">
              <div className="blog-date">
                <h3>27</h3>
                <span>July</span>
              </div>
              <div className="blog-meta">
                <a href="/blog" className="border1"><span>Kitchen Plumbing</span></a>
                <a href="/blog"><i className="fa-regular fa-comment" /> Comments (3)</a>
              </div>
              <h2 className="blog-title"><a href="/blog/details">Achieving calm minds from plumbing issues</a>
              </h2>
              <p className="blog-text">With transparent pricing, fast response times, and 24/7 emergency availability, we’re always here when you need us. Our customer-first approach means we treat every job with care, cleanliness, and professionalism. When you choose us, you're choosing plumbing done with integrity, efficiency, and peace of mind.</p>
              <a href="/blog/details" className="link-btn">
                Read More
                <span className="after-bg" />
              </a>
            </div>
          </div>
          <div className="th-blog blog-single has-post-thumbnail" data-cue="slideInUp">
            <div className="blog-img position-relative">
              <a href="/blog/details"><img src="/assets/img/blog/blog-s-1-3.jpg" alt="Blog Image" /></a>
              <div className="blog-date">
                <h3>28</h3>
                <span>July</span>
              </div>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <a href="/blog" className="border1"><span>Kitchen Plumbing</span></a>
                <a href="/blog"><i className="fa-regular fa-comment" /> Comments (3)</a>
              </div>
              <h2 className="blog-title"><a href="/blog/details">Achieving calm minds from plumbing issues</a>
              </h2>
              <p className="blog-text">With transparent pricing, fast response times, and 24/7 emergency availability, we’re always here when you need us. Our customer-first approach means we treat every job with care, cleanliness, and professionalism. When you choose us, you're choosing plumbing done with integrity, efficiency, and peace of mind.</p>
              <a href="/blog/details" className="link-btn">
                Read More
                <span className="after-bg" />
              </a>
            </div>
          </div>
          <div className="th-pagination " data-cue="slideInUp">
            <ul>
              <li>
                <a href="#">
                  <div className="arrow left">
                    <img src="/assets/img/icon/arrow-right.svg" alt />
                  </div>
                </a>
              </li>
              <li><a href="#">01</a></li>
              <li><a href="#">02</a></li>
              <li><a href="#">03</a></li>
              <li>
                <a href="#">
                  <div className="arrow">
                    <img src="/assets/img/icon/arrow-right.svg" alt />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5">
          <aside className="sidebar-area sidebar-sticky" data-cue="slideInUp">
            <div className="widget widget_search  ">
              <form className="search-form">
                <input type="text" placeholder="Enter Keyword" />
                <button type="submit"><i className="far fa-search" /></button>
              </form>
            </div>
            <div className="widget widget_categories  ">
              <h3 className="widget_title">Categories</h3>
              <ul>
                <li>
                  <a href="/blog">General Plumbing Repairs
                  </a>
                </li>
                <li>
                  <a href="/blog">Water Heater Installation
                  </a>
                </li>
                <li>
                  <a href="/blog">Drain Cleaning Services
                  </a>
                </li>
                <li>
                  <a href="/blog">Kitchen Plumbing
                  </a>
                </li>
                <li>
                  <a href="/blog">Pipe Repair &amp; Replacement
                  </a>
                </li>
              </ul>
            </div>
            <div className="widget  ">
              <h3 className="widget_title">Recent Posts</h3>
              <div className="recent-post-wrap">
                <div className="recent-post">
                  <div className="media-img">
                    <a href="/blog/details"><img src="/assets/img/blog/recent-post-1-1.jpg" alt="Blog Image" /></a>
                  </div>
                  <div className="media-body">
                    <div className="recent-post-meta">
                      <a href="/blog"><i className="fa-solid fa-calendar-days" />20 Mar, 2025</a>
                    </div>
                    <h4 className="post-title"><a className="text-inherit" href="/blog/details">Rapid solutions for your plumbing issues</a></h4>
                  </div>
                </div>
                <div className="recent-post">
                  <div className="media-img">
                    <a href="/blog/details"><img src="/assets/img/blog/recent-post-1-2.jpg" alt="Blog Image" /></a>
                  </div>
                  <div className="media-body">
                    <div className="recent-post-meta">
                      <a href="/blog"><i className="fa-solid fa-calendar-days" />24 Sep, 2025</a>
                    </div>
                    <h4 className="post-title"><a className="text-inherit" href="/blog/details">Frequent maintenance, such as inspection</a></h4>
                  </div>
                </div>
                <div className="recent-post">
                  <div className="media-img">
                    <a href="/blog/details"><img src="/assets/img/blog/recent-post-1-3.jpg" alt="Blog Image" /></a>
                  </div>
                  <div className="media-body">
                    <div className="recent-post-meta">
                      <a href="/blog"><i className="fa-solid fa-calendar-days" />23 Oct, 2025</a>
                    </div>
                    <h4 className="post-title"><a className="text-inherit" href="/blog/details">Mastering: Handyman's Guide to Tips &amp; Tricks</a></h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget th-widget-instagram  ">
              <h3 className="widget_title">Instagram</h3>
              <div className="instagram-feeds">
                <div className="insta-thumb">
                  <img src="/assets/img/widget/insta-feed-1-1.jpg" alt="Image" />
                  <a target="_blank" href="https://www.instagram.com/" className="insta-btn "><i className="fab fa-instagram" /></a>
                </div>
                <div className="insta-thumb">
                  <img src="/assets/img/widget/insta-feed-1-2.jpg" alt="Image" />
                  <a target="_blank" href="https://www.instagram.com/" className="insta-btn "><i className="fab fa-instagram" /></a>
                </div>
                <div className="insta-thumb">
                  <img src="/assets/img/widget/insta-feed-1-3.jpg" alt="Image" />
                  <a target="_blank" href="https://www.instagram.com/" className="insta-btn "><i className="fab fa-instagram" /></a>
                </div>
                <div className="insta-thumb">
                  <img src="/assets/img/widget/insta-feed-1-4.jpg" alt="Image" />
                  <a target="_blank" href="https://www.instagram.com/" className="insta-btn "><i className="fab fa-instagram" /></a>
                </div>
                <div className="insta-thumb">
                  <img src="/assets/img/widget/insta-feed-1-5.jpg" alt="Image" />
                  <a target="_blank" href="https://www.instagram.com/" className="insta-btn "><i className="fab fa-instagram" /></a>
                </div>
                <div className="insta-thumb">
                  <img src="/assets/img/widget/insta-feed-1-6.jpg" alt="Image" />
                  <a target="_blank" href="https://www.instagram.com/" className="insta-btn "><i className="fab fa-instagram" /></a>
                </div>
              </div>
            </div>
            <div className="widget widget_tag_cloud  ">
              <h3 className="widget_title">Popular Tags</h3>
              <div className="tagcloud">
                <a href="/blog">Building</a>
                <a href="/blog">Plumbing</a>
                <a href="/blog">Tips</a>
                <a href="/blog">Solution</a>
                <a href="/blog">Commercial</a>
                <a href="/blog">News</a>
                <a href="/blog">Residential</a>
                <a href="/blog">Repair</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>
  {/*==============================
	Footer Area
==============================*/}</div>

    </PageLayout>
  );
}
