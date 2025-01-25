'use client'
import { tittleFont } from '@/app/config/fonts';
import React, { useState } from 'react';
import Fondo from '../ui/fonfo/Fondo';

export const Apartamento = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleCancel = () => {
    // Handle cancel logic here
    setFormData({
      name: '',
      email: '',
      password: ''
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="flex flex-col justify-center w-full min-h-screen pt-16 sm:pt-18 bg-gray-100 z-10">

      <Fondo/>
      <h1 className={`${tittleFont.className} text-2xl font-bold mb-5 text-center`}>Registrar apartamento</h1>
  
      <div className="relative z-20 flex flex-col justify-center items-center">
  
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          
          <label htmlFor="name" className="py-1 block text-sm font-medium text-gray-700">Numero de apartamento:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />

          <label htmlFor="name" className="py-1 block text-sm font-medium text-gray-700">Piso:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />

          <label htmlFor="name" className="py-1 block text-sm font-medium text-gray-700">Nombre del propietario:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          
          <button
            type="submit"
            className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Registrar
          </button>

          <button
              type="button"
              onClick={handleCancel}
              className="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Cancelar
            </button>
        </form>
      </div>
    </div>
  );
};
