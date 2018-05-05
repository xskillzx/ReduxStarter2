import React from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default function App() {
  return (
    <div>
      <BookList />
      <BookDetail />
    </div>
  );
}
