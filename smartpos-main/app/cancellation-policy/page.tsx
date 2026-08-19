'use client';

import Link from 'next/link';
import { ArrowLeft, Store } from 'lucide-react';

export default function CancellationPolicyPage() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Cancellation Policy</h1>

        <p className="text-gray-600 leading-relaxed mb-6">
          Cancellation requests will be reviewed on a case-by-case basis. Where a cancellation is approved, the refund will normally be processed to the original payment method used for the transaction. Customers may request cancellation of their software subscription by contacting us at{' '}
          <strong>JOSHI_GD@YAHOO.COM</strong> or <strong>+91-9820504215</strong>.
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          Cancellation requests should be submitted before the next subscription renewal.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Once a subscription period has commenced, cancellation and access to the remaining subscription period will be handled according to the applicable subscription terms.
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
