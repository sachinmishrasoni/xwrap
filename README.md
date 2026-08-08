# XWrap — E-Commerce & Wholesale Platform

XWrap is a modern, scalable and reusable **E-Commerce & Wholesale Management Platform** designed for businesses selling mobile skins, laptop skins, tablet skins, lamination rolls, custom skins, machines, accessories and other related products.

The platform is initially being developed as **XWrap Mobile Skins**, but the architecture is designed to be **white-label ready**, allowing the same application to be customized and deployed for different businesses and clients in the future.

---

## 📌 Project Overview

XWrap provides a complete e-commerce ecosystem with:

- Customer-facing online store
- Product catalog
- Product categories
- Product variants
- Product search and filtering
- Shopping cart
- Wishlist
- Customer authentication
- Address management
- Online checkout
- Online payments
- Order management
- Order tracking
- Inventory management
- Wholesale pricing
- Bulk ordering
- Coupons and discounts
- Product reviews
- Customer management
- Admin dashboard
- Store configuration
- SEO-friendly product pages

The system is designed to support both **B2C and B2B/Wholesale** customers.

---

# 🏗️ Project Architecture

The project follows a separated frontend and backend architecture.

```text
XWrap/
│
├── web/                         # Next.js Frontend
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── features/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── services/
│   │   └── types/
│   │
│   ├── public/
│   ├── package.json
│   └── ...
│
├── server/                      # Express Backend
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── validators/
│   │   ├── utils/
│   │   └── ...
│   │
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   │
│   ├── package.json
│   └── ...
│
├── README.md
└── .gitignore
