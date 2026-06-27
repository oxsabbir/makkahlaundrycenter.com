import PageLayout from "../components/layout/PageLayout";
import Breadcrumb from "../components/layout/Breadcrumb";

export default function BlogDetailsPage() {
  return (
    <PageLayout
      title="Shared on THEMELOCK.COM - Pamar - Plumbing & Repair Service HTML Template - Blog Details"
      description="Pamar - Plumbing & Repair Service HTML Template"
    >
<div className="react-fragment">
        <Breadcrumb
          title="Blog Details"
          items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        />{/*==============================
    Blog Area
==============================*/}
  <section className="th-blog-wrapper blog-details space">
    <div className="container">
      <div className="row gx-60">
        <div className="col-xl-8 col-lg-7">
          <div className="th-blog blog-single has-post-thumbnail" data-cue="slideInUp">
            <div className="blog-img position-relative">
              <img src="/assets/img/blog/blog-s-1-1.jpg" alt="Blog Image" />
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
              <h3 className="mb-30">Achieving calm minds from plumbing issues</h3>
              <p className="mb-30">With transparent pricing, fast response times, and 24/7 emergency availability, we’re always here when you need us. Our customer-first approach means we treat every job with care, cleanliness, and professionalism. When you choose us, you're choosing plumbing done with integrity, efficiency, and peace of mind. Perform our Concierge Plan subscription service to manage your home more simply and effectively.</p>
              <p className="mb-0">Take advantage of the advantages that come with hiring a specialist handyman service provider. Employers need to know if a candidate can do the repair and maintenance tasks that will be expected of them on the job before they decide who to hire.</p>
              <blockquote>
                <div className="quote">
                  <img src="/assets/img/icon//left-quote.svg" alt />
                </div>
                <p>Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                <cite>Monalisa Saisha</cite>
              </blockquote>
              <p className="mb-30">Our customer-first approach means we treat every job with care, cleanliness, and professionalism. When you choose us, you're choosing plumbing done with integrity, efficiency, and peace of mind. Perform our Concierge Plan subscription service to manage your home more simply and effectively. Take advantage of the advantages that come with hiring a specialist handyman service provider.</p>
              <div className="row gx-30 mt-30">
                <div className="col-md-6 mb-30">
                  <div className="blog-radius-img">
                    <img className="w-100" src="/assets/img/blog/blog_inner_1.jpg" alt="Blog Image" />
                  </div>
                </div>
                <div className="col-md-6 mb-30">
                  <div className="blog-radius-img">
                    <img className="w-100" src="/assets/img/blog/blog_inner_2.jpg" alt="Blog Image" />
                  </div>
                </div>
              </div>
              <p className="mb-0">Our AI agency is a cutting-edge technology partner that specializes in delivering artificial intelligence solutions to help businesses streamline operations, improve decision-making, and enhance customer experiences. By leveraging the power of AI, we aim to revolutionize industries and empower organizations to stay competitive in a rapidly evolving digital landscape. Our team of AI experts, data scientists, and software engineers work collaboratively with clients to design, develop, and implement AI solutions tailored to their unique needs.</p>
              <div className="share-links clearfix ">
                <div className="row justify-content-between">
                  <div className="col-md-auto">
                    <div className="tagcloud">
                      <a href="/blog">Technology</a>
                      <a href="/blog">Repair</a>
                      <a href="/blog">Services</a>
                    </div>
                  </div>
                  <div className="col-md-auto text-xl-end">
                    <span className="share-links-title">Follow Us:</span>
                    <div className="th-social style2 align-items-center">
                      <a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></a>
                      <a href="https://www.twitter.com/"><i className="fab fa-twitter" /></a>
                      <a href="https://www.instagram.com/"><i className="fab fa-instagram" /></a>
                      <a href="https://myaccount.google.com/"><i className="fa-brands fa-google-plus-g" /></a>
                    </div>
                  </div>{/* Share Links Area end */}
                </div>
              </div>
            </div>
          </div>
          <div className="blog-author">
            <div className="author-img">
              <img src="/assets/img/blog/blog-author.jpg" alt="Blog Author Image" />
            </div>
            <div className="media-body">
              <div className="media">
                <div className="media-left">
                  <h3 className="author-name"><a href="/team/details">Ronald Richards</a></h3>
                </div>
              </div>
              <p className="author-text">When it comes to plumbing, you need more than just a quick fix — you need a team you can trust. At [Your Company Name], we bring years of experience, professional expertise,</p>
              <div className="media-body text-left">
                <div className="th-social style11 align-items-center">
                  <a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></a>
                  <a href="https://www.twitter.com/"><i className="fab fa-twitter" /></a>
                  <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in" /></a>
                  <a href="https://www.instagram.com/"><i className="fab fa-instagram" /></a>
                </div>
              </div>
            </div>
          </div> {/* Post Pagination Style */}
          <div className="post-pagination mb-60 ">
            <div className="row gy-40 justify-content-between align-items-center">
              <div className="col">
                <div className="post-pagi-box prev">
                  <a href="/blog" className="icon text-center">
                    <div className="arrow left">
                      <img src="/assets/img/icon/arrow-right.svg" alt />
                    </div>
                  </a>
                  <div className="pagi-box">
                    <div className="image">
                      <img src="/assets/img/blog/pagi-box-prev.jpg" alt />
                    </div>
                    <div className="pagi-box-content">
                      <a href="/blog">Frequent maintenance, such as inspectiont</a>
                      <span className="commented-on"><i className="fa-solid fa-calendar-days" />20 March,2025</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-auto d-sm-block">
                <a href="/blog" className="pagi-icon"><i className="fa-solid fa-grid" /></a>
              </div>
              <div className="col">
                <div className="post-pagi-box next">
                  <div className="pagi-box">
                    <div className="image">
                      <img src="/assets/img/blog/pagi-box-next.jpg" alt />
                    </div>
                    <div className="pagi-box-content text-end">
                      <a href="/blog">Mastering: Handyman's Guide to Tips &amp; Tricks</a>
                      <span className="commented-on"><i className="fa-solid fa-calendar-days" />20 March,2025</span>
                    </div>
                  </div>
                  <a href="/blog" className="icon text-center">
                    <div className="arrow">
                      <img src="/assets/img/icon/arrow-right.svg" alt />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="th-comments-wrap " data-cue="slideInUp">
            <h2 className="blog-inner-title h4">3 Comments </h2>
            <ul className="comment-list">
              <li className="th-comment-item">
                <div className="th-post-comment">
                  <div className="comment-avater">
                    <img src="/assets/img/blog/comment-author-1.jpg" alt="Comment Author" />
                  </div>
                  <div className="comment-content">
                    <h3 className="name">Ralph Edwards</h3>
                    <span className="commented-on"><i className="fa-solid fa-calendar-days" />20 March,2025</span>
                    {/* <span class="ms-2">06:30pm</span></span> */}
                    <p className="text">Compellingly recapitalize cost effective synergy rather than prospective architectures. Proactively exploit enterprise-wide information vis-a-vis real-time.</p>
                    <div className="reply_and_edit">
                      <a href="/blog/details" className="reply-btn">
                        <i className="fa-solid fa-reply" /> Reply</a>
                    </div>
                  </div>
                </div>
                <ul className="children">
                  <li className="th-comment-item">
                    <div className="th-post-comment">
                      <div className="comment-avater">
                        <img src="/assets/img/blog/comment-author-2.jpg" alt="Comment Author" />
                      </div>
                      <div className="comment-content">
                        <h3 className="name">Kristin Watson</h3>
                        <span className="commented-on">15 Dec, 2025</span>
                        <p className="text">Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a Pellentesque nec, egestas non nisi. Cras ultricies</p>
                        <div className="reply_and_edit">
                          <a href="/blog/details" className="reply-btn">
                            <i className="fa-solid fa-reply" /> Reply</a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="th-comment-item">
                <div className="th-post-comment">
                  <div className="comment-avater">
                    <img src="/assets/img/blog/comment-author-3.jpg" alt="Comment Author" />
                  </div>
                  <div className="comment-content">
                    <h3 className="name">Ronald Richards</h3>
                    <span className="commented-on">20 Dec, 2025</span>
                    <p className="text">Quique veldt nisi, protium ut lacinia in, elemental id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque</p>
                    <div className="reply_and_edit">
                      <a href="/blog/details" className="reply-btn">
                        <i className="fa-solid fa-reply" /> Reply</a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div> {/* Comment end */} {/* Comment Form */}
          <div className="th-comment-form " data-cue="slideInUp">
            <div className="form-title">
              <h3 className="blog-inner-title h4 mb-2">Leave A Reply</h3>
              <p className="form-text">Your email address will not be published. Required fields are marked *</p>
            </div>
            <div className="row">
              <div className="col-md-6 form-group style-border ">
                <input type="text" placeholder="Your Name" className="form-control" />
                <i className="fal fa-user" />
              </div>
              <div className="col-md-6 form-group style-border">
                <input type="text" placeholder="Email Address" className="form-control" />
                <i className="fal fa-envelope" />
              </div>
              <div className="col-12 form-group style-border">
                <textarea placeholder="Type Your Message" className="form-control" defaultValue={""} />
                <i className="fal fa-pencil" />
              </div>
              <div className="col-12 form-group mb-0">
                <button className="th-btn style4 active">
                  Sent Message
                  <span className="after-bg" />
                </button>
              </div>
            </div>
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
