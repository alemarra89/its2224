import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Table } from './models/table';
import CardTable from './components/card-table';

const tabella: Table = {
  categories: [
    {
      name: "Sporting Goods",
      products: [
        {
          name: "Football",
          price: 49.99,
        },
        {
          name: "Baseball",
          price: 9.99,
        },
        {
          name: "Basketball",
          price: 29.99,
        }
      ]
    },
    {
      name: "Electronics",
      products: [
        {
          name: "iPod Touch",
          price: 99.99,
        },
        {
          name: "iPhone 5",
          price: 399.99,
        },
        {
          name: "Nexus 7",
          price: 199.99,
        }
      ]
    }
  ]
};

function App() {
  return (
    <div className="App">
      <CardTable table={tabella} />
    </div>
  );
}

export default App;
