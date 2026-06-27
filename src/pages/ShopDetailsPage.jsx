import PageLayout from "../components/layout/PageLayout";
import Breadcrumb from "../components/layout/Breadcrumb";

export default function ShopDetailsPage() {
  return (
    <PageLayout
      title="Shared on THEMELOCK.COM - Pamar - Plumbing & Repair Service HTML Template - Shop Details"
      description="Pamar - Plumbing & Repair Service HTML Template"
    >
<div className="react-fragment">
        <Breadcrumb
          title="Shop Details"
          items={[{ label: "Home", href: "/" }, { label: "Shop Details" }]}
        />
  <section className="product-details space-top space-extra-bottom">
    <div className="container">
      <div className="row gx-60">
        <div className="col-lg-6">
          <div className="product-big-img">
            <div className="img"><img src="/assets/img/product/product_details_1_1.png" alt="Product Image" /></div>
          </div>
        </div>
        <div className="col-lg-6 align-self-center">
          <div className="product-about">
            <h2 className="product-title">Stanley Hand Tools Bag</h2>
            <div className="product-rating">
              <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style={{width: '100%'}}>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span></div>
              <a href="/shop/details" className="woocommerce-review-link">(<span className="count">4</span> customer reviews)</a>
            </div>
            <p className="price">$120.85<del>$150.99</del></p>
            <p className="text">Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo venenatis ligula commodo leez sed blandit convallis dignissim onec vel pellentesque neque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dignissimos, non perspiciatis explicabo exercitationem excepturi autem provident tempore, voluptatum eveniet, magnam illum repudiandae voluptates consectetur. Totam eaque non odio.</p>
            <div className="mt-2 link-inherit">
              <p>
                <strong className="text-title me-3">Availability:</strong>
                <span className="stock in-stock"><i className="far fa-check-square me-2 ms-1" />In Stock</span>
              </p>
            </div>
            <div className="actions">
              <div className="quantity">
                <input type="number" className="qty-input" step={1} min={1} max={100} name="quantity" defaultValue={1} title="Qty" />
                <button className="quantity-plus qty-btn"><i className="far fa-chevron-up" /></button>
                <button className="quantity-minus qty-btn"><i className="far fa-chevron-down" /></button>
              </div>
              <button className="th-btn">Add to Cart <span className="after-bg" /></button>
              <a href="/wishlist" className="icon-btn"><i className="far fa-heart" /></a>
            </div>
            <div className="product_meta">
              <span className="sku_wrapper">SKU: <span className="sku">Stanley Hand</span></span>
              <span className="posted_in">Category: <a href="/shop">Plumber Gadget</a></span>
              <span>Tags: <a href="/shop">Building,</a><a href="/shop">Plumber</a></span>
            </div>
          </div>
        </div>
      </div>
      <ul className="nav product-tab-style1" id="productTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a className="nav-link th-btn style3" id="description-tab" data-bs-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="false">Product Description <span className="after-bg" /></a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link th-btn style3 active" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="true">Customer Reviews <span className="after-bg" /></a>
        </li>
      </ul>
      <div className="tab-content" id="productTabContent">
        <div className="tab-pane fade" id="description" role="tabpanel" aria-labelledby="description-tab">
          <p className="text">Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo venenatis ligula commodo leez sed blandit convallis dignissim onec vel pellentesque neque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis dignissimos, non perspiciatis explicabo exercitationem excepturi autem provident tempore, voluptatum eveniet, magnam illum repudiandae voluptates consectetur. Totam eaque non odio.</p>
        </div>
        <div className="tab-pane fade show active" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
          <div className="woocommerce-Reviews">
            <div className="th-comments-wrap ">
              <ul className="comment-list">
                <li className="review th-comment-item">
                  <div className="th-post-comment">
                    <div className="comment-avater">
                      <img src="/assets/img/blog/comment-author-1.jpg" alt="Comment Author" />
                    </div>
                    <div className="comment-content">
                      <h4 className="name">Jacklin July</h4>
                      <span className="commented-on"><i className="far fa-calendar" />22 April, 2023</span>
                      <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                        <span style={{width: '100%'}}>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                      </div>
                      <p className="text">This product is very much qualityful and I love this working system and speed.</p>
                    </div>
                  </div>
                </li>
                <li className="review th-comment-item">
                  <div className="th-post-comment">
                    <div className="comment-avater">
                      <img src="/assets/img/blog/comment-author-2.jpg" alt="Comment Author" />
                    </div>
                    <div className="comment-content">
                      <h4 className="name">Jusctin Dacon</h4>
                      <span className="commented-on"><i className="far fa-calendar" />26 April, 2023</span>
                      <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                        <span style={{width: '100%'}}>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                      </div>
                      <p className="text">They delivered the product in a few time. Product quality is also very good.</p>
                    </div>
                  </div>
                </li>
                <li className="review th-comment-item">
                  <div className="th-post-comment">
                    <div className="comment-avater">
                      <img src="/assets/img/blog/comment-author-3.jpg" alt="Comment Author" />
                    </div>
                    <div className="comment-content">
                      <h4 className="name">Adam Jhon</h4>
                      <span className="commented-on"><i className="far fa-calendar" />26 April, 2023</span>
                      <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                        <span style={{width: '100%'}}>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                      </div>
                      <p className="text">Their product and service is very satisfying. I highly recommend their services.</p>
                    </div>
                  </div>
                </li>
                <li className="review th-comment-item">
                  <div className="th-post-comment">
                    <div className="comment-avater">
                      <img src="/assets/img/blog/comment-author-4.jpg" alt="Comment Author" />
                    </div>
                    <div className="comment-content">
                      <h4 className="name">Adison Smith</h4>
                      <span className="commented-on"><i className="far fa-calendar" />26 April, 2023</span>
                      <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                        <span style={{width: '100%'}}>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                      </div>
                      <p className="text">I am just in love with this product. Their service is also very good you can also try.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div> {/* Comment Form */}
            <div className="th-comment-form ">
              <div className="form-title">
                <h3 className="blog-inner-title ">Add a review</h3>
              </div>
              <div className="row">
                <div className="form-group rating-select d-flex align-items-center">
                  <label>Your Rating</label>
                  <p className="stars">
                    <span>
                      <a className="star-1" href="#">1</a>
                      <a className="star-2" href="#">2</a>
                      <a className="star-3" href="#">3</a>
                      <a className="star-4" href="#">4</a>
                      <a className="star-5" href="#">5</a>
                    </span>
                  </p>
                </div>
                <div className="col-12 form-group">
                  <textarea placeholder="Write a Message" className="form-control" defaultValue={""} />
                  <i className="text-title far fa-pencil-alt" />
                </div>
                <div className="col-md-6 form-group">
                  <input type="text" placeholder="Your Name" className="form-control" />
                  <i className="text-title far fa-user" />
                </div>
                <div className="col-md-6 form-group">
                  <input type="text" placeholder="Your Email" className="form-control" />
                  <i className="text-title far fa-envelope" />
                </div>
                <div className="col-12 form-group">
                  <input id="reviewcheck" name="reviewcheck" type="checkbox" />
                  <label htmlFor="reviewcheck">Save my name, email, and website in this browser for the next time I comment.<span className="checkmark" /></label>
                </div>
                <div className="col-12 form-group mb-0">
                  <button className="th-btn style4 active">Post Review <span className="after-bg" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==============================
		Related Product  
		==============================*/}
      <div className="space-extra-top mb-30">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-auto">
            <h2 className="sec-title text-center">Related Products</h2>
          </div>
          <div className="col-md d-none d-sm-block">
            <hr className="title-line" />
          </div>
          <div className="col-md-auto d-none d-md-block">
            <div className="sec-btn">
              <div className="icon-box">
                <button data-slider-prev="#productSlider1" className="slider-arrow style-border4 default"><i className="far fa-arrow-left" /></button>
                <button data-slider-next="#productSlider1" className="slider-arrow style-border4 default"><i className="far fa-arrow-right" /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper th-slider has-shadow" id="productSlider1" data-slider-options="{&quot;breakpoints&quot;:{&quot;0&quot;:{&quot;slidesPerView&quot;:1},&quot;576&quot;:{&quot;slidesPerView&quot;:&quot;2&quot;},&quot;768&quot;:{&quot;slidesPerView&quot;:&quot;2&quot;},&quot;992&quot;:{&quot;slidesPerView&quot;:&quot;3&quot;},&quot;1200&quot;:{&quot;slidesPerView&quot;:&quot;3&quot;}}}">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img src="/assets/img/product/product_1_1.png" alt="Product Image" />
                  <div className="actions">
                    <a href="#QuickView" className="icon-btn popup-content"><i className="far fa-eye" /></a>
                    <a href="/cart" className="icon-btn"><i className="far fa-cart-plus" /></a>
                    <a href="/wishlist" className="icon-btn"><i className="far fa-heart" /></a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="product-title"><a href="/shop/details">Electrical Switches breaker</a></h3>
                  <span className="price">$177.85</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img src="/assets/img/product/product_1_2.png" alt="Product Image" />
                  <div className="actions">
                    <a href="#QuickView" className="icon-btn popup-content"><i className="far fa-eye" /></a>
                    <a href="/cart" className="icon-btn"><i className="far fa-cart-plus" /></a>
                    <a href="/wishlist" className="icon-btn"><i className="far fa-heart" /></a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="product-title"><a href="/shop/details">Kitchen Bathroom Sink Tap</a></h3>
                  <span className="price">$39.85</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img src="/assets/img/product/product_1_3.png" alt="Product Image" />
                  <div className="actions">
                    <a href="#QuickView" className="icon-btn popup-content"><i className="far fa-eye" /></a>
                    <a href="/cart" className="icon-btn"><i className="far fa-cart-plus" /></a>
                    <a href="/wishlist" className="icon-btn"><i className="far fa-heart" /></a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="product-title"><a href="/shop/details">Hand Tools Hex key Allen</a></h3>
                  <span className="price">$96.85</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img src="/assets/img/product/product_1_4.png" alt="Product Image" />
                  <div className="actions">
                    <a href="#QuickView" className="icon-btn popup-content"><i className="far fa-eye" /></a>
                    <a href="/cart" className="icon-btn"><i className="far fa-cart-plus" /></a>
                    <a href="/wishlist" className="icon-btn"><i className="far fa-heart" /></a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="product-title"><a href="/shop/details">Villeroy &amp; Boch Sink</a></h3>
                  <span className="price">$08.85<del>$06.99</del></span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img src="/assets/img/product/product_1_5.png" alt="Product Image" />
                  <div className="actions">
                    <a href="#QuickView" className="icon-btn popup-content"><i className="far fa-eye" /></a>
                    <a href="/cart" className="icon-btn"><i className="far fa-cart-plus" /></a>
                    <a href="/wishlist" className="icon-btn"><i className="far fa-heart" /></a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="product-title"><a href="/shop/details">red pipe wrench</a></h3>
                  <span className="price">$32.85</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img src="/assets/img/product/product_1_6.png" alt="Product Image" />
                  <div className="actions">
                    <a href="#QuickView" className="icon-btn popup-content"><i className="far fa-eye" /></a>
                    <a href="/cart" className="icon-btn"><i className="far fa-cart-plus" /></a>
                    <a href="/wishlist" className="icon-btn"><i className="far fa-heart" /></a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="product-title"><a href="/shop/details">Stanley Hand Screw gun Tools</a></h3>
                  <span className="price">$30.85</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img src="/assets/img/product/product_1_7.png" alt="Product Image" />
                  <div className="actions">
                    <a href="#QuickView" className="icon-btn popup-content"><i className="far fa-eye" /></a>
                    <a href="/cart" className="icon-btn"><i className="far fa-cart-plus" /></a>
                    <a href="/wishlist" className="icon-btn"><i className="far fa-heart" /></a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="product-title"><a href="/shop/details">Pen Pot</a></h3>
                  <span className="price">$232.85</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="th-product product-grid">
                <div className="product-img">
                  <img src="/assets/img/product/product_1_8.png" alt="Product Image" />
                  <div className="actions">
                    <a href="#QuickView" className="icon-btn popup-content"><i className="far fa-eye" /></a>
                    <a href="/cart" className="icon-btn"><i className="far fa-cart-plus" /></a>
                    <a href="/wishlist" className="icon-btn"><i className="far fa-heart" /></a>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="product-title"><a href="/shop/details">Shopping Cart</a></h3>
                  <span className="price">$30.85</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-block d-md-none mt-40 text-center">
          <div className="icon-box">
            <button data-slider-prev="#productSlider1" className="slider-arrow default"><i className="far fa-arrow-left" /></button>
            <button data-slider-next="#productSlider1" className="slider-arrow default"><i className="far fa-arrow-right" /></button>
          </div>
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
