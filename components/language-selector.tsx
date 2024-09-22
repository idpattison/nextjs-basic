"use client"

import React from 'react';
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

export function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState("English")

  const greetings = {
    English: "Hello World",
    French: "Bonjour le Monde",
    Spanish: "Hola Mundo"
  }

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value)
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Language Selector</h1>
      
      <Select onValueChange={handleLanguageChange} defaultValue={selectedLanguage}>
        <SelectTrigger className="w-full mb-4">
          <SelectValue placeholder="Select a language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="English">English</SelectItem>
          <SelectItem value="French">French</SelectItem>
          <SelectItem value="Spanish">Spanish</SelectItem>
        </SelectContent>
      </Select>
      
      <div className="p-4 bg-gray-100 rounded-md text-center">
        <p className="text-xl font-semibold">{greetings[selectedLanguage]}</p>
      </div>
    </div>
  )
}