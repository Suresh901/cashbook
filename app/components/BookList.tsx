import React from "react";
import { Text } from "react-native";
import BookItem from "./BookItem";

type Props = {
  books: { id: number; title: string; createdAt: string }[];
};

export default function BooksList({ books }: Props) {
  return (
    <>
      {books.length === 0 ? (
        <Text className="text-center text-gray-500">No book found.</Text>
      ) : (
        books.map((book) => (
          <BookItem
            key={book.id}
            title={book.title}
            createdAt={book.createdAt}
          />
        ))
      )}
    </>
  );
}
