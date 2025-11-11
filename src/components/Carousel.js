

 function Carousel() {
   const banner1='https://assets-persist.lovart.ai/agent_images/da262035-b71a-471a-a5c0-7ddc77426fb9.jpg'
   const banner2='https://assets-persist.lovart.ai/agent_images/4e63aeab-be7c-426b-843a-957c5e35a51f.jpg'
   const banner3='https://img.freepik.com/free-psd/flat-design-autumn-sale-template_23-2149553144.jpg?semt=ais_hybrid&w=740&q=80'
  
  
   return (
    <div className='container my-7 mt-4' >
        <div id="carouselExampleIndicators" class="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner w-100">
    <div className="carousel-item active">
      <img src={banner1} class="image-fluid d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={banner2} class="d-block w-100"  alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={banner3} class="d-block w-100"  alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}
export default Carousel;