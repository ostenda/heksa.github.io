'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

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

  return (
    <div className="max-w-lg mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Kontakt</h2>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-gray-700">Imię i nazwisko</label>
          <input
            type="text"
            placeholder="Podaj imię i nazwisko"
            className="w-full p-2 border rounded"
            {...register('name', { required: 'Imię jest wymagane.' })}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Podaj adres email"
            className="w-full p-2 border rounded"
            {...register('email', {
              required: 'Email jest wymagany.',
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Nieprawidłowy adres email.' },
            })}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700">Wiadomość</label>
          <textarea
            placeholder="Napisz wiadomość"
            className="w-full p-2 border rounded"
            rows="4"
            {...register('message', { required: 'Wiadomość jest wymagana.' })}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        {status === 'success' && (
          <p className="text-green-600 text-sm">Wiadomość została wysłana. Dziękujemy!</p>
        )}
        {status === 'error' && (
          <p className="text-red-500 text-sm">Wystąpił błąd. Spróbuj ponownie.</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 disabled:opacity-50"
        >
          {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
        </button>
      </form>
    </div>
  );
}
