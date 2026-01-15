"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Users, UserPlus, BookOpen } from "lucide-react";
import Footer from "@/components/Footer";

interface InitialScreenProps {
  gameState: any;
}

export default function InitialScreen({ gameState }: InitialScreenProps) {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [gameCode, setGameCode] = useState("");

  const handleCreateGame = () => {
    if (!playerName.trim()) return;
    gameState.setPlayerName?.(playerName.trim());
    gameState.setCurrentScreen("settings");
  };

  const handleJoinGame = () => {
    if (!playerName.trim() || !gameCode.trim()) return;
    gameState.joinGame(gameCode, playerName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-deep-slate">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-stone-texture" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/logo/Werewolves-Village-background.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-slate/60 via-deep-slate/40 to-deep-slate/90" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blood/10 via-transparent to-transparent" />
      </div>

      {/* Sparkle particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
        <div
          className="sparkle"
          style={{ top: "15%", left: "10%", animationDelay: "0s" }}
        ></div>
        <div
          className="sparkle"
          style={{ top: "25%", right: "15%", animationDelay: "0.8s" }}
        ></div>
        <div
          className="sparkle"
          style={{ bottom: "35%", left: "20%", animationDelay: "1.6s" }}
        ></div>
        <div
          className="sparkle"
          style={{ bottom: "20%", right: "10%", animationDelay: "2.4s" }}
        ></div>
      </div>

      <main className="relative z-20 flex-grow flex flex-col items-center justify-center px-4 py-12">
        <div className="text-center max-w-2xl mx-auto">
          {/* Hero Section with Logo */}
          <div className="mb-8">
            {/* Main Logo */}
            <div className="flex justify-center mb-6">
              <Image
                src="/logo/Werewolves-Village-t1-logo-sq-nobg-main.png"
                alt="Werewolves Village"
                width={320}
                height={320}
                className="h-36 md:h-48 w-auto moon-glow drop-shadow-2xl"
                priority
              />
            </div>

            {/* Title with chiselled effect */}
            <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-3 tracking-wide">
              <span className="text-chiselled">WEREWOLVES</span>
              <span className="block text-2xl md:text-3xl mt-1 text-ember fire-flicker">
                VILLAGE
              </span>
            </h1>

            {/* Medieval divider */}
            <div className="divider-medieval w-64 mx-auto my-6"></div>

            {/* Tagline */}
            <p className="text-parchment/70 text-lg font-medium tracking-wide mb-4">
              Where trust is a luxury and survival demands deception
            </p>

            {/* How to Play Link */}
            <Link
              href="/how-to-play"
              className="inline-flex items-center gap-2 text-ember hover:text-ember/80 text-sm mb-8 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              How to Play
            </Link>
          </div>

          {/* Main Action Buttons */}
          {!showCreateForm && !showJoinForm && (
            <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center mb-8">
              <Button
                onClick={() => {
                  setShowJoinForm(false);
                  setShowCreateForm(true);
                }}
                className="btn-ember w-full md:w-auto py-4 px-10 text-lg rounded font-bold flex items-center justify-center gap-3 group"
              >
                <UserPlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Create Game
              </Button>
              <Button
                onClick={() => {
                  setShowCreateForm(false);
                  setShowJoinForm(true);
                }}
                className="btn-iron w-full md:w-auto py-4 px-10 text-lg rounded font-bold flex items-center justify-center gap-3 group"
              >
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Join Game
              </Button>
            </div>
          )}

          {/* Join Game Form */}
          {showJoinForm && (
            <Card className="panel-stone max-w-md mx-auto border-iron-gray">
              <CardContent className="pt-8 pb-6 px-8 space-y-5">
                <h2 className="font-cinzel text-2xl text-ember mb-4">
                  Join the Hunt
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-parchment/60 text-sm mb-2 text-left uppercase tracking-wider">
                      Game Code
                    </label>
                    <Input
                      type="text"
                      value={gameCode}
                      onChange={(e) =>
                        setGameCode(e.target.value.toUpperCase())
                      }
                      placeholder="Enter 6-digit code"
                      className="input-iron w-full text-center text-xl font-bold tracking-[0.3em] uppercase"
                      maxLength={6}
                    />
                  </div>

                  <div>
                    <label className="block text-parchment/60 text-sm mb-2 text-left uppercase tracking-wider">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      value={playerName}
                      onChange={(e) => setPlayerName(e.target.value)}
                      placeholder="Enter your name"
                      className="input-iron w-full text-center text-lg"
                      maxLength={20}
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    onClick={() => setShowJoinForm(false)}
                    className="btn-iron flex-1 py-3"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleJoinGame}
                    disabled={!playerName.trim() || !gameCode.trim()}
                    className="btn-ember flex-1 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Enter Lobby
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Create Game Form */}
          {showCreateForm && (
            <Card className="panel-stone max-w-md mx-auto border-iron-gray">
              <CardContent className="pt-8 pb-6 px-8 space-y-5">
                <h2 className="font-cinzel text-2xl text-ember mb-4">
                  Begin the Hunt
                </h2>

                <div>
                  <label className="block text-parchment/60 text-sm mb-2 text-left uppercase tracking-wider">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    placeholder="Enter your name"
                    className="input-iron w-full text-center text-lg"
                    maxLength={20}
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    onClick={() => setShowCreateForm(false)}
                    className="btn-iron flex-1 py-3"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleCreateGame}
                    disabled={!playerName.trim()}
                    className="btn-ember flex-1 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Set Up Game
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
