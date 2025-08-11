"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"


import { contactFormSchema, ContactFormData } from '@/lib/validation';


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { set } from "zod";
import { useEffect, useState } from "react";
import MessageConfirmation from "./MessageConfirmation";

type ContactFormProps = {
    formdata: ContactFormData;
    setFormData: (data: ContactFormData) => void;
}


const ContactForm = ({formdata, setFormData}: ContactFormProps) => {
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

    const onSubmit: Parameters<typeof form.handleSubmit>[0] = (data) => {
        console.log("Submitted: ", data)
        setFormData(data)
        setShowConfirmation(true);
        //Reset the form after submission
        form.reset()
        
        console.log(showConfirmation)
    }

    

    return (
        <>
        {showConfirmation ? ( <MessageConfirmation showConfirmation={showConfirmation} setShowConfirmation={setShowConfirmation}/> ) : (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-lg">_name:</FormLabel>
                    <FormControl>
                        <Input placeholder="John Doe |" {...field} className="w-[400px] h-[58px] p-3 rounded-[8px] bg-[#020618] text-[#90A1B9]" />
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
                        <Input placeholder="John@example.com" {...field} className="w-[400px] h-[58px] p-3 rounded-[8px] bg-[#020618] text-[#90A1B9]" />
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
                        <Textarea placeholder="Your message here..." {...field} className="w-[400px] h-[160px] p-3 rounded-[8px] bg-[#020618] text-[#90A1B9]"/>
                    </FormControl>
                    <FormMessage className="text-lg text-red-600 !important"/>
                    </FormItem>
                )}
                />

                <Button type="submit" className="max-w-[172px] h-[40px] text-lg px-3 py-[10px] bg-[#FFB86A] rounded-[10px] text-[#020618] hover:bg-[#f7cda0]">submit-message</Button>
            </form>
      </Form>
        )}
      
    </>
  )
}

export default ContactForm;