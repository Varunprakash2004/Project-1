import React from 'react'

function Footer() {
  return (
    <footer class="bg-dark text-white text-center text-lg-start mt-5" style={{ width:"100%"}}>
  <div class="container p-4">
    <div class="row">
      
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">My E-Commerce</h5>
        <p>
          Your one-stop destination for all your shopping needs. 
          Fast delivery, secure payments, and great deals every day!
        </p>
      </div>

     
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0 text-center">
        <h5 class="text-uppercase mb-3">Follow Us</h5>
        <a href="https://instagram.com" className="btn btn-outline-light btn-floating m-1" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com" className="btn btn-outline-light btn-floating m-1" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://wa.me/1234567890" className="btn btn-outline-light btn-floating m-1" target="_blank">
          <i class="fab fa-whatsapp"></i>
        </a>
        <a href="https://youtube.com" className="btn btn-outline-light btn-floating m-1" target="_blank">
          <i class="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  </div>

  
  <div class="text-center p-3 bg-secondary">
    © 2025 My E-Commerce | All rights reserved.
  </div>
</footer>

  )
}
export default Footer;