import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const visitorSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company is required"),
  position: z.string().min(1, "Position is required"),
  email: z.string().email("Please enter a valid email address")
});

type VisitorInfo = z.infer<typeof visitorSchema>;

export default function WelcomePage() {
  const [submitted, setSubmitted] = useState(false);
  const [, setLocation] = useLocation();

  const form = useForm<VisitorInfo>({
    resolver: zodResolver(visitorSchema),
    defaultValues: {
      name: "",
      company: "",
      position: "",
      email: ""
    }
  });

  const onSubmit = (data: VisitorInfo) => {
    // Store the visitor info in localStorage or state management
    localStorage.setItem('visitorInfo', JSON.stringify(data));
    setSubmitted(true);
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
                  >
                    Submit
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