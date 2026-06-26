
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from 'emailjs-com';
import { useLanguage } from '@/contexts/LanguageContext';

const formSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  honeypot: z.string().max(0, 'Bot detected'),
  timestamp: z.number()
});

type FormValues = z.infer<typeof formSchema>;

const EMAILJS_SERVICE_ID = "service_i3h66xg";
const EMAILJS_TEMPLATE_ID = "template_fgq53nh";
const EMAILJS_PUBLIC_KEY = "wQmcZvoOqTAhGnRZ3";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', message: '', honeypot: '', timestamp: Date.now() }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      if (data.honeypot) return;
      const timeDiff = Date.now() - data.timestamp;
      if (timeDiff < 3000) {
        toast({ title: "Error", description: "Por favor espera un momento antes de enviar.", variant: "destructive" });
        setIsSubmitting(false);
        return;
      }
      const { honeypot, timestamp, ...emailData } = data;
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: emailData.name,
        from_email: emailData.email,
        message: emailData.message,
        to_name: 'Jesús Eliud',
        reply_to: emailData.email
      }, EMAILJS_PUBLIC_KEY);
      toast({ title: "¡Mensaje enviado!", description: "Te responderé en menos de 24 horas.", variant: "default" });
      form.reset({ name: '', email: '', message: '', honeypot: '', timestamp: Date.now() });
    } catch (error) {
      toast({ title: "Error", description: "Hubo un problema al enviar. Intenta de nuevo.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-block mb-3 px-4 py-1.5 bg-brand-light text-brand rounded-full text-sm font-medium">
            Mensaje Directo
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Envíame un mensaje</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            ¿Tienes un proyecto en mente? Cuéntame y te respondo rápido.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 text-sm font-medium">Nombre</FormLabel>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <FormControl>
                      <Input placeholder="Tu nombre" className="pl-9 text-sm" {...field} />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 text-sm font-medium">Email</FormLabel>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <FormControl>
                      <Input type="email" placeholder="tu@email.com" className="pl-9 text-sm" {...field} />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="message" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 text-sm font-medium">Mensaje</FormLabel>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <FormControl>
                      <Textarea placeholder="Cuéntame sobre tu proyecto..." className="min-h-[120px] pl-9 resize-none text-sm" {...field} />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Honeypot */}
              <FormField control={form.control} name="honeypot" render={({ field }) => (
                <FormItem className="hidden"><FormControl><Input {...field} tabIndex={-1} /></FormControl></FormItem>
              )} />
              <FormField control={form.control} name="timestamp" render={({ field }) => (
                <FormItem className="hidden"><FormControl><Input type="hidden" {...field} /></FormControl></FormItem>
              )} />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand hover:bg-brand-dark text-white py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 font-medium text-sm shadow-md shadow-brand/20"
              >
                {isSubmitting ? "Enviando..." : <>Enviar Mensaje <Send className="h-4 w-4" /></>}
              </button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
