'use client'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from '@/components/ui/use-toast'
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from "zod"

type ResponseType = {
    fileKey: string;
    fileUrl: string;
}

const formSchema = z.object({
    name: z.string().min(2, { message: "First name must have at least 2 characters" }),
    email: z.string().email({
        message: "Email not formatted",
    }),
    message: z.string().max(300, { message: "Message can't be more than 300 characters" }),
})

const ContactForm = () => {
    const [issubmitclicked, setIsSubmitClicked] = useState(false)
    const [image, setImage] = useState('')
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    const handleUploadComplete = (response: ResponseType[]) => {
        const imgurl = response[0].fileUrl
        setImage(imgurl)
        return toast({
            variant: "success",
            title: "Success",
            description: 'Image uploaded. You can submit now!',
        });
    };
    const handleUploadError = (error: any) => {
        return toast({
            variant: "destructive",
            title: "Warning",
            description: error.message,
        });
    };

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitClicked(true)

        const res = await fetch("/api/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "
            },
            body: JSON.stringify({
                name: values.name,
                email: values.email.toLowerCase(),
                message: values.message,
                image: image ? image : ''
            })
        })

        if (!res.ok) {
            const data = await res.json()
            setIsSubmitClicked(false)
            return toast({
                variant: "destructive",
                title: "Warning",
                description: data.message,
            });
        }
        const data = await res.json()
        setIsSubmitClicked(false)
        return toast({
            variant: "success",
            title: "success",
            description: data.message,
        });

    }

    return (
        <div className='max-w-3xl mx-auto'>
            <div className='flex flex-col gap-2 mb-5'>
                <h1 className='text-3xl tracking-wider font-semibold'>Contact Form</h1>
                <p className=''>Get in touch with us! Whether you have questions, feedback, or just want to say hello, we&apos;d love to hear from you. Our team is here to assist you, so feel free to drop us a message, and we&apos;ll get back to you as soon as possible</p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="">
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input className='dark:bg-black rounded-md dark:text-white' placeholder="name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl className='rounded-md'>
                                    <Input className='dark:bg-black rounded-md dark:text-white' placeholder="example@gmail.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea className='dark:bg-black rounded-md dark:text-white' placeholder="Your Message..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button>Send</Button>
                </form>
            </Form>
        </div>
    )
}

export default ContactForm
