import { useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type Visitor, type ContactMessage } from "@shared/schema";

export default function AdminDashboard() {
  const [, setLocation] = useLocation();

  const { data: visitors = [], isLoading: loadingVisitors } = useQuery<Visitor[]>({
    queryKey: ["/api/admin/visitors"],
  });

  const { data: messages = [], isLoading: loadingMessages } = useQuery<ContactMessage[]>({
    queryKey: ["/api/admin/messages"],
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("POST", "/api/admin/logout");
    },
    onSuccess: () => {
      setLocation("/admin/login");
    },
  });

  // Check if admin is logged in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await apiRequest("GET", "/api/admin/visitors");
      } catch (error) {
        setLocation("/admin/login");
      }
    };
    checkAuth();
  }, [setLocation]);

  return (
    <div className="min-h-screen bg-[#F5F5F5] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#003366]">Admin Dashboard</h1>
          <Button
            onClick={() => logoutMutation.mutate()}
            variant="outline"
            className="text-[#CC3333]"
          >
            Logout
          </Button>
        </div>

        <Tabs defaultValue="visitors" className="space-y-4">
          <TabsList>
            <TabsTrigger value="visitors">Visitors</TabsTrigger>
            <TabsTrigger value="messages">Contact Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="visitors">
            <div className="grid gap-4">
              {visitors.map((visitor) => (
                <Card key={visitor.id}>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold">Name:</p>
                        <p>{visitor.name}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Email:</p>
                        <p>{visitor.email}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Company:</p>
                        <p>{visitor.company}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Position:</p>
                        <p>{visitor.position}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Date:</p>
                        <p>{new Date(visitor.createdAt).toLocaleString()}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="messages">
            <div className="grid gap-4">
              {messages.map((message) => (
                <Card key={message.id}>
                  <CardContent className="pt-6">
                    <div className="grid gap-4">
                      <div>
                        <p className="font-semibold">Name:</p>
                        <p>{message.name}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Email:</p>
                        <p>{message.email}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Message:</p>
                        <p>{message.message}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Date:</p>
                        <p>{new Date(message.createdAt).toLocaleString()}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
