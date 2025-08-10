# Excel Marketing Pvt Ltd - Project Showcase

A modern, responsive real estate project showcase website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Project Portfolio**: Comprehensive project listings with image carousels
- **Project Detail Pages**: Individual pages for each project with full information
- **Featured Locations Widget**: Showcase of top properties by city
- **Company Profile**: Complete company information and team details
- **Responsive Design**: Mobile-first, responsive design
- **SEO Optimized**: Dynamic meta tags and semantic HTML
- **Performance Optimized**: Lazy loading, image optimization

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ProjectCard.tsx  # Project card component
│   ├── FeaturedLocationsWidget.tsx
│   └── ui/              # shadcn/ui components
├── pages/               # Page components
│   ├── ProjectDetail.tsx
│   ├── Projects.tsx
│   └── CompanyProfile.tsx
├── data/                # Data management
│   ├── projects.ts      # Project data
│   └── exportProjects.ts
├── types/               # TypeScript definitions
│   └── project.ts
└── __tests__/           # Test files
```

## 🏢 Featured Projects

1. **Capital Smart City** - Pakistan's first smart city (Islamabad)
2. **Bahria Town** - Premium gated community (Multiple locations)
3. **DHA** - Defence Housing Authority developments (Lahore)
4. **RUDN Enclave** - Modern residential community (Islamabad)
5. **New City Wah** - Emerging urban development (Wah Cantt)
6. **New City Paradise** - Premium residential development (Wah)
7. **Faisal Town** - Established residential community (Lahore)

## 🛠 Technologies Used

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **React Router** for navigation
- **Vite** for build tooling
- **Vitest** for testing
- **React Helmet** for SEO

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd excelify-showcase
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080)

### Build for Production
```bash
npm run build
```

### Run Tests
```bash
npm run test
```

## 📝 Content Management

### Adding New Projects

1. Edit `src/data/projects.ts`
2. Add project data following the `Project` interface
3. Include 4 hero images per project
4. Update project status, features, and plot sizes

### Updating Company Profile

Edit `src/data/projects.ts` - `companyProfileData` object:
- CEO information
- Team members
- Services list
- Contact details

### Image Management

Images are currently sourced from Unsplash. To use custom images:
1. Add images to `src/assets/projects/{project-slug}/`
2. Update image URLs in project data
3. Ensure responsive image formats (webp recommended)

### SEO Management

- Meta descriptions are in project data
- Page titles are dynamic
- Update `src/pages/ProjectDetail.tsx` for SEO customization

## 🎨 Customization

### Styling
- Edit `tailwind.config.ts` for theme customization
- Component styles use Tailwind CSS classes
- Custom CSS in `src/index.css`

### Components
- All components are in `src/components/`
- Use shadcn/ui for consistent design
- Add new components following existing patterns

## 📊 Data Export

Export all project data as JSON:
```typescript
import { exportProjectData } from '@/data/exportProjects';
exportProjectData(); // Downloads JSON file
```

## 🧪 Testing

Test coverage includes:
- Component unit tests
- Integration tests for pages
- Company profile functionality tests

Run tests:
```bash
npm run test
```

## 📱 Performance

- Lighthouse score target: >90
- Image lazy loading enabled
- Component-level code splitting
- Optimized bundle sizes

## 🔧 Configuration

### Environment Variables
Create `.env.local`:
```
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=waheedfarooki@gmail.com
VITE_CONTACT_PHONE=03348737244
```

### Build Configuration
Edit `vite.config.ts` for build customization.

## 📞 Contact Information

**Excel Marketing Pvt Ltd**
- Phone: 03348737244
- Email: waheedfarooki@gmail.com
- CEO: Waheed ur Rehman Farooqui

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is proprietary to Excel Marketing Pvt Ltd.

---

**Note**: Replace placeholder images with actual project images when available. Current implementation uses Unsplash images as placeholders.
