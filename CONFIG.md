# Configuration Guide

This guide explains how to customize the site name and logo when cloning this project.

## Quick Setup

### 1. Site Name and Logo

The site name and logo are managed through the Supabase database `site_settings` table. After setting up your database:

1. Go to your Supabase dashboard
2. Navigate to the `site_settings` table
3. Update or insert the following records:

```sql
-- Site Name
INSERT INTO site_settings (id, value, type, description) 
VALUES ('site_name', 'Your Store Name', 'text', 'The name of your store')
ON CONFLICT (id) DO UPDATE SET value = EXCLUDED.value;

-- Site Logo (path to your logo file in the public folder)
INSERT INTO site_settings (id, value, type, description) 
VALUES ('site_logo', '/logo.png', 'text', 'Path to the logo image')
ON CONFLICT (id) DO UPDATE SET value = EXCLUDED.value;
```

### 2. Logo File

1. Replace `/public/logo.png` with your own logo
2. Recommended size: 512x512px or larger (square format works best)
3. Supported formats: PNG, JPG, SVG
4. The logo will be used for:
   - Header logo
   - Browser tab icon (favicon)
   - Mobile app icon

### 3. Fallback Values

If the database settings are not available, the app uses these fallbacks:
- **Site Name**: "Game Credits Store"
- **Logo**: "/logo.png"

### 4. Admin Dashboard

You can also update the site name and logo through the admin dashboard:
1. Navigate to `/admin` in your application
2. Go to "Site Settings"
3. Update the "Site Name" and "Site Logo" fields

## Environment Variables

Make sure to set these in your `.env` file and Vercel/hosting platform:

```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Notes

- The favicon updates automatically when you change the logo in site settings
- The site name appears in:
  - Browser tab title
  - Header
  - Order messages
  - All customer-facing pages
