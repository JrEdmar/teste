# Instituto AMATE - Design Guidelines

## Design Approach

**Selected Approach: Reference-Based + System Hybrid**

Primary inspiration from **Game List** visual structure combined with **Airbnb's** trust-building patterns and **Linear's** clean typography. This platform requires both emotional engagement (pet care) and functional efficiency (booking, tracking), making a hybrid approach optimal.

## Core Design Principles

1. **Trust & Warmth**: Pet owners need reassurance; use soft, approachable layouts with clear information hierarchy
2. **Scan-ability**: Dense information (clinic details, vaccination records) must be quickly parseable
3. **Mobile-First Flow**: Primary usage on mobile; desktop is enhanced experience
4. **Clear Role Separation**: Each user type (tutor, clínica, admin) gets distinct visual patterns

## Typography System

**Font Families:**
- Primary: Inter (headings, UI elements)
- Secondary: system-ui fallback for body text

**Scale:**
- H1: text-4xl font-bold (Dashboard titles)
- H2: text-2xl font-semibold (Section headers)
- H3: text-xl font-medium (Card titles, Clinic names)
- Body Large: text-base font-normal (Primary content)
- Body Small: text-sm (Metadata, labels)
- Caption: text-xs (Badges, timestamps)

## Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Micro spacing: p-2, gap-2
- Component padding: p-4, p-6
- Section spacing: py-8, py-12, py-16
- Container margins: mx-4 (mobile), mx-8 (desktop)

**Grid System:**
- Mobile: Single column, max-w-full
- Tablet: 2-column grid where appropriate (grid-cols-2)
- Desktop: 3-4 column grids for cards (grid-cols-3, grid-cols-4)

## Component Library

### Navigation
**Bottom Tab Bar (Mobile - Tutor App):**
- 4-5 fixed tabs: Home, Busca, Agendamentos, Carteira, Perfil
- Icons + labels, 56px height
- Active state with icon fill + underline accent

**Top Navigation (Desktop):**
- Logo left, user profile right
- Notifications bell icon with badge counter
- Role indicator badge (Tutor, Admin, Clínica)

**Sidebar (Desktop - Admin/Clínica):**
- 240px fixed width
- Collapsible to 64px icon-only
- Grouped menu items with dividers

### Cards & Listings

**Clinic/Partner Card:**
```
- Thumbnail image or placeholder (96x96px rounded-lg)
- Clinic name (text-lg font-semibold)
- Rating stars + count (text-sm)
- Tags: service type badges (CQB, Cirurgia, etc.)
- Distance indicator with location icon
- Next available date badge (if applicable)
- Verified checkmark icon for KYC-approved
```

**Pet Card:**
```
- Pet photo circular (80x80)
- Pet name + species/breed (text-base)
- Age calculation display
- Vaccination status indicator (icon + text)
- Microchip ID if registered
- Quick action: "Ver Prontuário" link
```

**Appointment Card:**
```
- Date/time prominent (text-xl font-bold)
- Clinic name + location
- Service type badge
- Status indicator (Confirmado, Pendente, Concluído)
- Action buttons: Cancelar, Reagendar, Check-in
```

### Forms & Inputs

**Consistent Pattern:**
- Labels: text-sm font-medium, mb-2
- Input fields: h-12, px-4, rounded-lg, border
- Focus states: ring-2 outline
- Error states: border-red with text-sm error message below
- Success states: border-green with checkmark icon

**Multi-Step Forms (Onboarding):**
- Progress indicator: step dots or bar at top
- Back/Next navigation clearly visible
- Autosave indicators for long forms

### Buttons

**Primary CTA:**
- h-12, px-8, rounded-lg, font-medium
- Full width on mobile, auto-width on desktop

**Secondary:**
- h-10, px-6, outlined style

**Icon Buttons:**
- w-10 h-10, rounded-full for circular actions

### Data Display

**QR Code Carteira Digital:**
- Centered display, 240x240px
- Member ID below QR
- Plan type badge above
- Validity dates (início/fim) in small text
- Download/Share action buttons

**Vaccination Timeline:**
- Vertical timeline with connected dots
- Each entry: vaccine name, date, next due (if applicable)
- Overdue items highlighted with warning indicator
- Add vaccination button (clínica only)

**Statistics Dashboard:**
- 3-column grid of stat cards on desktop
- Single column on mobile
- Each card: large number (text-4xl), label (text-sm), trend indicator (↑↓)

### Search & Filters

**Search Bar:**
- Prominent placement, h-12
- Icon prefix (magnifying glass)
- Placeholder: "Buscar clínicas, serviços..."
- Auto-suggest dropdown with recent searches

**Filter Panel:**
- Slide-in drawer on mobile
- Sidebar on desktop
- Organized sections: Distância, Categoria, Preço, Avaliação
- Apply/Clear buttons sticky at bottom
- Active filter count badge on filter button

### Modals & Overlays

**Confirmation Dialogs:**
- Max-w-md, centered
- Title (text-xl), description (text-sm)
- Two-button layout: Cancel (secondary), Confirm (primary)

**Detail Sheets (Mobile):**
- Slide up from bottom, rounded-t-3xl
- Drag handle at top
- Max height 90vh, scrollable content

## Accessibility

- Minimum touch target: 44x44px for all interactive elements
- Form inputs with proper labels and autocomplete attributes
- Skip navigation links for keyboard users
- Alt text for all pet photos and clinic images
- ARIA labels for icon-only buttons
- Focus visible states on all interactive elements

## Responsive Breakpoints

- Mobile: 0-640px (base)
- Tablet: 641-1024px (md:)
- Desktop: 1025px+ (lg:)

## Page-Specific Layouts

### Landing Page (Public)
- Hero: Full viewport height with pet imagery, overlaid text "Cuidando do seu pet com amor" + CTA "Conhecer Planos"
- Benefits grid: 3 columns showcasing key features (Consultas, Vacinas, Medicamentos)
- Partner showcase: Logo carousel of verified clinics
- Pricing table: 3 plans side-by-side with feature comparison
- Testimonials: 2-column cards with tutor photos + pets
- Footer: Multi-column with links, social, contact

### Dashboard Tutor
- Welcome header with tutor name + current plan badge
- Quick stats: Próxima consulta, Vacinas pendentes, Benefícios usados (fraction)
- Pet carousel: horizontal scroll of pet cards
- Action cards grid: Agendar Consulta, Pedir Ração, Ver Carteira (3 columns desktop, 1 mobile)
- Recent activity feed

### Agendamento Flow
- Step 1: Service selection (large buttons with icons)
- Step 2: Clinic list with filters sidebar, map view toggle
- Step 3: Calendar picker with available slots
- Step 4: Confirmation summary + payment (if needed)

### Clínica Dashboard
- Today's appointments: Timeline view with patient info
- Quick actions: Registrar Atendimento, Ver Agenda Semana
- Metrics: Atendimentos mês, Faturamento, Avaliação média
- Pending approvals/tasks list

### Admin Panel
- Multi-tab interface: Usuários, Parceiros, Regras, Relatórios, Financeiro
- Data tables with sorting, pagination, bulk actions
- KPI cards at top of each section
- Export buttons for reports

## Images

**Hero Section (Landing):**
Large hero image showing happy pet owner with dog/cat in bright, welcoming environment. Image should convey trust and care. Full viewport height, with gradient overlay for text legibility.

**Partner Thumbnails:**
Square clinic/shop photos (96x96px) showing storefronts or professional settings. Fallback to placeholder with initials.

**Pet Photos:**
Circular avatars throughout app. Default placeholder: paw print icon in soft background.

**Testimonial Section:**
Authentic photos of tutors with their pets, 120x120px circular frames.

This design system balances the Game List's clean card-based UI with the warmth needed for a pet care platform, while maintaining the professional trust required for health services.