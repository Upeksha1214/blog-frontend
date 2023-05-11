import Image from 'next/image'


export default function Home() {
  return (
<section className="vh-100">
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-6 text-black">

        <div className="px-5 ms-xl-4">
          <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4 color: #709085;"></i>
          <span className="h1 fw-bold mb-0">Simple Blogging</span>
        </div>

        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form className="width: 23rem;">

            <h3 className="fw-normal mb-3 pb-3 letter-spacing: 1px;">Log in</h3>

            <div className="form-outline mb-4">
              <input type="email" id="form2Example18" className="form-control form-control-lg" />
              <label className="form-label">User Name</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="form2Example28" className="form-control form-control-lg" />
              <label className="form-label">Password</label>
            </div>

            <div className="pt-1 mb-4">
              <button className="btn btn-info btn-lg btn-block" type="button">Login</button>
            </div>

            <p>Don't have an account? <a href="#!" className="link-info">Register here</a></p>

          </form>

        </div>

      </div>
      <div className="col-sm-6 px-0 d-none d-sm-block">
        <Image src="/images/004.png"
        width={300}
        height={100}
        priority={true}
          alt="Login image" className="w-100 vh-100 object-fit: cover; object-position: left;"/>
      </div>
    </div>
  </div>
</section>
  )
}
