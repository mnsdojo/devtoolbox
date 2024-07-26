"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { ArrowRight, Code, Terminal, Wand2 } from "lucide-react";
const featuredTools = [
  {
    name: "Git Workflow Simulator",
    description: "Master complex Git scenarios",
    path: "/git-simulator",
    icon: <Wand2 className="w-8 h-8" />,
  },
  {
    name: "Ascii Editor",
    description: "Create Readme files with ease",
    path: "/git-simulator",
    icon: <Wand2 className="w-8 h-8" />,
  },
  {
    name: "MarkDown to Html Converter",
    description: "Convert Markdown to Html  with ease",
    path: "/md2html",
    icon: <Wand2 className="w-8 h-8" />,
  },
];
function Page() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container px-4 md:px-6 space-y-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h1 className="text-3xl font-bold  tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to <span className="">DevToolBox</span>
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Your one-stop solution for powerful developer tools. Boost
              productivity and streamline your workflow with our innovative
              services.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {featuredTools.map((tool, index) => (
              <motion.div
                key={tool.path}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <Card className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {tool.icon}
                      <span>{tool.name}</span>
                    </CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={tool.path}>
                      <Button className="w-full">
                        Try it now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Powered by Next.js section
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-2 text-center"
        >
          <p className="text-sm text-muted-foreground">Powered by</p>
          <Link
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={100}
              height={20}
              className="transition-opacity hover:opacity-80"
            />
          </Link>
        </motion.div> */}
      </div>
    </motion.section>
  );
}

export default Page;
