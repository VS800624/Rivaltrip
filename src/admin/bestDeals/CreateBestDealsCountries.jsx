import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast, Toaster } from "sonner";
import { BASE_URL } from "@/utils/constants";
import { useNavigate } from "react-router-dom";

const CreateBestDealsCountries = () => {

  const navigate = useNavigate()
    const [form, setForm] = useState({
      slug: "",
      countryName: "",
      city: "",
      img: "",
      headerImg: "",
      sections: [],
    });
  
    /* ---------------- Section Logic ---------------- */
  // Give me the previous value of form, and I will return a new updated value.
// Takes the old form → keeps everything → adds one new empty section → updates the state.
    const addSection = () => {
      setForm(prev => ({
        ...prev,
        sections: [
          ...prev.sections,
          {type: "", title: "", description: "", image: "", items: []}
        ]
      }))
    }

    // Go through every section, and keep only those whose index is NOT equal to the given index
    // Takes old form → removes the section at given index → saves new form
    const removeSection = (index) => {
      setForm(prev => ({
        ...prev,
        sections: prev.sections.filter((_,i) =>  i!== index)
      }))
    }

    const updateSection = (index,key,value) => {
      setForm(prev => ({
        ...prev,
        sections: prev.sections.map((sec,i) => (
          i === index ? {...sec, [key]: value} : sec
          // We use [key]: value to set object properties dynamically using variables.
        ))
      }))
    }
    
    /* ---------------- Item Logic ---------------- */
    const addItem = (index) => {
      setForm(prev => ({
        ...prev,
        sections: prev.sections.map((sec,i) => (
          i === index ? {...sec, items: [...sec.items,  {name: "", description: "", image: ""}]} : sec
        ))
      }))
    }


    const updateItem = (sIndex, iIndex, key, value) => {
      setForm(prev => ({
        ...prev,
        sections: prev.sections.map((sec,i) => (
          i === sIndex ? {...sec, items: sec.items.map((item,j) => (
            j === iIndex ? {...item,[key]: value} : item 
          ))} : sec
        ))
      }))
    }

    const removeItem = (sIndex, iIndex, key, value) => {
      setForm(prev => ({
        ...prev,
        sections: prev.sections.map((sec,i) => (
          i === sIndex ? {...sec, items: sec.items.filter((_,j) => j !== iIndex )} : sec
        ))
      }))
    }

    /* ---------------- Submit ---------------- */
    const handleSubmit = async() => {
      try{
        const res = await axios.put(BASE_URL + "/admin/best-deals", form)
        console.log(res.data)
        toast.success("Best deals country created successfully")
        setTimeout(() => {
          navigate("/admin/best-deals")
        }, 1000);
      }catch(err){
        console.error(err)
        toast.error(err.response?.data?.message || "Something went wrong");
      }
    } 
    
    return (
    <div className="min-h-screen bg-slate-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-blue-600">
            Create Popular Destination
          </h1>
          <p className="text-gray-500">
            Add destination details, sections, and items
          </p>
        </div>

        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-6 space-y-8">

            {/* Basic Info */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Basic Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Slug"
                  value={form.slug}
                  onChange={(e) => setForm({ ...form, slug: e.target.value })}
                />

                <Input
                  placeholder="Country Name"
                  value={form.countryName}
                  onChange={(e) =>
                    setForm({ ...form, countryName: e.target.value })
                  }
                />

                <Input
                  placeholder="City"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                />

                <Input
                  placeholder="Main Image URL"
                  value={form.img}
                  onChange={(e) => setForm({ ...form, img: e.target.value })}
                />

                <Input
                  placeholder="Header Image URL"
                  value={form.headerImg}
                  onChange={(e) =>
                    setForm({ ...form, headerImg: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Sections</h2>
                <Button onClick={addSection}>+ Add Section</Button>
              </div>

              {form.sections.map((section, sIndex) => (
                <motion.div
                  key={sIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="border rounded-xl p-4 bg-slate-50 space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">
                      Section {sIndex + 1}
                    </h3>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeSection(sIndex)}
                    >
                      Delete
                    </Button>
                  </div>

                  <Input
                    placeholder="Type (iconic_sights / food / tips)"
                    value={section.type}
                    onChange={(e) =>
                      updateSection(sIndex, "type", e.target.value)
                    }
                  />

                  <Input
                    placeholder="Title"
                    value={section.title}
                    onChange={(e) =>
                      updateSection(sIndex, "title", e.target.value)
                    }
                  />

                  <Textarea
                    placeholder="Description"
                    value={section.description}
                    onChange={(e) =>
                      updateSection(
                        sIndex,
                        "description",
                        e.target.value
                      )
                    }
                  />

                  <Input
                    placeholder="Section Image URL"
                    value={section.image}
                    onChange={(e) =>
                      updateSection(sIndex, "image", e.target.value)
                    }
                  />

                  {/* Items */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">Items</h4>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => addItem(sIndex)}
                      >
                        + Add Item
                      </Button>
                    </div>

                    {section.items.map((item, iIndex) => (
                      <motion.div
                        key={iIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="grid grid-cols-1 md:grid-cols-4 gap-2 border rounded-lg p-3 bg-white"
                      >
                        <Input
                          placeholder="Name"
                          value={item.name}
                          onChange={(e) =>
                            updateItem(
                              sIndex,
                              iIndex,
                              "name",
                              e.target.value
                            )
                          }
                        />

                        <Input
                          placeholder="Image URL"
                          value={item.image}
                          onChange={(e) =>
                            updateItem(
                              sIndex,
                              iIndex,
                              "image",
                              e.target.value
                            )
                          }
                        />

                        <Textarea
                          placeholder="Description"
                          value={item.description}
                          onChange={(e) =>
                            updateItem(
                              sIndex,
                              iIndex,
                              "description",
                              e.target.value
                            )
                          }
                        />

                        <Button
                          variant="destructive"
                          size="sm"
                          className="my-auto"
                          onClick={() => removeItem(sIndex, iIndex)}
                        >
                          Remove
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Submit */}
            <div className="text-center pt-4">
              <Button
                size="lg"
                className="px-10 text-lg"
                onClick={handleSubmit}
              >
                Save Destination
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      <Toaster richColors position="top-right" />
    </div>
  );
}

export default CreateBestDealsCountries


// Note :
// We need index in addItem because:
// We must know which section should get the new item.
// But in addSection:
// We are adding a section at the end, not inside any existing section.
// So no index is needed.