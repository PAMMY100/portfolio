"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"


import { contactFormSchema, ContactFormData } from '@/lib/validation';


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useState } from "react";
import MessageConfirmation from "./MessageConfirmation";
import { sendEmail } from "@/lib/resend";

type ContactFormProps = {
    formdata: ContactFormData;
    setFormData: (data: ContactFormData) => void;
}


const ContactForm = ({setFormData}: ContactFormProps) => {
    const [showConfirmation, setShowConfirmation] = useState<boolean>(false)

    const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    })

    useEffect(() => {
    const subscription = form.watch((values) => {
        setFormData({
            name: values.name ?? '',
            email: values.email ?? '',
            message: values.message ?? ''
        }); // update only when values change
    });
    return () => subscription.unsubscribe();
    }, [form, setFormData]);

    const onSubmit: Parameters<typeof form.handleSubmit>[0] = async (data) => {
        console.log("Submitted: ", data)
        setFormData(data)

        const res = await sendEmail(data);

        if (res.success) {
            setShowConfirmation(true);
            form.reset()
        } else {
            alert("Something went wrong while sending your message. Please try again.")
        }
    }

    

    return (
        <>
        {showConfirmation ? ( <MessageConfirmation setShowConfirmation={setShowConfirmation} /> ) : (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 space-y-8">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-lg">_name:</FormLabel>
                    <FormControl>
                        <Input placeholder="John Doe |" {...field} className="w-[250px] md:w-[400px] h-[58px] p-3 rounded-[8px] bg-[#020618] text-[#90A1B9]" />
                    </FormControl>
                    <FormMessage className="text-lg text-red-600 !important"/>
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-lg">_email:</FormLabel>
                    <FormControl>
                        <Input placeholder="John@example.com" {...field} className="w-[250px] md:w-[400px] h-[58px] p-3 rounded-[8px] bg-[#020618] text-[#90A1B9]" />
                    </FormControl>
                    <FormMessage className="text-lg text-red-600 !important"/>
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-lg">_message:</FormLabel>
                    <FormControl>
                        <Textarea placeholder="Your message here..." {...field} className="w-[250px] md:w-[400px] h-[160px] p-3 rounded-[8px] bg-[#020618] text-[#90A1B9]"/>
                    </FormControl>
                    <FormMessage className="text-lg text-red-600 !important"/>
                    </FormItem>
                )}
                />

                <Button type="submit" className="max-w-[172px] h-[40px] text-lg px-3 py-[10px] bg-[#FFB86A] rounded-[10px] text-[#020618] hover:bg-[#f7cda0] cursor-pointer">submit-message</Button>
            </form>
      </Form>
        )}
      
    </>
  )
}

export default ContactForm;