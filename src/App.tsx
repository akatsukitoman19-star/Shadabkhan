/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { SelectedWork } from './components/SelectedWork';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#111111] text-[#F5F3F0] selection:bg-[#E63946] selection:text-[#F5F3F0] flex flex-col">
      {/* Top Bar Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Essential Section 1: Hero */}
        <Hero />

        {/* Essential Section 2: Services (Gym, salon, restaurant, cafe, and personal portfolio) */}
        <Services />

        {/* Essential Section 3: Selected Work (Clean cards & clearly marked placeholders) */}
        <SelectedWork />

        {/* Essential Section 4: Contact (WhatsApp, Instagram, and Email) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
