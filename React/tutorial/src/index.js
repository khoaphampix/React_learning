// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />

    </section>
  );

}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => {
  return (
    <img src='https://images-na.ssl-images-amazon.com/images/I/81-XJpj2BoL._AC_UL127_SR127,127_.jpg' />
  )
}
const Title = () => <h1>I Love You to the Moon and Back</h1>
const Author = () => <h4> by Amelia Hepworth </h4>
// const BookList = () => {
//   return React.createElement('h1', {}, 'hello world!')
// }


// const BookList = () => {
//   return React.createElement(
//     'h1', 
//     {}, 
//     React.createElement('h2', {}, 'hello 2'))
// }

ReactDom.render(
  <BookList />,
  document.getElementById('root')
)