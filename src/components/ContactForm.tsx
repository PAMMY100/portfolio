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

type ContactFormProps = {
    formdata: ContactFormData;
    setFormData: (data: ContactFormData) => void;
}


const ContactForm = ({formdata, setFormData}: ContactFormProps) => {

    const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    })

    const onSubmit: Parameters<typeof form.handleSubmit>[0] = (data) => {
        console.log("Submitted: ", data)
        setFormData({
            name: data.name,
            email: data.email,
            message: data.message
        })
        
        //Reset the form after submission
        form.reset()
    }

    

    return (
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

        <Button type="submit" className="w-[152px] h-[40px] text-lg px-3 py-[10px] bg-[#314158]">Submit</Button>
      </form>
    </Form>
  )
}

export default ContactForm;