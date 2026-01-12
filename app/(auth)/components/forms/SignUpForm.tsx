"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const signupScheme = z.object({
  username: z.string().min(2, "User name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters."),
  confirmPassword: z.string().min(6),
})
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"], 
    message: "Password does not match",
  })

type SignUpFormValues = z.infer<typeof signupScheme>

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signupScheme),
  })

  function onSubmit(data: SignUpFormValues) {
    console.log("Sign Up", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

      <div className="space-y-1">
        <Label htmlFor="username">User Name</Label>
        <Input
          id="username"
          type="text"
          {...register("username")}
        />
        {errors.username && (
          <p className="text-sm text-red-500">
            {errors.username.message}
          </p>
        )}
      </div>
      
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input id="email" {...register("email")} />
        {errors.email && (
          <p className="text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-sm text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="confirmPassword">Password</Label>
        <Input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-sm text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      
      <div className="flex justify-between">
        <Button type="submit">
          Log in
        </Button>

        <Button type="submit" variant="outline">
          Cancel
        </Button>
      </div>
      
    </form>
  )
}
