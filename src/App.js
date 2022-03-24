import logo from './logo.svg';
import './App.css';

function App() {

  const products = [
    {Name: 'Computer', Price: '320000'},
    {Name: 'Phone', Price: '150000'},
    {Name: 'Tablet', Price: '360000'},
    {Name: 'Watch', Price: '25000'}
  ]

  return (
    <div className="App">

      {
        products.map(product=> <Product name={product.Name} price={product.Price}></Product>)
      }

      {/* <Product name="Laptop" price="57000"></Product>
      <Product name="Phone" price="72000"></Product>
      <Product name="Watch" price="2300"></Product> */}
    </div>
  );
}

function Product(props) {
  return (
    <div className="product">
      <h2>Name: { props.name }</h2>
      <p>Price: { props.price }</p>
    </div>
  )
}

export default App;
