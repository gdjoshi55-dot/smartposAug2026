'use client';

import Link from 'next/link';
import { ArrowLeft, Store } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <p className="text-gray-600 leading-relaxed mb-6">
          We respect the privacy of our customers and users. We may collect information necessary to provide our restaurant management software, process payments, create and manage customer accounts, provide support, and improve our services.
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          Information collected may include contact details, account information, restaurant/business information, transaction information and information provided while using the software.
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          We use reasonable administrative and technical measures to protect information. Payment processing may be handled by third-party payment service providers such as PayU. We do not store sensitive payment credentials such as full card numbers unless specifically supported and authorized through the applicable payment provider.
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          We may retain information for as long as reasonably necessary to provide services, comply with legal obligations, resolve disputes and maintain business records.
        </p>

        <p className="text-gray-600 leading-relaxed">
          For privacy-related questions or requests, contact <strong>GAJANAN DATTATRAYA JOSHI</strong> at{' '}
          <strong>JOSHI_GD@YAHOO.COM</strong> or <strong>+91-9820504215</strong>.
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
