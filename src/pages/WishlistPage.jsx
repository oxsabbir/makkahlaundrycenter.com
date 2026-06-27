import PageLayout from "../components/layout/PageLayout";

export default function WishlistPage() {
  return (
    <PageLayout
      variant="default"
      title="Shared on THEMELOCK.COM - Pamar - Plumbing & Repair Service HTML Template - Wishlist"
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
              Wishlist </h1>
            <ul className="breadcumb-menu" data-cue="slideInUp" data-delay={300}>
              <li><a href="/">Home</a></li>
              <li>Wishlist</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>{/*==============================
Checkout Area
==============================*/}
  <div className="space">
    <div className="container">
      <div className="tinv-wishlist woocommerce tinv-wishlist-clear">
        <div className="tinv-header">
          <h2 className="mb-30">Wishlist</h2>
        </div>
        <form action="#" method="post" autoComplete="off">
          <table className="tinvwl-table-manage-list">
            <thead>
              <tr>
                <th className="product-cb">
                  <input type="checkbox" className="global-cb" title="Select all for bulk action" />
                </th>
                <th className="product-remove" />
                <th className="product-thumbnail">&nbsp;</th>
                <th className="product-name">
                  <span className="tinvwl-full">Product Name</span><span className="tinvwl-mobile">Product</span>
                </th>
                <th className="product-price">Unit Price</th>
                <th className="product-date">Date Added</th>
                <th className="product-stock">Stock Status</th>
                <th className="product-action">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr className="wishlist_item">
                <td className="product-cb">
                  <input type="checkbox" name="wishlist_pr[]" defaultValue={58} title="Select for bulk action" />
                </td>
                <td className="product-remove">
                  <button type="submit" name="tinvwl-remove" value={58} title="Remove"><i className="fal fa-times" />
                  </button>
                </td>
                <td className="product-thumbnail">
                  <a href="/shop/details"><img src="/assets/img/product/product_thumb_1_1.png" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="image" /></a>
                </td>
                <td className="product-name">
                  <a href="/shop/details">Electrical Switches breaker</a>
                </td>
                <td className="product-price">
                  <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>45.00</bdi></span>
                </td>
                <td className="product-date">
                  <time className="entry-date" dateTime="2025-11-21 03:54:24">November 21, 2025</time>
                </td>
                <td className="product-stock">
                  <p className="stock in-stock">
                    <span><i className="fas fa-check" /></span><span className="tinvwl-txt">In stock</span>
                  </p>
                </td>
                <td className="product-action">
                  <button className="button" name="tinvwl-add-to-cart" value={58} title="Add to Cart">
                    <i className="fal fa-shopping-cart" /><span className="tinvwl-txt">Add to Cart</span>
                  </button>
                </td>
              </tr>
              <tr className="wishlist_item">
                <td className="product-cb">
                  <input type="checkbox" name="wishlist_pr[]" defaultValue={60} title="Select for bulk action" />
                </td>
                <td className="product-remove">
                  <button type="submit" name="tinvwl-remove" value={60} title="Remove"><i className="fal fa-times" />
                  </button>
                </td>
                <td className="product-thumbnail">
                  <a href="/shop/details"><img src="/assets/img/product/product_thumb_1_2.png" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="image" /></a>
                </td>
                <td className="product-name">
                  <a href="/shop/details">Kitchen Bathroom Sink Tap</a>
                </td>
                <td className="product-price">
                  <ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>18.00</bdi></span></ins>
                  <del><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>20.00</bdi></span></del>
                </td>
                <td className="product-date">
                  <time className="entry-date" dateTime="2025-11-21 03:54:24">November 21, 2025</time>
                </td>
                <td className="product-stock">
                  <p className="stock in-stock"><span><i className="fas fa-check" /></span><span className="tinvwl-txt">In stock</span></p>
                </td>
                <td className="product-action">
                  <button className="button" name="tinvwl-add-to-cart" value={60} title="Add to Cart">
                    <i className="fal fa-shopping-cart" /><span className="tinvwl-txt">Add to Cart</span>
                  </button>
                </td>
              </tr>
              <tr className="wishlist_item">
                <td className="product-cb">
                  <input type="checkbox" name="wishlist_pr[]" defaultValue={60} title="Select for bulk action" />
                </td>
                <td className="product-remove">
                  <button type="submit" name="tinvwl-remove" value={60} title="Remove"><i className="fal fa-times" />
                  </button>
                </td>
                <td className="product-thumbnail">
                  <a href="/shop/details"><img src="/assets/img/product/product_thumb_1_3.png" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="image" /></a>
                </td>
                <td className="product-name">
                  <a href="/shop/details">Hand Tools Hex key Allen</a>
                </td>
                <td className="product-price">
                  <ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>18.00</bdi></span></ins>
                  <del><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>20.00</bdi></span></del>
                </td>
                <td className="product-date">
                  <time className="entry-date" dateTime="2025-11-21 03:54:24">November 21, 2025</time>
                </td>
                <td className="product-stock">
                  <p className="stock in-stock"><span><i className="fas fa-check" /></span><span className="tinvwl-txt">In stock</span></p>
                </td>
                <td className="product-action">
                  <button className="button" name="tinvwl-add-to-cart" value={60} title="Add to Cart">
                    <i className="fal fa-shopping-cart" />
                    <span className="tinvwl-txt">Add to Cart</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <div className="social-buttons">
          <span>Share on</span>
          <ul>
            <li><a href="https://www.facebook.com/sharer/sharer.php?u=permalink" className="social social-facebook" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
            <li><a href="https://twitter.com/share?url=permalink" className="social social-twitter " title="Twitter"><i className="fab fa-twitter" /></a></li>
            <li><a href="http://pinterest.com/pin/create/button/?url=permalink" className="social social-pinterest " title="Pinterest"><i className="fab fa-pinterest-p" /></a></li>
            <li><a href="https://api.whatsapp.com/send?text=permalink" className="social social-whatsapp " title="WhatsApp"><i className="fab fa-whatsapp" /></a></li>
            <li><a href="http://vecurosoft.com/products/wordpress/foodelio/wishlist/974b61/" className="social social-clipboard " title="Clipboard"><i className="far fa-clipboard" /></a></li>
            <li><a href="mailto:?body=permalink" className="social social-email " title="Email"><i className="far fa-envelope" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/*==============================
	Footer Area
==============================*/}</div>

    </PageLayout>
  );
}
