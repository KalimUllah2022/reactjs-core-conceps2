import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() { 
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  )
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => { 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  },[]);
  return (
    <div>
      <h2>External Users</h2>
      {
        users.map(user => <Users name={user.name} email={user.email} phone={user.phone} website={ user.website } address={ user.address } zipCode={ user.zipCode}></Users>)
      }
    </div>
  );
}
function Users(props) { 
  return (
    <div style={{border: '3px solid brown', background: 'indigo', margin: '20px', padding: '10px', borderRadius: '20px', color: '#fff'}}>
      <h2>Name: { props.name }</h2>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
      <p>Address: {props.address.street}</p>
      <strong>Zip Code: {props.address.zipcode}</strong>
      <br />
      <small>Website: { props.website }</small>
    </div>
  );
}



// function ExternalUsers() {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => setUsers(data))
//    }, []);
//   return (
//     <div>
//       <h2>External Users</h2>
//       <p>{users.length}</p>
//       {
//         users.map(user => <Users name={ user.name } email={ user.email }></Users>)
//       }
//     </div>
//   )
// }

// function Users(props) { 
//   return (
//     <div style={{border: '3px solid indigo', margin: '20px', padding:'20px', borderRadius: '10px'}}>
//       <h2>Name: {props.name}</h2>
//       <p>Email: { props.email }</p>
//     </div>
//   )
// }



function Counter() { 
  const [count, setCount] = useState(55);

  const increaseCount = () => { setCount( count + 1 ) }
  const decreaseCount = () => { setCount( count - 1 ) }

  // const increaseCount = () => { 
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  // const decreaseCount = () => { 
  //   const newCount = count - 1;
  //   setCount(newCount);
  // }
  return (
    <div>
      <h2>Count: { count }</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

  // const [count, setCount] = useState(0);
  // const increaseCount = () => setCount(count + 1);
  // const decreaseCount = () => setCount(count - 1);
  // const increaseCount = () => { 
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  // return (
  //   <div>
  //     <h2>Count: { count }</h2>
  //     <button onClick={increaseCount}>Increase</button>
  //     <button onClick={decreaseCount}>Decrease</button>
  //   </div>
  // );





/*
  const products = [
    {Name: 'Computer', Price: '320000'},
    {Name: 'Phone', Price: '150000'},
    {Name: 'Tablet', Price: '360000'},
    {Name: 'Watch', Price: '25000'}
  ]
*/

/*
// {
//   products.map(product=> <Product name={product.Name} price={product.Price}></Product>)
// }

// <Product name="Laptop" price="57000"></Product>
// <Product name="Phone" price="72000"></Product>
// <Product name="Watch" price="2300"></Product>
*/

function Product(props) {
  return (
    <div className="product">
      <h2>Name: { props.name }</h2>
      <p>Price: { props.price }</p>
    </div>
  )
}

export default App;
