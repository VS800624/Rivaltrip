import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Popular Destinations",
      description: "Manage cities, sections, and travel info",
      route: "/admin/popular-destinations",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Best Deals Countries",
      description: "Manage discounted travel destinations",
      route: "/admin/best-deals",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Business Class Countries",
      description: "Manage premium travel routes",
      route: "/admin/business-class",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Users & Emails",
      description: "View registered users and emails",
      route: "/admin/users",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-blue-600">
            Admin Dashboard
          </h1>
          <p className="text-gray-500 mt-2">
            Manage all website content from one place
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full shadow-xl rounded-2xl hover:shadow-2xl transition">
                <CardContent className="p-6 flex flex-col justify-between h-full">

                  {/* Top */}
                  <div>
                    <div
                      className={`w-full h-2 rounded-full bg-gradient-to-r ${card.color} mb-4`}
                    ></div>

                    <h2 className="text-xl font-semibold mb-2">
                      {card.title}
                    </h2>

                    <p className="text-gray-500 text-sm">
                      {card.description}
                    </p>
                  </div>

                  {/* Button */}
                  <div className="pt-4">
                    <Button
                      className="w-full"
                      onClick={() => navigate(card.route)}
                    >
                      Manage
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Admin Panel — All Rights Reserved
        </div>
      </motion.div>
    </div>
  );
}
