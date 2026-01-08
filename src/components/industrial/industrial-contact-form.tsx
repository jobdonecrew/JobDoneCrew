"use client"

import { Button } from "@/components/ui/button"
import { User, Phone, Mail, MessageSquare, Send, MapPin, CheckCircle } from "lucide-react"
import { useState, FormEvent } from "react"
import { cn } from "@/lib/utils"
import { useForm, ValidationError } from '@formspree/react';

export function IndustrialContactForm() {
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [state, handleSubmit] = useForm("mwvpzkqa");
  
  const [fieldValues, setFieldValues] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
    message: ""
  })

  // Состояние для ошибок валидации
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFieldValues(prev => ({ ...prev, [name]: value }))
    
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  // Функция валидации
  const validate = (formData: FormData) => {
    const errors: Record<string, string> = {};
    
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const zip = formData.get('zip') as string;

    // 1. Валидация имени (только буквы и пробелы)
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      errors.name = "Name should contain only letters";
    }

    // 2. Валидация телефона (минимум 10 цифр, разрешены +, -, (), пробелы)
    // Удаляем всё, кроме цифр, и проверяем длину
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      errors.phone = "Phone number must be at least 10 digits";
    } else if (!/^[\d\s\-\(\)\+]+$/.test(phone)) {
       errors.phone = "Invalid characters in phone number";
    }

    // 3. Валидация Email (строгая проверка формата)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    // 4. Валидация Zip Code (только 5 цифр)
    if (!/^\d{5}$/.test(zip)) {
      errors.zip = "Zip code must be exactly 5 digits";
    }

    return errors;
  };

  const handleCustomSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const errors = validate(formData);

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return; // Прерываем отправку, если есть ошибки
    }

    // Очищаем ошибки перед отправкой
    setValidationErrors({});
    
    // Вызываем оригинальный обработчик Formspree
    handleSubmit(e);
  };

  if (state.succeeded) {
      return (
        <div className="text-center py-12 px-6 bg-zinc-900 border-2 border-amber-600 rounded-sm">
          <div className="inline-flex items-center justify-center p-4 bg-amber-600/20 rounded-full mb-6">
            <CheckCircle className="h-12 w-12 text-amber-500" />
          </div>
          <h3 className="text-3xl font-black text-white uppercase mb-4">Request Received!</h3>
          <p className="text-zinc-400 text-lg mb-8 max-w-md mx-auto">
            Thanks for reaching out. Our team will review your project details and get back to you with an estimate within 24 hours.
          </p>
          <Button 
            onClick={() => window.location.reload()}
            variant="outline"
            className="bg-zinc-900 border-zinc-700 text-white hover:bg-zinc-800 hover:text-white uppercase font-bold tracking-wider"
          >
            Send Another Request
          </Button>
        </div>
      )
  }

  return (
    <form className="space-y-6" onSubmit={handleCustomSubmit} noValidate>
      
      <div className="space-y-7">
        {/* 1. Name */}
        <div className="group relative">
          <label 
            htmlFor="name"
            className={cn(
              "absolute left-12 transition-all duration-300 pointer-events-none z-10",
              focusedField === "name" || fieldValues.name
                ? "-top-6 text-xs text-amber-500 font-bold translate-y-0"
                : "top-1/2 -translate-y-1/2 text-zinc-500 font-medium"
            )}
          >
            Full Name
          </label>
          <User className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 transition-colors duration-300",
            focusedField === "name" ? "text-amber-500" : "text-zinc-600"
          )} />
          <input
            id="name"
            type="text"
            name="name"
            value={fieldValues.name}
            onChange={handleInputChange}
            onFocus={() => setFocusedField("name")}
            onBlur={(e) => !e.target.value && setFocusedField(null)}
            className={cn(
              "w-full bg-zinc-900 border-2 rounded-sm pl-12 pr-4 py-3.5 font-medium text-white outline-none focus:ring-1 transition-all duration-300 placeholder:text-transparent",
              validationErrors.name 
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/50" 
                : "border-zinc-700 focus:border-amber-600 focus:ring-amber-600/50"
            )}
          />
          {validationErrors.name && (
            <p className="text-red-500 text-xs font-bold mt-1 ml-1">{validationErrors.name}</p>
          )}
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
        </div>

        {/* 2. Phone */}
        <div className="group relative">
          <label 
            htmlFor="phone"
            className={cn(
              "absolute left-12 transition-all duration-300 pointer-events-none z-10",
              focusedField === "phone" || fieldValues.phone
                ? "-top-6 text-xs text-amber-500 font-bold translate-y-0"
                : "top-1/2 -translate-y-1/2 text-zinc-500 font-medium"
            )}
          >
            Phone Number
          </label>
          <Phone className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 transition-colors duration-300",
            focusedField === "phone" ? "text-amber-500" : "text-zinc-600"
          )} />
          <input
            id="phone"
            type="tel"
            name="phone"
            value={fieldValues.phone}
            onChange={handleInputChange}
            onFocus={() => setFocusedField("phone")}
            onBlur={(e) => !e.target.value && setFocusedField(null)}
            className={cn(
              "w-full bg-zinc-900 border-2 rounded-sm pl-12 pr-4 py-3.5 font-medium text-white outline-none focus:ring-1 transition-all duration-300 placeholder:text-transparent",
              validationErrors.phone
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/50" 
                : "border-zinc-700 focus:border-amber-600 focus:ring-amber-600/50"
            )}
          />
          {validationErrors.phone && (
            <p className="text-red-500 text-xs font-bold mt-1 ml-1">{validationErrors.phone}</p>
          )}
          <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-xs mt-1" />
        </div>

        {/* 3. Email */}
        <div className="group relative">
          <label 
            htmlFor="email"
            className={cn(
              "absolute left-12 transition-all duration-300 pointer-events-none z-10",
              focusedField === "email" || fieldValues.email
                ? "-top-6 text-xs text-amber-500 font-bold translate-y-0"
                : "top-1/2 -translate-y-1/2 text-zinc-500 font-medium"
            )}
          >
            Email Address
          </label>
          <Mail className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 transition-colors duration-300",
            focusedField === "email" ? "text-amber-500" : "text-zinc-600"
          )} />
          <input
            id="email"
            type="email"
            name="email"
            value={fieldValues.email}
            onChange={handleInputChange}
            onFocus={() => setFocusedField("email")}
            onBlur={(e) => !e.target.value && setFocusedField(null)}
            className={cn(
              "w-full bg-zinc-900 border-2 rounded-sm pl-12 pr-4 py-3.5 font-medium text-white outline-none focus:ring-1 transition-all duration-300 placeholder:text-transparent",
              validationErrors.email
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/50" 
                : "border-zinc-700 focus:border-amber-600 focus:ring-amber-600/50"
            )}
          />
          {validationErrors.email && (
            <p className="text-red-500 text-xs font-bold mt-1 ml-1">{validationErrors.email}</p>
          )}
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
        </div>

        {/* 4. Zip Code */}
        <div className="group relative">
          <label 
            htmlFor="zip"
            className={cn(
              "absolute left-12 transition-all duration-300 pointer-events-none z-10",
              focusedField === "zip" || fieldValues.zip
                ? "-top-6 text-xs text-amber-500 font-bold translate-y-0"
                : "top-1/2 -translate-y-1/2 text-zinc-500 font-medium"
            )}
          >
            Zip Code
          </label>
          <MapPin className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 transition-colors duration-300",
            focusedField === "zip" ? "text-amber-500" : "text-zinc-600"
          )} />
          <input
            id="zip"
            type="text"
            name="zip"
            maxLength={5}
            value={fieldValues.zip}
            onChange={handleInputChange}
            onFocus={() => setFocusedField("zip")}
            onBlur={(e) => !e.target.value && setFocusedField(null)}
            className={cn(
              "w-full bg-zinc-900 border-2 rounded-sm pl-12 pr-4 py-3.5 font-medium text-white outline-none focus:ring-1 transition-all duration-300 placeholder:text-transparent",
              validationErrors.zip
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/50" 
                : "border-zinc-700 focus:border-amber-600 focus:ring-amber-600/50"
            )}
          />
           {validationErrors.zip && (
            <p className="text-red-500 text-xs font-bold mt-1 ml-1">{validationErrors.zip}</p>
          )}
           <ValidationError prefix="Zip Code" field="zip" errors={state.errors} className="text-red-500 text-xs mt-1" />
        </div>

        {/* 5. Message */}
        <div className="group relative">
          <label 
            htmlFor="message"
            className={cn(
              "absolute left-12 transition-all duration-300 pointer-events-none z-10",
              focusedField === "message" || fieldValues.message
                ? "-top-6 text-xs text-amber-500 font-bold translate-y-0"
                : "top-4 text-zinc-500 font-medium"
            )}
          >
            {focusedField === "message" || fieldValues.message
              ? "Project Details" 
              : "Tell us about your project or ask any question..."}
          </label>
          <MessageSquare className={cn(
            "absolute left-4 top-4 h-5 w-5 transition-colors duration-300",
            focusedField === "message" ? "text-amber-500" : "text-zinc-600"
          )} />
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={fieldValues.message}
            onChange={handleInputChange}
            onFocus={() => setFocusedField("message")}
            onBlur={(e) => !e.target.value && setFocusedField(null)}
            className="w-full bg-zinc-900 border-2 border-zinc-700 rounded-sm pl-12 pr-4 py-3.5 font-medium text-white outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600/50 transition-all duration-300 placeholder:text-transparent resize-none"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
        </div>
      </div>

      <Button 
        type="submit" 
        disabled={state.submitting}
        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-black py-8 text-lg uppercase tracking-wider shadow-lg hover:shadow-amber-600/20 transition-all flex items-center justify-center gap-3 group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        <span className="relative z-10">{state.submitting ? 'Sending...' : 'Get Your Free Estimate'}</span>
        {!state.submitting && <Send className="relative z-10 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
      </Button>
      
      <p className="text-center text-zinc-500 text-xs font-medium">
        By submitting this form, you agree to our privacy policy. No spam, ever.
      </p>
    </form>
  )
}
