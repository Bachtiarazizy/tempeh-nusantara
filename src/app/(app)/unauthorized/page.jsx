// app/unauthorized/page.js
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function UnauthorizedPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-red-600">Akses Ditolak</CardTitle>
          <CardDescription>Anda tidak memiliki izin untuk mengakses halaman ini</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-sm text-gray-600">Silakan hubungi administrator jika Anda merasa ini adalah kesalahan.</p>
          <div className="flex gap-2">
            <Button variant="outline" className="w-full" onClick={() => router.back()}>
              Kembali
            </Button>
            <Button className="w-full" onClick={() => router.push("/")}>
              Ke Beranda
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
