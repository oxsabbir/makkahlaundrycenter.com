import PageLayout from "../components/layout/PageLayout";

export default function ShopPage() {
  return (
    <PageLayout
      title="Shared on THEMELOCK.COM - Pamar - Plumbing & Repair Service HTML Template - Shop"
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
              Product Shop </h1>
            <ul className="breadcumb-menu" data-cue="slideInUp" data-delay={300}>
              <li><a href="/">Home</a></li>
              <li>Shop</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==============================
Product Area
==============================*/}
  <section className="space-top space-extra-bottom">
    <div className="container">
      <div className="row gx-40">
        <div className="col-xl-8 col-lg-7">
          <div className="th-sort-bar">
            <div className="row justify-content-between align-items-center">
              <div className="col-md">
                <p className="woocommerce-result-count">Showing 1–12 of 16 results</p>
              </div>
              <div className="col-md-auto">
                <form className="woocommerce-ordering" method="get">
                  <select name="orderby" className="orderby" aria-label="Shop order">
                    <option value="menu_order" selected="selected">Default Sorting</option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="date">Sort by latest</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">Sort by price: high to low</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
          <div className="row gy-40">
            <div className="col-sm-6">
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
            <div className="col-sm-6">
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
            <div className="col-sm-6">
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
            <div className="col-sm-6">
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
            <div className="col-sm-6">
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
            <div className="col-sm-6">
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
            <div className="col-sm-6">
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
            <div className="col-sm-6">
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
          <div className="th-pagination text-center mt-20" data-cue="slideInUp">
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
            <div className="widget widget_price_filter  ">
              <h4 className="widget_title">Filter By Price</h4>
              <div className="price_slider_wrapper">
                <div className="price_slider" />
                <div className="price_label">
                  Price: <span className="from">$0</span> — <span className="to">$70</span>
                </div>
                <button type="submit" className="button">Filter</button>
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
