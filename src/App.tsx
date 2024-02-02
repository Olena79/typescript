import React, { useState, useEffect, useReducer, useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { type } from 'os';
import { ProductContext } from './index';

//================================

// class Book {
//   public title: string;
//   public author: string;
//   public rating: number[];

//   constructor(title: string, author: string) {
//     this.title = title;
//     this.author = author;
//     this.rating = [];
//   }

//   public addRating = (rating: number): void => {
//     if (rating >= 1 && rating <= 5) {
//       this.rating.push(rating);
//       console.log(`Rating ${rating} added for ${this.title}`);
//     } else {
//       console.log(`Invalid rating/ Please provide a rating between 1 and 5`)
//     }
//   }

//   public getAverageRating(): number {
//     if (this.rating.length === 0) {
//       return 0;
//     }
//     const sum = this.rating.reduce((acc, rating) => acc + rating, 0);
//     return sum / this.rating.length;
//   }

//   public displayInfo(): void {
//     console.log(`Title: ${this.title}, Author: ${this.author}`);
//   }
// }

// const book1 = new Book("The Catcher in the Rye", "J.D. Salinger");
// const book2 = new Book("Garry Potter", "J. Rowling");

// book1.addRating(2);
// book1.addRating(3);
// book2.addRating(5);

// console.log(`Average rating for ${book1.title}: ${book1.getAverageRating()}`);
// console.log(`Average rating for ${book2.title}: ${book2.getAverageRating()}`);

// book1.displayInfo();
// book2.displayInfo();

//===================================

// const test: JSX.Element = <div>Hello World!</div>

// type AppProps = {
//   test: JSX.Element;
//   children: React.ReactElement;
//   onClick: React.MouseEventHandler;
// };

// const App: React.FC<AppProps> = ({ test, children, onClick }) => {
//   const [count, setCount] = useState<number>(0);

//   const handleClick = (event: React.MouseEvent<Element, MouseEvent>) => {
//     setCount((value) => value + 1);
//   };

//   const handleAuxClick: React.MouseEventHandler<HTMLElement> = (event) => {
//     alert(event);
//   };

//   useEffect(() => {
//     alert(count);
//   }, [count]);

// return (

//   <div className="App">
//     <header className="App-header">
//       <p onAuxClick={handleAuxClick}>Count: {count}</p>
//       <p onClick={handleClick}>Count: {count}</p>
//       {test}
//       <p>{children}</p>
//     </header>
//   </div>

// );
// }

//====================================

type InitialState = {
  count: 0;
};

type State = {
  count: number;
};

type Action = {
  type: ACTION_TYPE;
};

enum ACTION_TYPE {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
};

const stateReduser: React.Reducer<State, Action> = (
  state: State,
  action: Action,
): State => {
  switch (action.type) {
    case ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const App: React.FC<{}> = () => {

  const [state, dispatch] = useReducer<React.Reducer<State, Action>, InitialState>(
    stateReduser,

    { count: 0 },

    (state): State => ({
      ...state,
      count: 1,
    })
  );

  const handleClick = () => {
    dispatch({ type: ACTION_TYPE.INCREMENT });
  };

  const context = useContext(ProductContext);

  return (

    <div className="App">
      <header className="App-header">
        <p onClick={handleClick}>Count: {state.count}</p>
        <p>Selected Product id: {context.selectedProductId}</p>
      </header>
    </div>

  );
}

export default App;
