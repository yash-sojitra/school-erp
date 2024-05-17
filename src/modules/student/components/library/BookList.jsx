import { books } from "@/assets/data/data.json";
import { useEffect, useState } from "react";

const BookList = ({ filterSubs }) => {
  const [bookList, setBookList] = useState(books);
  
  useEffect(() => {
    console.log(filterSubs);
    if (!filterSubs.length) {
      bookList.filter((book) => {
        return filterSubs.includes(book.subject);
      });
      setBookList(bookList);
    }
  }, [filterSubs, bookList]);

  return (
    <div className="flex flex-wrap justify-evenly">
      {bookList.map((book) => {
        return <img key={book.id} src={book.url} className="h-80 m-6" alt={book.id} />;
      })}
    </div>
  );
};

export default BookList;
