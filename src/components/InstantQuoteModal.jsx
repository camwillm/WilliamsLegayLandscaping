import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X, Scissors, HelpCircle, Home } from 'lucide-react';

export default function InstantQuoteModal({ isOpen, setIsOpen }) {
  const [service, setService] = useState('grass');
  const [propertyType, setPropertyType] = useState('single');
  const [includeEdging, setIncludeEdging] = useState(true);
  const [estimate, setEstimate] = useState(0);

  useEffect(() => {
    if (service === 'grass') {
      const propertyPrices = {
        row: 45,      
        single: 60,   
      };
      const edgingCost = 15;
      
      const base = propertyPrices[propertyType] || 0;
      const edging = includeEdging ? edgingCost : 0;
      
      setEstimate(base + edging);
    } else {
      setEstimate(0);
    }
  }, [service, propertyType, includeEdging]);

  const handleClose = () => {
    if (typeof setIsOpen === 'function') {
      setIsOpen(false);
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      }
    },
    exit: { scale: 0.9, opacity: 0 },
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={handleClose}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-lg"
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-stone-800">Instant Quote</h2>
                <p className="text-stone-600">Get a price estimate for your service.</p>
              </div>
              <Button variant="ghost" size="icon" onClick={handleClose} className="rounded-full">
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="space-y-8">
              <div>
                <Label className="font-semibold text-stone-700 mb-2 block">Select Service</Label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger className="py-6 text-lg">
                    <SelectValue placeholder="Choose a service..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grass">
                      <div className="flex items-center gap-2">
                        <Scissors className="w-4 h-4"/> Front Yard Grass Service
                      </div>
                    </SelectItem>
                    <SelectItem value="other">
                      <div className="flex items-center gap-2">
                        <HelpCircle className="w-4 h-4"/> Other Services
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {service === 'grass' ? (
                <div className="space-y-8">
                  <div>
                    <Label className="font-semibold text-stone-700 mb-2 block">Property Type</Label>
                    <Select value={propertyType} onValueChange={setPropertyType}>
                      <SelectTrigger className="py-6 text-lg">
                        <SelectValue placeholder="Choose property type..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">
                          <div className="flex items-center gap-2">
                            <Home className="w-4 h-4"/> Single Family Home
                          </div>
                        </SelectItem>
                        <SelectItem value="row">
                          <div className="flex items-center gap-2">
                            <Home className="w-4 h-4"/> Row Home
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border p-4">
                     <Label htmlFor="edging-switch" className="font-semibold text-stone-700 flex-grow">
                        Weed Eating / Edging Required?
                     </Label>
                     <Switch
                        id="edging-switch"
                        checked={includeEdging}
                        onCheckedChange={setIncludeEdging}
                      />
                  </div>
                </div>
              ) : (
                <div className="text-center p-6 bg-stone-50 rounded-lg">
                  <p className="text-stone-700">For mulch, tree services, and other custom projects, please contact us for a detailed consultation and quote.</p>
                </div>
              )}

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg mt-8">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-emerald-800">Estimated Price</span>
                  <span className="text-4xl font-bold text-emerald-600">
                    {service === 'grass' ? `$${estimate.toFixed(2)}` : 'Contact Us'}
                  </span>
                </div>
                {service === 'grass' && <p className="text-sm text-emerald-700 mt-2">*For front yard only. Final price may vary.</p>}
              </div>
            </div>

            <div className="mt-8">
              <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-7 text-lg rounded-xl">
                Request This Service
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}