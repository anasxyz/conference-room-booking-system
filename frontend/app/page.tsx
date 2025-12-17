"use client";

import React, { useState } from 'react';

import _button from '../components/_button';

export default function Home() {
  return (
    <_button text="log in" onClick={() => alert("Hello World")} />
  );
}
