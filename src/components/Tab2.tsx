"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

export default function Tab2() {
  const [inputValue, setInputValue] = useState<number>(0);
  const [jumlahKotak, setJumlahKotak] = useState<number>(0);
  const [boxSize, setBoxSize] = useState<number>(0);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(
      10000,
      Math.max(0, parseInt(e.target.value, 10) || 0)
    );
    setInputValue(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setJumlahKotak(inputValue);
    const panelWidth = 80 * 16; // 80em in pixels (assuming 1em = 16px)
    const panelHeight = 30 * 16; // 30em in pixels (assuming 1em = 16px)
    const boxesPerRow = Math.ceil(Math.sqrt(inputValue));
    const newSize = Math.min(
      panelWidth / boxesPerRow,
      panelHeight / boxesPerRow
    );
    setBoxSize(newSize);
  };

  return (
    <>
      <Card className="w-[80em] h-[30em] grid grid-cols-2 gap-4">
        <div>
          <CardHeader>
            <CardTitle>Input Jumlah Kotak</CardTitle>
            <CardDescription>
              Silahkan isi berapapun angka di bawah ini, maks 10k !!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                min="1"
                max="10000"
                className="border p-2"
              />
              <Button type="submit" className="ml-2 p-2 border">
                Submit
              </Button>
            </form>
          </CardContent>
        </div>
        <div>
          <CardContent className="overflow-hidden">
            <div
              className="grid"
              style={{
                gridTemplateColumns: `repeat(auto-fill, minmax(${boxSize}px, 1fr))`,
                gridAutoRows: `${boxSize}px`,
              }}
            >
              {Array.from({ length: jumlahKotak }, (_, index) => (
                <div
                  key={index}
                  className="border"
                  style={{
                    width: `${boxSize}px`,
                    height: `${boxSize}px`,
                  }}
                ></div>
              ))}
            </div>
          </CardContent>
        </div>
      </Card>
    </>
  );
}
