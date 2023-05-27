"use client";

import React, { useState } from "react";

import styles from "./page.module.css";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

function MyButton() {
  function handleClick() {
    alert("You shouldn't have clicked");
  }
  return <button onClick={handleClick}>Don't click me</button>;
}

function StateButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button onClick={handleClick}>clicked {count} times independently</button>
  );
}

function NoStateButton(props) {
  return (
    <button onClick={props.onClick}>
      clicked {props.count} times combined
    </button>
  );
}

function Component() {
  return <p>I am a JS function that returns Markup</p>;
}

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className={styles.avatar}
        src={user.imageUrl}
        alt={"Photo of" + user.imageUrl}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

function ShoppingList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{ color: product.isFruit ? "magenta" : "green" }}
    >
      {product.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
}

export default function MyApp() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className={styles.main}>
      <h2 className={styles.center}>Hello world</h2>
      <Component />
      <Profile />
      <MyButton />
      <ShoppingList />
      <StateButton />
      <StateButton />
      <NoStateButton count={count} onClick={handleClick} />
      <NoStateButton count={count} onClick={handleClick} />
    </div>
  );
}
