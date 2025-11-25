"use client";

import { GithubLogo } from "@/assets/logos";
import { AuthClient } from "@/clients";
import { AuthSchema } from "@/schemas";
import { AuthType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";
import { Label } from "@repo/ui/label";
import { Separator } from "@repo/ui/separator";
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
  } = useForm<AuthType.Form.Login>({
    resolver: zodResolver(AuthSchema.Login),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const handleFormSubmit: SubmitHandler<AuthType.Form.Login> = ({
    email,
    password,
  }) => {
    AuthClient.signIn.email(
      {
        email,
        password,
      },
      {
        onSuccess: ({ data }) => {
          console.log("better auth success", data);
          router.push("/dashboard");
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
          <h4 className="text-xl font-medium tracking-tight">Welcome back</h4>
          <p className="text-sm text-muted-foreground">Login to your account</p>
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
            Sign in with email
          </Button>
        </form>
        <Separator />
        <Button variant="outlined">
          <GithubLogo />
          Sign in with github
        </Button>
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link className="text-foreground font-medium" href="/register">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
