import React, { useState, useEffect } from 'react';
import Container from './Container';
import ThemeToggleButton from './ThemeToggleButton';

export default function Header() {
  return (
    <header className="my-5 md:my-8">
      <Container>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
            <a href="/">こっそり生きる</a>
          </h2>
          <ThemeToggleButton />
        </div>
      </Container>
    </header>
  );
}