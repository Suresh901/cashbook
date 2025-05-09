import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import AddBookModal from "../components/AddModal";
import BooksHeader from "../components/BookHeader";
import BooksList from "../components/BookList";
import Button from "../components/Button";
import Header from "../components/Header";

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  const [bookName, setBookName] = useState("");
  const [books, setBooks] = useState([]);

  const handleAddBook = () => {
    if (!bookName.trim()) return;

    const newBook = {
      id: Date.now(),
      title: bookName,
      createdAt: new Date().toLocaleString(),
    };

    setBooks([newBook, ...books]);
    setBookName("");
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Header />
        <View className="mx-5 flex flex-col gap-5 mb-20">
          <BooksHeader />
          <BooksList books={books} />
        </View>
      </ScrollView>

      <View className="absolute bottom-28 right-5">
        <Button onPress={() => setModalVisible(true)} />
      </View>

      <AddBookModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        bookName={bookName}
        onChange={setBookName}
        onAdd={handleAddBook}
      />
    </SafeAreaView>
  );
}
