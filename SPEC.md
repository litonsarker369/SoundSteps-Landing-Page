# SoundSteps Landing Page Specification

## Project Overview
- **Project name**: SoundSteps Landing Page
- **Type**: Single-page marketing website (MVP)
- **Core functionality**: Introduce SoundSteps speech practice app, build trust with parents, capture Early Access registrations
- **Target users**: Parents of young children with speech development concerns

## UI/UX Specification

### Layout Structure
- Single-page scroll layout
- Max content width: 1200px, centered
- Sections flow naturally: Hero → Problem → Approach → How It Works → Early Access → Mission → Footer

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Visual Design

#### Color Palette
- **Primary**: `#2D7D6F` (warm teal - trust, calm)
- **Primary Light**: `#4AA89B`
- **Primary Dark**: `#1F5A52`
- **Secondary**: `#F5A962` (warm peach - friendly, encouraging)
- **Background**: `#FDFCFA` (warm off-white)
- **Surface**: `#FFFFFF`
- **Text Primary**: `#2C3E50`
- **Text Secondary**: `#5A6C7D`
- **Text Muted**: `#8A9AAA`
- **Border**: `#E8EBEF`
- **Success**: `#48B382`
- **Error**: `#E57373`

#### Typography
- **Headings**: "Outfit", sans-serif (modern, friendly, professional)
- **Body**: "DM Sans", sans-serif (clean, readable)
- **Sizes**:
  - H1: 56px / 64px line-height (mobile: 36px)
  - H2: 42px / 52px line-height (mobile: 28px)
  - H3: 24px / 32px line-height
  - Body: 17px / 28px line-height
  - Small: 14px / 22px line-height

#### Spacing System
- Base unit: 8px
- Section padding: 80px vertical (mobile: 48px)
- Component gaps: 24px, 32px, 48px
- Border radius: 16px (cards), 12px (buttons), 8px (inputs)

#### Visual Effects
- Card shadows: `0 4px 24px rgba(45, 125, 111, 0.08)`
- Hover shadows: `0 8px 32px rgba(45, 125, 111, 0.12)`
- Subtle gradients on hero background
- Smooth transitions: 0.3s ease

### Components

#### Navigation
- Logo (left)
- "Join Early Access" CTA button (right)
- Sticky on scroll with subtle backdrop blur

#### Hero Section
- Logo prominently displayed
- Headline: "Help your child find their voice"
- Subheadline: Supporting text about speech practice
- Primary CTA button with arrow icon
- Decorative illustration element

#### Problem Section
- Section title: "The challenge many parents face"
- Three feature cards with icons:
  1. Long wait times for NHS support (stat: 18+ months)
  2. Uncertainty about how to help at home
  3. Lack of structured practice tools
- Each card: icon, title, description
- Statistics highlighted with larger numbers

#### Our Approach Section
- Title: "A calm, supportive way to practise speech at home"
- Description paragraph
- Key benefits list with checkmarks:
  - Simple daily exercises
  - Progress you can see
  - No pressure, just encouragement
  - Designed by speech specialists

#### How It Works Section
- Title: "How SoundSteps works"
- 5-step horizontal flow (vertical on mobile):
  1. Listen to a sound
  2. Child repeats the sound
  3. Parent encourages
  4. Recordings are saved
  5. Gentle progress suggestions
- Connected by subtle line/dots
- Each step has icon and label

#### Early Access Signup Section
- Title: "Join our Early Access programme"
- Subtitle about shaping the product
- Form with fields:
  - Parent/Carer name (required)
  - Email (required)
  - Location (required)
  - How did you hear about us? (dropdown)
  - Child's age range (dropdown: 0-2, 3-4, 5-6, 7+)
  - Who is the app for? (dropdown: My child, My grandchild, My student, Other)
  - Support status (multi-select checkboxes)
  - Open to feedback? (yes/no)
  - What concerns you most? (textarea, optional)
- Submit button with loading state
- Success message after submission

#### Mission Section
- Title: "Our mission"
- Story paragraph about why SoundSteps exists
- Call to join the community

#### Footer
- Logo
- Contact email: hello@soundsteps.co
- Company info
- Privacy reassurance text

### Animations
- Fade-in on scroll for sections
- Hover effects on cards (lift + shadow)
- Button hover: scale + color shift
- Form field focus: border color change
- Success state: checkmark animation

## Functionality Specification

### Core Features
1. Smooth scroll navigation
2. Form validation (required fields)
3. Form submission handling (localStorage for demo)
4. Responsive layout adaptation
5. Scroll-triggered animations

### User Interactions
- Click CTA → scroll to signup form
- Fill form → real-time validation
- Submit form → success message
- Hover states on all interactive elements

### Data Handling
- Form data stored in localStorage for demo
- Console log submission for verification

### Edge Cases
- Empty required fields → show error
- Invalid email format → show error
- Form success → show confirmation, reset form
- Very long text inputs → truncate display

## Acceptance Criteria
1. Page loads without errors
2. All sections visible and properly styled
3. Form validates required fields
4. Form shows success message on valid submission
5. Responsive on mobile, tablet, desktop
6. Smooth animations and transitions
7. All text readable and properly contrasted
8. Keyboard accessible
9. SEO meta tags present
10. Page is fast loading (no heavy assets)
