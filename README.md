# My Startup - Modern Company Website

![App Preview](https://imgix.cosmicjs.com/d6749660-3a22-11f1-9280-bf44b40df479-autopilot-photo-1487412720507-e7ab37603c6f-1776405672568.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, responsive company website built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com).

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 🏠 Beautiful homepage with hero section
- 🛠️ Services showcase with detailed pages
- 👥 Team members directory
- 📊 Case studies with detailed results
- 📝 Blog section with rich content
- 💰 Pricing tiers comparison
- ⭐ Customer testimonials
- ⚡ Fast server-side rendering
- 🔒 Type-safe with TypeScript

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=69e1cab2cae8d251139abbf1&clone_repository=69e1cd6fcae8d251139abc31)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a startup product website with features, pricing tiers, team members, blog posts, and customer testimonials.
> 
> User instructions: A company website with services, team members, case studies, and testimonials"

### Code Generation Prompt

> Build a Next.js application for a company website called "My Startup". The content is managed in Cosmic CMS with the following object types: services, pricing-tiers, team-members, blog-posts, case-studies, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
> 
> User instructions: A company website with services, team members, case studies, and testimonials

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Cosmic SDK** - Content management

## Getting Started

### Prerequisites

- Bun installed
- A Cosmic account with a bucket containing the required content types

### Installation

1. Clone this repository
2. Install dependencies: `bun install`
3. Set up environment variables
4. Run dev server: `bun run dev`

## Cosmic SDK Examples

```typescript
// Fetch all services
const { objects } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

The app uses the Cosmic SDK to fetch content for services, team members, case studies, blog posts, pricing tiers, and testimonials.

## Deployment Options

- **Vercel** (recommended for Next.js)
- **Netlify**

Set environment variables in your hosting platform's dashboard.
<!-- README_END -->