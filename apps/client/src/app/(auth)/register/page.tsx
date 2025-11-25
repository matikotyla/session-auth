"use client";

import { GithubLogo } from "@/assets/logos";
import { AuthClient } from "@/clients";
import { AuthSchema } from "@/schemas";
import { ApiType, type AuthType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";
import { Label } from "@repo/ui/label";
import { Separator } from "@repo/ui/separator";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FunctionComponent, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

const Page: FunctionComponent = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    setError,
  } = useForm<AuthType.Form.Register>({
    resolver: zodResolver(AuthSchema.Register),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
    mode: "onChange",
  });

  const { mutate, isPending } = useMutation<
    AuthType.Response.Register,
    ApiType.ApiError,
    AuthType.Request.Register
  >({
    mutationKey: ["register"],
    mutationFn: async ({ email, name, password }) => {
      const response = await axios.post("/api/auth/register", {
        email,
        name,
        password,
      });

      return response.data;
    },
    onSuccess: (data) => {
      router.push("/login");
    },
    onError: (error) => {
      console.log("react query failure", error);
      if (error instanceof AxiosError) {
        setError("root.server", {
          type: "server",
          message: error.response?.data.message,
        });
      } else {
        console.log(error);
      }
    },
  });

  const handleFormSubmit: SubmitHandler<AuthType.Form.Register> = ({
    email,
    name,
    password,
  }) => {
    // mutate({ email, name, password });

    AuthClient.signUp.email(
      {
        email,
        name,
        password,
      },
      {
        onSuccess: ({ data }) => {
          console.log("better auth success", data);
          router.push("/login");
        },
        onError: ({ error }) => {
          setError("root.server", {
            type: "server",
            message: error.message,
          });
        },
        onRequest: () => setLoading(true),
        onResponse: () => setLoading(false),
      }
    );
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex w-full flex-col justify-center gap-6 max-w-xs">
        <div className="flex flex-col gap-1 text-center">
          <h4 className="text-xl font-medium tracking-tight">
            Create an account
          </h4>
          <p className="text-sm text-muted-foreground">
            Sign up for an account
          </p>
        </div>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <Controller
            name="email"
            control={control}
            render={({ field: { name, value, onChange } }) => (
              <div className="grid w-full gap-2">
                <Label htmlFor={name}>Email</Label>
                <Input
                  id={name}
                  name={name}
                  type="email"
                  value={value}
                  placeholder="name@example.com"
                  onChange={onChange}
                  aria-invalid={!!errors.email}
                />
                <p className="text-destructive text-sm font-normal">
                  {errors.email?.message}
                </p>
              </div>
            )}
          />
          <Controller
            name="name"
            control={control}
            render={({ field: { name, value, onChange } }) => (
              <div className="grid w-full gap-2">
                <Label htmlFor={name}>Name</Label>
                <Input
                  id={name}
                  name={name}
                  type="text"
                  value={value}
                  placeholder="name"
                  onChange={onChange}
                  aria-invalid={!!errors.name}
                />
                <p className="text-destructive text-sm font-normal">
                  {errors.name?.message}
                </p>
              </div>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field: { name, value, onChange } }) => (
              <div className="grid w-full gap-2">
                <Label htmlFor={name}>Password</Label>
                <Input
                  id={name}
                  name={name}
                  type="password"
                  value={value}
                  placeholder="••••••••"
                  onChange={onChange}
                  aria-invalid={!!errors.password}
                />
                <p className="text-destructive text-sm font-normal">
                  {errors.password?.message}
                </p>
              </div>
            )}
          />
          {errors.root?.server && (
            <p className="text-center text-destructive text-sm font-normal">
              {errors.root?.server.message}
            </p>
          )}
          <Button type="submit" disabled={!isValid || !!loading}>
            {!!loading && <Loader2 className="animate-spin" />}
            Sign up with email
          </Button>
        </form>
        <Separator />
        <Button variant="outlined">
          <GithubLogo />
          Sign up with github
        </Button>
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link className="text-foreground font-medium" href="/login">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
