export default function Breadcrumb({ title, items, bgImg = "/assets/img/bg/breadcumb-bg.jpg", animation = true }) {
  return (
    <div
      className="breadcumb-wrapper bg-mask "
      data-mask-src="/assets/img/shape/breadcumb-shape.png"
      data-bg-src={bgImg}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcumb-content">
              <h1
                className={`breadcumb-title${animation ? " text-anim" : ""}`}
                {...(animation ? { "data-cue": "slideInUp", "data-delay": 100 } : {})}
              >
                {title}
              </h1>
              <ul
                className="breadcumb-menu"
                {...(animation ? { "data-cue": "slideInUp", "data-delay": 300 } : {})}
              >
                {items.map((item, i) =>
                  item.href ? (
                    <li key={i}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ) : (
                    <li key={i}>{item.label}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
