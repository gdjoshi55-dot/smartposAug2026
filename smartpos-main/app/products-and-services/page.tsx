'use client';

import Link from 'next/link';
import { ArrowLeft, Store, Check } from 'lucide-react';

export default function ProductsAndServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Login</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Store className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-gray-900">SmartPOS</span>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Products &amp; Services</h1>

        <h2 className="text-xl font-semibold text-gray-900 mb-2">Restaurant Management Software</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Our restaurant management software is a subscription-based solution designed to help
          restaurants manage their day-to-day operations.
        </p>

        <ul className="space-y-2 mb-6">
          {[
            'Restaurant order management',
            'Customer ordering',
            'Billing and order processing',
            'Restaurant operational management',
            'Customer management',
            'Sales and business reports',
            'Other restaurant management functions',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <div className="bg-white border border-gray-200 rounded-xl p-2 mb-6">
          <p className="text-sm text-gray-500 mb-2">Subscription Price</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">&#8377;999</span>
            <span className="text-sm text-gray-500">per month</span>
            <span className="text-gray-400 mx-1">/</span>
            <span className="text-2xl font-bold text-gray-900">&#8377;9999</span>
            <span className="text-sm text-gray-500">per year</span>
            <span className="text-sm text-gray-500">(Subject to change according to restaurant size and number of tables. These charges are for upto a table number of 10.)</span>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed">
          Software access is provided electronically after successful payment and account activation.
        </p>
      </div>

      <footer className="bg-white border-t border-gray-200 mt-12 py-6">
        <div className="max-w-4xl mx-auto px-4 text-center text-xs text-gray-400">
          &copy; 2026 SmartPOS &bull; Operated by GAJANAN DATTATRAYA JOSHI
        </div>
      </footer>
    </div>
  );
}
