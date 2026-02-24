import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BASE_URL } from "@/utils/constants";
import { Card, CardContent } from "@/components/ui/card";
import { toast, Toaster } from "sonner";

const BusinessClassCountriesIndex = () => {

  const [destinations, setDestinations] = useState([])

    /* ---------------- UI ---------------- */
  
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-blue-600">
              Best Deals Countries
            </h1>
            <p className="text-gray-500">
              View, update, or delete destinations
            </p>
          </div>

          <Button
            size="lg"
            onClick={() => (window.location.href = "/admin/best-deals/create")}
          >
            + Create Destination
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest._id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="rounded-2xl shadow-lg hover:shadow-xl transition">
                <CardContent className="p-4 space-y-3">
                  <img
                    src={dest.img}
                    alt={dest.city}
                    className="h-40 w-full object-cover rounded-lg"
                  />

                  <div>
                    <h2 className="text-xl font-semibold">
                      {dest.city}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {dest.countryName}
                    </p>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        (window.location.href = `/admin/best-deals/edit/${dest._id}`)
                      }
                    >
                      Update
                    </Button>

                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(dest._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <Toaster richColors position="top-right" />
    </div>
  )
}

export default BusinessClassCountriesIndex