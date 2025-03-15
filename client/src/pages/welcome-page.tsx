import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertVisitorSchema, type InsertVisitor } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function WelcomePage() {
  const [submitted, setSubmitted] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const form = useForm<InsertVisitor>({
    resolver: zodResolver(insertVisitorSchema),
    defaultValues: {
      name: "",
      company: "",
      position: "",
      email: ""
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertVisitor) => {
      await apiRequest("POST", "/api/visitors", data);
    },
    onSuccess: () => {
      setSubmitted(true);
      localStorage.setItem('visitorInfo', JSON.stringify(form.getValues()));
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to save your information. Please try again.",
      });
    }
  });

  const onSubmit = (data: InsertVisitor) => {
    mutation.mutate(data);
  };

  const continueAsGuest = () => {
    setLocation('/home');
  };

  const explorePortfolio = () => {
    setLocation('/home');
  };

  return (
    <div className="min-h-screen bg-[#003366] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-white/20 to-transparent"
            animate={{
              x: ["0%", "100%", "0%"],
              y: ["0%", "100%", "0%"],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              left: `${-100 + i * 30}px`,
              top: `${-100 + i * 50}px`,
              filter: 'blur(40px)',
            }}
          />
        ))}

        {/* Additional animated shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute bg-gradient-to-r from-white/30 to-transparent"
            animate={{
              x: ["0vw", "100vw"],
              y: ["0vh", "100vh"],
              scale: [0.8, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
            style={{
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              left: `${-20 - i * 10}%`,
              top: `${10 + i * 15}%`,
              filter: 'blur(30px)',
            }}
          />
        ))}

        {/* Wave animation */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#004080]/40 to-transparent"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Background pulse effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-[#003366]/50 via-[#004080]/30 to-[#003366]/50"
        animate={{
          opacity: [0.5, 0.7, 0.5],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <Card className="w-full max-w-md bg-white/10 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-white">
            Hello! I am San Maung Maung, but you can also call me Zack.
            Welcome to my portfolio!
          </CardTitle>
        </CardHeader>
        <CardContent>
          {!submitted ? (
            <>
              <p className="text-white/80 mb-6 text-center">
                Before we continue, I'd love to know a bit about you. This information
                is solely for future contact purposes, and I assure you that your
                details will never be shared.
              </p>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    {...form.register("name")}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-300 text-sm mt-1">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    placeholder="Your Company"
                    {...form.register("company")}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  />
                  {form.formState.errors.company && (
                    <p className="text-red-300 text-sm mt-1">
                      {form.formState.errors.company.message}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    placeholder="Your Position"
                    {...form.register("position")}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  />
                  {form.formState.errors.position && (
                    <p className="text-red-300 text-sm mt-1">
                      {form.formState.errors.position.message}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    {...form.register("email")}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-300 text-sm mt-1">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#CC3333] to-[#FF6666] hover:from-[#FF6666] hover:to-[#CC3333] text-white border-none transition-all duration-300"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Submitting..." : "Submit"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border-[#CC3333] text-white hover:bg-[#CC3333]/20 hover:border-[#FF6666] transition-all duration-300"
                    onClick={continueAsGuest}
                  >
                    Continue as Guest
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center space-y-6"
            >
              <p className="text-white text-lg">
                Thank you so much for filling the information, let's explore my world of portfolio.
              </p>
              <Button
                onClick={explorePortfolio}
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:border-white/30"
              >
                Explore
              </Button>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}