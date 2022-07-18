import React from 'react';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="dark:bg-secondary bg-slate-300 dark:text-gray-100">
      <Container>
        <p className="text-center py-3">フッターです</p>
      </Container>
    </footer>
  );
}
