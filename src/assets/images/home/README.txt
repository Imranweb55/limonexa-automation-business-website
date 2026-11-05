HOME PAGE IMAGES — HOW TO ADD
=============================

1. Where to put the files
   Save every image directly in THIS folder:
   src/assets/images/home/
   (no sub-folders)

2. How to name them
   The file name must match exactly (extension can be .webp, .jpg, .jpeg, .png or .avif).
   Example: about-main.webp
   When the file exists, the placeholder box is replaced automatically.
   Just save the file and refresh the browser — no code change needed.

3. Where to download (free, commercial use)
   - https://unsplash.com
   - https://www.pexels.com
   - https://pixabay.com
   Check the licence on each image. Prefer natural, professional, slightly
   dark/cool-toned photos so they match the navy theme.

4. Size and weight
   Keep each file under ~300 KB. Convert to WebP for best speed
   (https://squoosh.app is a free converter).

5. File list
   FILE NAME              SIZE (px)    SEARCH IDEA
   about-main             1200x1500    modern office, team collaboration
   service-lead           1200x800     sales dashboard, CRM screen
   service-whatsapp       1200x800     smartphone messaging, customer chat
   service-crm            1200x800     analytics dashboard, data screen
   service-finance        1200x800     accounting, invoices, calculator
   service-support        1200x800     support agent with headset
   service-workflow       1200x800     business report, charts on laptop
   industry-realestate    900x1200     modern building, property
   industry-ecommerce     900x1200     online shopping, parcels
   industry-healthcare    900x1200     clinic, doctor, hospital
   industry-finance       900x1200     banking, finance district
   industry-logistics     900x1200     warehouse, trucks, shipping
   industry-education     900x1200     classroom, university
   case-study             1400x1000    business team in a meeting
   home-ind-manufacturing 900x1200     factory floor, production line (portrait)
   home-ind-healthcare    900x1200     clinic, doctor, hospital (portrait)
   home-ind-finance       900x1200     banking, finance district (portrait)
   home-ind-retail        900x1200     shop, parcels, online shopping (portrait)
   home-ind-education     900x1200     classroom, university (portrait)
   testimonial-1/2/3      400x400      professional portrait (square)
   workflow-bg            1920x1080    dark abstract network (background)
   contact-bg             1920x1080    city skyline at dusk (background)

   The two backgrounds are automatically covered by a dark overlay so the
   text stays readable. Pick images that are not too bright.

6. To add a NEW image slot later
   Add an entry in src/components/Home/sections/shared/homeImages.js
   and use <ImagePlaceholder name="your-name" />.
