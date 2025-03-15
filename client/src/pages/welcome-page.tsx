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
    <div className="min-h-screen bg-[#003366] flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-[#003366]">
            Hello! I am San Maung Maung, but you can also call me Zack.
            Welcome to my portfolio!
          </CardTitle>
        </CardHeader>
        <CardContent>
          {!submitted ? (
            <>
              <p className="text-[#336699] mb-6 text-center">
                Before we continue, I'd love to know a bit about you. This information
                is solely for future contact purposes, and I assure you that your
                details will never be shared.
              </p>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    {...form.register("name")}
                  />
                  {form.formState.errors.name && (
                    <p className="text-[#CC3333] text-sm mt-1">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    placeholder="Your Company"
                    {...form.register("company")}
                  />
                  {form.formState.errors.company && (
                    <p className="text-[#CC3333] text-sm mt-1">
                      {form.formState.errors.company.message}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    placeholder="Your Position"
                    {...form.register("position")}
                  />
                  {form.formState.errors.position && (
                    <p className="text-[#CC3333] text-sm mt-1">
                      {form.formState.errors.position.message}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    {...form.register("email")}
                  />
                  {form.formState.errors.email && (
                    <p className="text-[#CC3333] text-sm mt-1">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Button
                    type="submit"
                    className="w-full bg-[#003366] hover:bg-[#336699] text-white"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Submitting..." : "Submit"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
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
              <p className="text-[#336699] text-lg">
                Thank you so much for filling the information, let's explore my world of portfolio.
              </p>
              <Button
                onClick={explorePortfolio}
                className="bg-[#003366] hover:bg-[#336699] text-white"
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