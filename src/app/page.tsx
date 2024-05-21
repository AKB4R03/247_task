import Tab1 from "@/components/Tab1";
import Tab2 from "@/components/Tab2";
import { CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className=" h-[70px] flex items-center text-black border-b-2 border-[#F4F4F5]">
        <CardHeader>
          <p>Muhammad Rizky Akbar</p>
        </CardHeader>
      </header>

      {/* Konten utama */}
      <div className="flex-grow flex justify-center pt-5">
        <Tabs defaultValue="tab1" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <div className=" flex justify-center">
            <TabsContent value="tab1">
              <Tab1 />
            </TabsContent>
          </div>
          <div className=" flex justify-center">
            <TabsContent value="tab2">
              <Tab2 />
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="h-[70px] flex items-center text-black border-t-2 border-[#F4F4F5]">
        <CardHeader>
          <p>14/05/2024</p>
        </CardHeader>
      </footer>
    </div>
  );
}
