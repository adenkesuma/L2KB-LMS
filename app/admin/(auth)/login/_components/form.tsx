"use client";

import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../../components/ui/form";
import { Input } from "../../../../../components/ui/input";
import { Button } from "../../../../../components/ui/button";
import { setCookie } from "../../../../../lib/services/cookie.service";
import LoadingIcon from "../../../../../components/icons/loading-icon";

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(20),
});

function AdminLoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const post = await fetch(
      `${process.env.NEXT_PUBLIC_P2KB_API}/admin/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    const res = await post.json();

    if (res.statusCode === 200) {
      await setCookie("adminAK", res.accessToken, "/admin");
      toast.success("Welcome back, Admin");
    } else {
      toast.error("Invalid credentials");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 xl:space-y-6 w-3/4 md:w-1/2 xl:w-[25%]"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mx-auto flex justify-center pt-4">
          <Button type="submit" className="w-44" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? (
              <>
                <LoadingIcon />
                Loading
              </>
            ) : (
              "Login"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default AdminLoginForm;
