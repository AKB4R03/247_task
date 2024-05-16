"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SetStateAction, useState } from "react";

export default function Tab1() {
  const [input, setInput] = useState<string>("");
  const [wordData, setWordData] = useState<[string, number][]>([]);
  [];

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const wordsArray = input.toLowerCase().match(/\b\w+\b/g);

    console.log(wordsArray, "--word array--");
    if (wordsArray) {
      const wordCount: { [key: string]: number } = {};
      wordsArray.forEach((word: string) => {
        wordCount[word] = (wordCount[word] || 0) + 1;
      });

      const sortedWordData: [string, number][] = Object.entries(wordCount).sort(
        ([a], [b]) => a.localeCompare(b)
      );
      setWordData(sortedWordData);
    }
  };

  const handleDelete = (wordToDelete: string) => {
    setWordData(wordData.filter(([word]) => word !== wordToDelete));
    const updatedInput = input
      .split(" ")
      .filter((word) => word.toLowerCase() !== wordToDelete)
      .join(" ");
    setInput(updatedInput);
  };

  return (
    <>
      <Card className="w-[80em] h-[30em] grid grid-cols-2 gap-4">
        <div>
          <CardHeader>
            <CardTitle>Input Kalimat</CardTitle>
            <CardDescription>
              Silahkan isi kalimat apapun di bawah ini !!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid w-full gap-2">
              <Textarea
                placeholder="Tuliskan Kalimat"
                name="kalimat"
                autoComplete="off"
                value={input}
                onChange={handleInputChange}
              />
              <Button type="submit" variant="secondary">
                Calculate Word
              </Button>
            </form>
          </CardContent>
        </div>
        <div>
          <CardHeader>
            <CardTitle>Panel Penampil</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kata
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Jumlah Kata
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {wordData.map(([word, count], index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {word}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {count}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button
                        onClick={() => handleDelete(word)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </div>
      </Card>
    </>
  );
}
