import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa";
import Browser from "./layout/Browser";


const Workflow = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 py-10 px-10 w-full h-auto">
      <div className="flex flex-1 flex-col justify-center items-start lg:gap-4 space-y-6 lg:space-y-0 w-full">
        <h1 className="text-5xl font-bold">Improve Workflow</h1>

        <Tabs defaultValue="Research">
          <TabsList className="grid grid-cols-3 w-full h-[40px] mx-auto mb-6">
            <TabsTrigger value="Research">Research</TabsTrigger>
            <TabsTrigger value="Plan">Plan</TabsTrigger>
            <TabsTrigger value="Design">Design</TabsTrigger>
          </TabsList>
          <TabsContent value="Research">
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta.
            </p>
          </TabsContent>
          <TabsContent value="Plan">
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet.
            </p>
          </TabsContent>
          <TabsContent value="Design">
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris.
            </p>
          </TabsContent>
        </Tabs>
        <Button className="bg-white hover:bg-white text-blue-600 px-0 shadow-none">
          See how it helped others <FaArrowRight className="ml-4" />
        </Button>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Browser imageScr='/images/meeting1.png' />
      </div>
    </div>
  );
};

export default Workflow;
