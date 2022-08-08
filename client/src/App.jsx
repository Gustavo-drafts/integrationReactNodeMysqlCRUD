
import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import Display from './components/Display';

export default function App() {

  const [values, setValues] = useState();

  const [listProducts, setListProducts] = useState()

  console.log(listProducts);

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then((res) => {
      console.log(res);
    })
  };

  useEffect(() => {
    Axios.get('http://localhost:3001/getProducts').then((response) => {
      setListProducts(response.data)
    });
  }, []);



  return (
    <div className="app--container">
      <div className="register--container">
        <h1 className="register--title">Scrim Shop</h1>
        <input
          type="text"
          name="name"
          placeholder='Nome'
          className="register--input"
          onChange={handleChangeValues}
        />
        <input
          type="text"
          name="cost"
          placeholder='Preço'
          className="register--input"
          onChange={handleChangeValues}
        />
        <input
          type="text"
          name="category"
          placeholder='Categoria '
          className="register--input"
          onChange={handleChangeValues}
        />
        <button
          className="register--button"
          onClick={handleClickButton}
        >Cadastrar
        </button>
      </div>
      {typeof listProducts !== "undefined" && listProducts.map((value) => {
        return (

          <Display
            key={value.id}
            values={listProducts}
            setValues={setListProducts}
            id={value.id}
            name={value.name}
            cost={value.cost}
            category={value.category}
          />
        )
      })}
    </div>
  );
}
