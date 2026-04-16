'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Alert from '@/components/ui/alert';

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [status, setStatus] = useState(null);

  async function onSubmit(data) {
    setStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  }

  const inputClass = (hasError) =>
    `w-full px-4 py-3 rounded-xl border text-gray-900 text-sm placeholder-gray-400 bg-white outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-orange-500 ${
      hasError ? 'border-red-400' : 'border-gray-200 hover:border-gray-300 focus:border-orange-400'
    }`;

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
          Imię i nazwisko
        </label>
        <input
          id="name"
          type="text"
          placeholder="Jan Kowalski"
          autoComplete="name"
          className={inputClass(!!errors.name)}
          {...register('name', { required: 'Imię jest wymagane.' })}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1.5" role="alert">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Adres email
        </label>
        <input
          id="email"
          type="email"
          placeholder="jan@example.com"
          autoComplete="email"
          spellCheck={false}
          className={inputClass(!!errors.email)}
          {...register('email', {
            required: 'Email jest wymagany.',
            pattern: { value: /^\S+@\S+\.\S+$/, message: 'Nieprawidłowy adres email.' },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1.5" role="alert">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Wiadomość
        </label>
        <textarea
          id="message"
          placeholder="Napisz wiadomość…"
          rows={5}
          className={inputClass(!!errors.message)}
          {...register('message', { required: 'Wiadomość jest wymagana.' })}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1.5" role="alert">{errors.message.message}</p>
        )}
      </div>

      {status === 'success' && <Alert variant="success">Wiadomość wysłana. Dziękujemy!</Alert>}
      {status === 'error' && <Alert variant="error">Wystąpił błąd. Spróbuj ponownie.</Alert>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange-600 text-white font-semibold py-3 rounded-xl hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        {isSubmitting ? 'Wysyłanie\u2026' : 'Wyślij wiadomość'}
      </button>
    </form>
  );
}
