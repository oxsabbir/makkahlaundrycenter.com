export default function VideoSection() {
  return (
    <div
      className="video-area-1 position-relative overflow-hidden"
      data-sec-pos="top-half"
      data-pos-for="#feature-sec"
    >
      <div
        className="price-bg-shape1-1 shape-mockup d-none d-xxl-block"
        data-bottom={0}
        data-left="7%"
      >
        <img src="/assets/img/shape/video_shape.png" alt="img" />
      </div>
      <div className="video-wrap">
        <div className="row">
          <div className="col-lg-12">
            <div className="video-thumb1-1">
              <video
                src="/assets/video/demo-video-laundry.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "24px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
