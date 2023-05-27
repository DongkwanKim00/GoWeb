import { Card } from "react-bootstrap";
import products from "./products.json";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./imgSet.css"

function scrollTo(id) {
  const element = document.getElementById(id);

  if (element) {
    const distance = 3 * window.innerHeight * 0.01;
    const targetOffset = element.offsetTop - distance*2.7;
    window.scrollTo({ top: targetOffset, behavior: 'smooth' });
  }
}
function handleClick1(e){
  e.preventDefault();
  scrollTo('Toy drone');
};

function handleClick2(e){
  e.preventDefault();
  scrollTo('Delivery drone');
};

function handleClick3(e){
  e.preventDefault();
  scrollTo('Agriculture drone');
};

function handleClick4(e){
  e.preventDefault();
  scrollTo('Education drone');
};


const Products = () => {
  


  return (
    <>
    <div style={{ marginTop: '80px' }}>
      <div style={{ position: 'fixed',left: "30px", top: '180px', float: 'left', width: '200px', height: '50vh', backgroundColor: '#87CEFA', padding: '20px', lineHeight: '2', borderRadius: '10px' }}>
        <h3 style={{ marginBottom: '20px' }}>category</h3>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
        <a href="#Toy drone" style={{ color: 'black', textDecoration: 'none' }} onClick={handleClick1}><li class="container" style={{ marginBottom: '30px' }}>Toy</li></a>
        <a href="#Delivery drone" style={{ color: 'black', textDecoration: 'none' }} onClick={handleClick2}><li class="container" style={{ marginBottom: '30px' }}>Delivery</li></a>
        <a href="#Agriculture drone" style={{ color: 'black', textDecoration: 'none' }} onClick={handleClick3}><li class="container" style={{ marginBottom: '30px' }}>Agriculture</li></a>
        <a href="#Education drone" style={{ color: 'black', textDecoration: 'none' }} onClick={handleClick4}><li class="container" style={{ marginBottom: '30px' }}>Education</li></a>
        </ul>
      </div> 
    </div>

    <div class="gallery" className="text-center" style = {{marginLeft: '20%'}}>
        <h1>Products</h1>
        <p></p>
        {products.map((product) => (
          
          <Card key={product.name}  id = {product.name}>
            <p></p><p></p><p></p><p></p>
            <Card.Body>
              <Card.Title><h2>{product.name}</h2></Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>{`Price: ${product.price}`}</Card.Text>
            </Card.Body>
            
            <div style={{ textAlign: 'center' }} >
            
     
              {Array.from({ length: product.number }, (_, index) => index + 1).map((index) => (
                <a href={product[`src${index}`]} key={index}>
                  <figure className="snip1273">
                    <Card.Img variant="top" src={product[`image${index}`]} style={{ width: '300px' }} />
                    <figcaption>
                      <h2>{product[`disc_name${index}`]}</h2>
                      <p>{product[`disc_size${index}`]}크기</p>
                      <p>{product[`score${index}`]}point</p>
                    </figcaption>
                  </figure>
                </a>
              ))}



            </div>
            

            <p></p><p></p><p></p><p></p><p></p>
          </Card>
        ))}
      </div></>
  );
}

export default Products;
