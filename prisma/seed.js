const { PrismaClient } = require("../src/generated/prisma");

const prisma = new PrismaClient();

const marketingMaterials = [
  // ============================================
  // BANNER MATERIALS
  // ============================================
  {
    type: "BANNER",
    status: "ACTIVE",
    title: "Banner Instagram Square - Flash Sale",
    slug: "banner-instagram-flash-sale",
    description: "Banner promosi flash sale untuk Instagram feed, ukuran 1080x1080px",
    category: "Social Media",
    fileUrl: "https://cdn.example.com/materials/banners/ig-flash-sale.jpg",
    thumbnailUrl: "https://cdn.example.com/materials/banners/thumbs/ig-flash-sale.jpg",
    fileSize: 245000,
    fileFormat: "JPG",
    width: 1080,
    height: 1080,
    tags: ["instagram", "flash-sale", "promo", "square"],
    sortOrder: 1,
    publishedAt: new Date(),
  },
  {
    type: "BANNER",
    status: "ACTIVE",
    title: "Banner Instagram Story - Diskon 50%",
    slug: "banner-story-diskon-50",
    description: "Banner story Instagram untuk promo diskon besar",
    category: "Social Media",
    fileUrl: "https://cdn.example.com/materials/banners/story-diskon.jpg",
    thumbnailUrl: "https://cdn.example.com/materials/banners/thumbs/story-diskon.jpg",
    fileSize: 180000,
    fileFormat: "JPG",
    width: 1080,
    height: 1920,
    tags: ["instagram", "story", "diskon", "promo"],
    sortOrder: 2,
    publishedAt: new Date(),
  },
  {
    type: "BANNER",
    status: "ACTIVE",
    title: "Banner Facebook Cover - Brand Awareness",
    slug: "banner-fb-cover-brand",
    description: "Cover photo Facebook untuk meningkatkan brand awareness",
    category: "Social Media",
    fileUrl: "https://cdn.example.com/materials/banners/fb-cover.jpg",
    thumbnailUrl: "https://cdn.example.com/materials/banners/thumbs/fb-cover.jpg",
    fileSize: 320000,
    fileFormat: "JPG",
    width: 1640,
    height: 856,
    tags: ["facebook", "cover", "brand"],
    sortOrder: 3,
    publishedAt: new Date(),
  },
  {
    type: "BANNER",
    status: "ACTIVE",
    title: "Banner WhatsApp Status - Gratis Ongkir",
    slug: "banner-wa-gratis-ongkir",
    description: "Banner untuk WhatsApp Status promosi gratis ongkir",
    category: "WhatsApp",
    fileUrl: "https://cdn.example.com/materials/banners/wa-gratis-ongkir.jpg",
    thumbnailUrl: "https://cdn.example.com/materials/banners/thumbs/wa-gratis-ongkir.jpg",
    fileSize: 195000,
    fileFormat: "JPG",
    width: 1080,
    height: 1920,
    tags: ["whatsapp", "status", "gratis-ongkir"],
    sortOrder: 4,
    publishedAt: new Date(),
  },

  // ============================================
  // PRODUCT PHOTO MATERIALS
  // ============================================
  {
    type: "PRODUCT_PHOTO",
    status: "ACTIVE",
    title: "Foto Produk - Paket Skincare Lengkap",
    slug: "foto-produk-skincare-lengkap",
    description: "Foto produk berkualitas tinggi paket skincare dengan background putih",
    category: "Product Photography",
    fileUrl: "https://cdn.example.com/materials/photos/skincare-pack.jpg",
    thumbnailUrl: "https://cdn.example.com/materials/photos/thumbs/skincare-pack.jpg",
    fileSize: 450000,
    fileFormat: "JPG",
    width: 2000,
    height: 2000,
    tags: ["skincare", "product", "high-res"],
    sortOrder: 5,
    publishedAt: new Date(),
  },
  {
    type: "PRODUCT_PHOTO",
    status: "ACTIVE",
    title: "Foto Produk - Serum Wajah Premium",
    slug: "foto-produk-serum-premium",
    description: "Foto detail serum wajah dengan pencahayaan profesional",
    category: "Product Photography",
    fileUrl: "https://cdn.example.com/materials/photos/serum-premium.jpg",
    thumbnailUrl: "https://cdn.example.com/materials/photos/thumbs/serum-premium.jpg",
    fileSize: 380000,
    fileFormat: "JPG",
    width: 2000,
    height: 2000,
    tags: ["serum", "facial", "premium"],
    sortOrder: 6,
    publishedAt: new Date(),
  },
  {
    type: "PRODUCT_PHOTO",
    status: "ACTIVE",
    title: "Foto Lifestyle - Penggunaan Produk",
    slug: "foto-lifestyle-penggunaan",
    description: "Foto lifestyle menunjukkan cara penggunaan produk",
    category: "Product Photography",
    fileUrl: "https://cdn.example.com/materials/photos/lifestyle-usage.jpg",
    thumbnailUrl: "https://cdn.example.com/materials/photos/thumbs/lifestyle-usage.jpg",
    fileSize: 520000,
    fileFormat: "JPG",
    width: 3000,
    height: 2000,
    tags: ["lifestyle", "usage", "tutorial"],
    sortOrder: 7,
    publishedAt: new Date(),
  },

  // ============================================
  // COPYWRITING MATERIALS
  // ============================================
  {
    type: "COPYWRITING",
    status: "ACTIVE",
    title: "Copywriting Instagram - Post Produk Baru",
    slug: "copy-ig-produk-baru",
    description: "Template caption Instagram untuk launching produk baru",
    category: "Social Media",
    content: `🌟 PRODUK BARU HADIR! 🌟

Hai Beauties! 😍

Kami dengan bangga mempersembahkan produk terbaru kami yang akan mengubah rutinitas skincare kamu! ✨

💫 [Nama Produk]
✅ Manfaat 1
✅ Manfaat 2
✅ Manfaat 3

🎁 PROMO SPESIAL:
Diskon 30% untuk 100 pembeli pertama!
Gunakan kode: [KODE_REFERAL_KAMU]

🛒 Order sekarang di link bio atau klik: [LINK_AFILIASI_KAMU]

#skincare #beauty #glowingskin #newproduct #promo`,
    tags: ["instagram", "caption", "product-launch"],
    sortOrder: 8,
    publishedAt: new Date(),
  },
  {
    type: "COPYWRITING",
    status: "ACTIVE",
    title: "Copywriting WhatsApp - Broadcast Promo",
    slug: "copy-wa-broadcast-promo",
    description: "Template pesan WhatsApp untuk broadcast promosi",
    category: "WhatsApp",
    content: `Halo Kak! 👋

Ada kabar gembira nih! 🎉

*FLASH SALE 50% OFF*
Cuma 3 hari aja! ⚡

Produk favorit kamu sekarang bisa dibeli dengan harga setengahnya! 

🛍️ Produk yang ikut promo:
• [Produk 1] - ~~Rp 200.000~~ jadi Rp 100.000
• [Produk 2] - ~~Rp 150.000~~ jadi Rp 75.000
• [Produk 3] - ~~Rp 180.000~~ jadi Rp 90.000

💳 Bonus: GRATIS ONGKIR se-Indonesia!

Yuk buruan order sebelum kehabisan!
Klik link ini ya: [LINK_AFILIASI_KAMU]

Ada yang mau ditanyakan? Langsung chat aja! 💬`,
    tags: ["whatsapp", "broadcast", "flash-sale"],
    sortOrder: 9,
    publishedAt: new Date(),
  },
  {
    type: "COPYWRITING",
    status: "ACTIVE",
    title: "Copywriting Email - Newsletter Bulanan",
    slug: "copy-email-newsletter",
    description: "Template email newsletter bulanan untuk subscriber",
    category: "Email",
    content: `Subject: Newsletter Bulan Ini - Promo & Tips Skincare! 💝

Hai [Nama],

Bulan ini kami punya banyak hal menarik untuk kamu! 

📰 WHAT'S NEW:
1. Peluncuran produk baru [Nama Produk]
2. Tips skincare untuk musim ini
3. Testimoni pelanggan yang inspiring

🎁 PROMO EKSKLUSIF UNTUK KAMU:
Dapatkan diskon 25% untuk semua produk dengan kode: [KODE_REFERAL]
Berlaku hingga [Tanggal]

📚 TIPS SKINCARE BULAN INI:
[Tips 1]
[Tips 2]
[Tips 3]

Jangan lewatkan kesempatan ini ya!

Salam hangat,
[Nama Brand]

PS: Share newsletter ini ke teman kamu dan dapatkan bonus spesial! 🎉`,
    tags: ["email", "newsletter", "monthly"],
    sortOrder: 10,
    publishedAt: new Date(),
  },
  {
    type: "COPYWRITING",
    status: "ACTIVE",
    title: "Copywriting Testimoni - Template Review",
    slug: "copy-testimoni-review",
    description: "Template untuk membuat testimoni produk yang menarik",
    category: "Social Media",
    content: `⭐⭐⭐⭐⭐ REVIEW JUJUR!

Awalnya ragu mau coba [Nama Produk], tapi setelah pakai [durasi], hasilnya AMAZING! 😍

✨ Before: [kondisi sebelum]
✨ After: [kondisi sesudah]

Yang aku suka:
✅ [Poin 1]
✅ [Poin 2]
✅ [Poin 3]

Cocok banget buat yang punya masalah [masalah kulit]. Worth it deh! 💯

Kalau mau coba, bisa order di link ini ya:
[LINK_AFILIASI_KAMU]

Pakai kode: [KODE_REFERAL] biar dapet diskon! 🎁

#review #testimoni #skincarereview #beautytips`,
    tags: ["review", "testimoni", "social-media"],
    sortOrder: 11,
    publishedAt: new Date(),
  },

  // ============================================
  // VIDEO MATERIALS
  // ============================================
  {
    type: "VIDEO",
    status: "ACTIVE",
    title: "Video Tutorial - Cara Pakai Produk",
    slug: "video-tutorial-cara-pakai",
    description: "Video tutorial singkat cara menggunakan produk dengan benar",
    category: "Tutorial",
    fileUrl: "https://cdn.example.com/materials/videos/tutorial-usage.mp4",
    thumbnailUrl: "https://cdn.example.com/materials/videos/thumbs/tutorial-usage.jpg",
    fileSize: 15500000,
    fileFormat: "MP4",
    width: 1080,
    height: 1920,
    duration: 45,
    tags: ["tutorial", "video", "how-to"],
    sortOrder: 12,
    publishedAt: new Date(),
  },
  {
    type: "VIDEO",
    status: "ACTIVE",
    title: "Video Unboxing - Paket Produk",
    slug: "video-unboxing-paket",
    description: "Video unboxing paket produk untuk konten sosial media",
    category: "Unboxing",
    fileUrl: "https://cdn.example.com/materials/videos/unboxing.mp4",
    thumbnailUrl: "https://cdn.example.com/materials/videos/thumbs/unboxing.jpg",
    fileSize: 22000000,
    fileFormat: "MP4",
    width: 1080,
    height: 1920,
    duration: 60,
    tags: ["unboxing", "video", "reels"],
    sortOrder: 13,
    publishedAt: new Date(),
  },
  {
    type: "VIDEO",
    status: "ACTIVE",
    title: "Video Testimoni - Customer Review",
    slug: "video-testimoni-customer",
    description: "Video testimoni pelanggan yang puas dengan produk",
    category: "Testimoni",
    fileUrl: "https://cdn.example.com/materials/videos/testimoni.mp4",
    thumbnailUrl: "https://cdn.example.com/materials/videos/thumbs/testimoni.jpg",
    fileSize: 18000000,
    fileFormat: "MP4",
    width: 1080,
    height: 1920,
    duration: 30,
    tags: ["testimoni", "review", "customer"],
    sortOrder: 14,
    publishedAt: new Date(),
  },

  // ============================================
  // GUIDELINE MATERIALS
  // ============================================
  {
    type: "GUIDELINE",
    status: "ACTIVE",
    title: "Panduan Affiliate Marketing - Pemula",
    slug: "panduan-affiliate-pemula",
    description: "Panduan lengkap untuk affiliate pemula mulai dari awal",
    category: "Guide",
    fileUrl: "https://cdn.example.com/materials/guides/panduan-pemula.pdf",
    thumbnailUrl: "https://cdn.example.com/materials/guides/thumbs/panduan-pemula.jpg",
    fileSize: 2500000,
    fileFormat: "PDF",
    content: `# Panduan Affiliate Marketing untuk Pemula

## 1. Pendahuluan
Selamat datang di program affiliate kami!

## 2. Cara Memulai
- Daftar dan dapatkan kode referral
- Pelajari produk dengan baik
- Siapkan platform promosi

## 3. Tips Sukses
- Konsisten posting konten
- Bangun trust dengan audience
- Gunakan semua material yang tersedia

## 4. Do's and Don'ts
✅ Do: Jujur dalam review
❌ Don't: Spam link di mana-mana

...dan masih banyak lagi!`,
    tags: ["panduan", "guide", "pemula"],
    sortOrder: 15,
    publishedAt: new Date(),
  },
  {
    type: "GUIDELINE",
    status: "ACTIVE",
    title: "Brand Guidelines - Aturan Penggunaan Brand",
    slug: "brand-guidelines",
    description: "Panduan penggunaan logo, warna, dan identitas brand",
    category: "Branding",
    fileUrl: "https://cdn.example.com/materials/guides/brand-guide.pdf",
    thumbnailUrl: "https://cdn.example.com/materials/guides/thumbs/brand-guide.jpg",
    fileSize: 3200000,
    fileFormat: "PDF",
    content: `# Brand Guidelines

## Logo Usage
- Gunakan logo resmi yang disediakan
- Jangan ubah proporsi atau warna
- Minimum size: 100px

## Color Palette
Primary: #FF6B9D
Secondary: #FFA07A
Accent: #FFD700

## Typography
Primary Font: Poppins
Secondary Font: Open Sans

## Tone of Voice
- Friendly & Approachable
- Professional but not stiff
- Inspiring & Motivating`,
    tags: ["brand", "guidelines", "identity"],
    sortOrder: 16,
    publishedAt: new Date(),
  },
  {
    type: "GUIDELINE",
    status: "ACTIVE",
    title: "Strategi Content Marketing - Advanced",
    slug: "strategi-content-advanced",
    description: "Strategi content marketing untuk affiliate yang sudah berpengalaman",
    category: "Strategy",
    fileUrl: "https://cdn.example.com/materials/guides/content-strategy.pdf",
    thumbnailUrl: "https://cdn.example.com/materials/guides/thumbs/content-strategy.jpg",
    fileSize: 2800000,
    fileFormat: "PDF",
    content: `# Strategi Content Marketing Advanced

## 1. Content Planning
- Buat content calendar
- Mix konten: 60% edukasi, 30% engaging, 10% promosi
- Analisis performa konten

## 2. Platform Strategy
Instagram: Visual storytelling
WhatsApp: Personal approach
Email: Nurturing leads

## 3. Engagement Tactics
- Respond cepat ke komentar
- Buat polling & kuis
- User generated content

## 4. Conversion Optimization
- Clear CTA
- Urgency & Scarcity
- Social proof`,
    tags: ["strategi", "content", "advanced"],
    sortOrder: 17,
    publishedAt: new Date(),
  },
];

async function seedMarketingMaterials() {
  console.log("🌱 Seeding marketing materials...");

  for (const material of marketingMaterials) {
    await prisma.marketingMaterial.upsert({
      where: { slug: material.slug },
      update: material,
      create: material,
    });
  }

  console.log(`✅ Successfully seeded ${marketingMaterials.length} marketing materials`);
}

async function main() {
  try {
    await seedMarketingMaterials();
    console.log("🎉 Seed completed successfully!");
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
