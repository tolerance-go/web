"use client";

import Mock from "mockjs";
import { useState } from "react";
import styles from "./page.module.css";

const data: {
  list: { id: number }[];
} = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  "list|1000": [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      "id|+1": 1,
    },
  ],
});

const pageSize = 50;

export default function Home() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(pageSize);

  return (
    <main className={styles.main}>
      <ul>
        {data.list.slice(start, end).map((item) => (
          <li key={item.id}>{item.id}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          setEnd(end + pageSize);
        }}
        className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        load more
      </button>
    </main>
  );
}
