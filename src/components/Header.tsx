import React, { useEffect, useState } from 'react';
import Container from './Container';
import ThemeToggleButton from './ThemeToggleButton';

export default function Header() {
  return (
    <header className="py-5 md:py-5 shadow">
      <Container>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
            <a href="/">タイトルです</a>
          </h2>
          <div className="flex items-center space-x-5">
            <ThemeToggleButton />
            <a href="/contact" className="">
              お問い合わせ
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
