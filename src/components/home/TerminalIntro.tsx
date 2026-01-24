"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TERMINAL_COMMANDS } from "@/lib/constants";

interface Line {
  type: "input" | "output";
  content: string;
}

export function TerminalIntro() {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<Line[]>([
    { type: "output", content: 'Welcome to mucahitgurbuz.dev! Type "help" for available commands.' },
  ]);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newLines: Line[] = [
      ...lines,
      { type: "input", content: `$ ${input}` },
    ];

    if (cmd === "clear") {
      setLines([{ type: "output", content: 'Terminal cleared. Type "help" for commands.' }]);
    } else if (TERMINAL_COMMANDS[cmd]) {
      newLines.push({ type: "output", content: TERMINAL_COMMANDS[cmd] });
      setLines(newLines);
    } else {
      newLines.push({
        type: "output",
        content: `Command not found: ${input}. Type "help" for available commands.`,
      });
      setLines(newLines);
    }

    setInput("");
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-mono font-bold mb-6 text-center">
            <span className="text-primary">&gt;</span> Interactive Terminal
          </h2>
          
          <div
            className="rounded-lg border border-border bg-black/50 backdrop-blur overflow-hidden cursor-text"
            onClick={handleTerminalClick}
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">
                mucahit@berlin:~
              </span>
            </div>

            {/* Terminal content */}
            <div
              ref={terminalRef}
              className="p-4 h-64 overflow-y-auto font-mono text-sm"
            >
              {lines.map((line, index) => (
                <div
                  key={index}
                  className={`mb-1 ${
                    line.type === "input"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {line.content}
                </div>
              ))}

              {/* Input line */}
              <form onSubmit={handleSubmit} className="flex items-center">
                <span className="text-primary mr-2">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="flex-1 bg-transparent border-none outline-none text-foreground font-mono"
                  placeholder={isFocused ? "" : "type a command..."}
                  autoComplete="off"
                  spellCheck={false}
                />
                <span className="animate-pulse text-primary">|</span>
              </form>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-4 font-mono">
            Try: whoami, skills, contact, help, or discover secret commands...
          </p>
        </div>
      </div>
    </motion.section>
  );
}
