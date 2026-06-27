import PageLayout from "../components/layout/PageLayout";

export default function TypographyPage() {
  return (
    <PageLayout
      title="Shared on THEMELOCK.COM - Pamar - Plumbing & Repair Service HTML Template - Home One"
      description="Pamar - Plumbing & Repair Service HTML Template"
    >
<div className="react-fragment">{/*********************************
   		Code Start From Here 
	******************************** */}
  {/* <div class="cursor-follower"></div> */}
  {/* slider drag cursor */}
  {/* <div class="slider-drag-cursor"> DRAG </div> */}
  {/*==============================
     Preloader
  ==============================*/}
  <div className="preloader ">
    <div className="preloader-inner">
      <span className="loader">
        Makkah Laundry
        <span className="loading-text">Makkah Laundry</span>
      </span>
    </div>
  </div>
  <div className="space ">
    <div className="h1 text-center mt-4">Colors</div>
    <div className="container mb-5">
      <div className="row">
        <div className="col-xl-2">
          <div className="p-4 text-white text-center" style={{backgroundColor: 'var(--theme-color)'}}>Theme Color</div>
        </div>
        <div className="col-xl-2">
          <div className="p-4 text-white text-center" style={{backgroundColor: 'var(--theme-color2)'}}>Theme Color 2</div>
        </div>
        <div className="col-xl-2">
          <div className="p-4 text-white text-center" style={{backgroundColor: 'var(--title-color)'}}>Title Color</div>
        </div>
        <div className="col-xl-2">
          <div className="p-4 text-white text-center" style={{backgroundColor: 'var(--body-color)'}}>Body Color</div>
        </div>
        <div className="col-xl-2">
          <div className="p-4 text-color text-center" style={{backgroundColor: 'var(--gray-color)'}}>Gray Color</div>
        </div>
        <div className="col-xl-2">
          <div className="p-4 text-color text-center" style={{backgroundColor: 'var(--smoke-color)'}}>Smoke Color</div>
        </div>
      </div>
    </div>
    <div className="h1 text-center mt-4">Container</div>
    <div className="container mb-5">
      <div className="bg-dark py-2">
        <div className="h1 text-center text-white">row</div>
        <div className="row">
          <div className="col-4 ">
            <div className="py-5 bg-secondary text-white text-center">column</div>
          </div>
          <div className="col-4 ">
            <div className="py-5 bg-secondary text-white text-center">column</div>
          </div>
          <div className="col-4 ">
            <div className="py-5 bg-secondary text-white text-center">column</div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <h1>Lorem ipsum dolor sit amet</h1>
      <h2>Lorem ipsum dolor sit amet</h2>
      <h3>Lorem ipsum dolor sit amet</h3>
      <h4>Lorem ipsum dolor sit amet</h4>
      <h5>Lorem ipsum dolor sit amet</h5>
      <h6>Lorem ipsum dolor sit amet</h6>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus labore, expedita numquam similique odio tempora quo aperiam ipsa quibusdam laboriosam mollitia suscipit! Ullam ipsa maiores magnam soluta adipisci praesentium esse similique quae molestias? Nostrum pariatur voluptatibus veritatis soluta nesciunt quo praesentium. Dolorem vitae deleniti doloremque facere, eaque harum aspernatur dolore hic minus veniam sit expedita sapiente maiores accusantium quo repellendus obcaecati exercitationem labore fugiat! Qui eveniet earum esse delectus quis aspernatur? Vel, voluptatem dolorem possimus ea qui facere. Sapiente cumque id animi veritatis similique quidem consequatur, incidunt natus quis. Recusandae dolorem minus, obcaecati esse ipsam architecto et eius voluptatem ducimus.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus labore, expedita numquam similique odio tempora quo aperiam ipsa quibusdam laboriosam mollitia suscipit! Ullam ipsa maiores magnam soluta adipisci praesentium esse similique quae molestias? Nostrum pariatur voluptatibus veritatis soluta nesciunt quo praesentium. Dolorem vitae deleniti doloremque facere, eaque harum aspernatur dolore hic minus veniam sit expedita sapiente maiores accusantium quo repellendus obcaecati exercitationem labore fugiat! Qui eveniet earum esse delectus quis aspernatur? Vel, voluptatem dolorem possimus ea qui facere. Sapiente cumque id animi veritatis similique quidem consequatur, incidunt natus quis. Recusandae dolorem minus, obcaecati esse ipsam architecto et eius voluptatem ducimus.</p>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aspernatur, eius fugit modi veniam inventore sequi necessitatibus laborum deserunt debitis porro veritatis fugiat ipsa commodi est atque ab quasi! Tempora, eaque facilis id molestias libero hic dolore quos, vitae blanditiis veritatis iure rem. Voluptate nostrum quasi nam error nobis est.</h2>
      <h4>table style</h4>
      <table>
        <thead>
          <tr>
            <th><a href="#">This is a link</a></th>
            <th>Table Title</th>
            <th>Table Title</th>
            <th>Table Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Table title</th>
            <td><a href="#">This is a link</a></td>
            <td>Table Data</td>
            <td>Table Data</td>
          </tr>
          <tr>
            <th>Table title</th>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
          </tr>
          <tr>
            <th>Table title</th>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>table footer data</td>
            <td>table footer data</td>
            <td>table footer data</td>
            <td>table footer data</td>
          </tr>
        </tfoot>
      </table>
      <h4>blockquote style</h4>
      <blockquote>
        <p>Stay hungry. Stay foolish.</p>
      </blockquote>
      <h4>Nested links</h4>
      <h3><a href="#">This is a link in title</a></h3>
      <h1><a href="#" className="text-inherit">Inherit link in title</a></h1>
      <h2><a href="#" className="text-reset">reset link in title</a></h2>
      <p><a href="#">link in paragraph</a></p>
      <h4>List styles</h4>
      <ul>
        <li>List item one
          <ul>
            <li>List item one
              <ul>
                <li>List item one</li>
                <li>List item two</li>
                <li>List item three</li>
                <li>List item four</li>
              </ul>
            </li>
            <li>List item two</li>
            <li>List item three
              <ol>
                <li>List item two</li>
                <li>List item three</li>
                <li>List item four</li>
              </ol>
            </li>
            <li>List item four</li>
          </ul>
        </li>
        <li>List item two</li>
        <li>List item three</li>
        <li>List item four</li>
      </ul>
      <ol>
        <li>List item one
          <ol reversed="reversed">
            <li>List item one -reversed attribute</li>
            <li>List item two</li>
            <li>List item three</li>
            <li>List item four</li>
          </ol>
        </li>
        <li>List item two</li>
        <li>List item three</li>
        <li>List item four</li>
      </ol>
      <ol>
        <li>List item one
          <ul>
            <li>List item one</li>
            <li>List item two</li>
            <li>List item three</li>
            <li>List item four</li>
          </ul>
        </li>
        <li>List item two</li>
      </ol>
      <h4>Input Styles</h4>
      <div className="row">
        <div className="form-group col-lg-6 has-label style-border">
          <label htmlFor="text">Company name (optional)*</label>
          <input type="text" id="text" placeholder="Enter Your Name" />
        </div>
        <div className="form-group col-lg-6 has-label style-border">
          <label htmlFor="text2">Company name (optional)*</label>
          <input type="text" id="text2" placeholder="Enter Your Name" />
          <i className="fal fa-user" />
        </div>
        <div className="form-group col-lg-6 style-border">
          <input type="text" placeholder="Enter Your Name" />
          <i className="fal fa-user" />
        </div>
        <div className="form-group col-lg-6 style-border">
          <input type="text" placeholder="Enter Your Name" />
          <i className="fal fa-user" />
        </div>
        <div className="form-group col-12 style-border">
          <select name="name" id="name">
            <option value selected disabled hidden>Select Subject</option>
            <option value>Option 1</option>
            <option value>Option 2</option>
            <option value>Option 3</option>
            <option value>Option 4</option>
          </select>
        </div>
        <div className="form-group col-12 style-border">
          <textarea name="textARea" id="textARea" cols={30} rows={10} placeholder="Write you message" defaultValue={""} />
          <i className="far fa-pencil" />
        </div>
        <div className="form-group checkbox col-12 ">
          <input type="checkbox" id="checkbox" name="checkbox" />
          <label htmlFor="checkbox">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, similique?</label>
        </div>
        <div className="form-group col-12 style-border">
          <div>
            <input type="radio" id="html" name="fav_language" defaultValue="HTML" />
            <label htmlFor="html">HTML</label>
          </div>
          <div>
            <input type="radio" id="css" name="fav_language" defaultValue="CSS" />
            <label htmlFor="css">CSS</label>
          </div>
          <div>
            <input type="radio" id="javascript" name="fav_language" defaultValue="JavaScript" /><label htmlFor="javascript">JavaScript</label>
          </div>
        </div>
      </div>
      <h4>Buttons Style</h4>
      <div className="p-5 mb-4 bg-light">
        <div className="row align-items-center gy-3 gx-3">
          <div className="col-auto"><a href="#" className="th-btn">Appointment <span className="after-bg" /></a></div>
          <div className="col-auto"><a href="#" className="th-btn style2 ">Appointment<span className="after-bg" /></a></div>
          <div className="col-auto"><a href="#" className="th-btn style15 ">Register Now</a></div>
        </div>
      </div>
      <h4>Icon Button Style</h4>
      <div className="p-5 mb-4 bg-light">
        <div className="row align-items-center gy-3 gx-3">
          <div className="col-auto"><a href="#" className="icon-btn"><i className="fal fa-arrow-right" /></a></div>
          <div className="col-auto"><a href="#" className="icon-btn style2"><i className="fal fa-arrow-right" /></a></div>
          <div className="col-auto"><a href="#" className="icon-btn style3 text-white"><i className="fal fa-arrow-right" /></a></div>
          <div className="col-auto"><a href="#" className="icon-btn style1 btn-md"><i className="far fa-chevron-right" /></a></div>
          <div className="col-auto"><a href="#" className="icon-btn style2 btn-md"><i className="far fa-chevron-right" /></a></div>
          <div className="col-auto"><a href="#" className="icon-btn style3 text-white btn-md"><i className="far fa-chevron-right" /></a></div>
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
