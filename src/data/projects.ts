import { Project, CompanyProfile } from '@/types/project';

export const projectsData: Project[] = [
  {
    id: 'capital-smart-city',
    developer: 'Future Development Holdings (FDH)',
    name: 'Capital Smart City',
    slug: 'capital-smart-city',
    short_desc: "Pakistan's first smart city with cutting-edge technology and sustainable infrastructure",
    meta_desc: 'Capital Smart City - Pakistan\'s first smart city offering residential plots with modern amenities, smart infrastructure, and sustainable development in Islamabad.',
    long_desc: `Capital Smart City represents the future of urban living in Pakistan. As the country's first smart city, it combines cutting-edge technology with sustainable development practices. Located on the main GT Road near Islamabad, this revolutionary project offers residents a lifestyle that seamlessly integrates modern conveniences with environmental consciousness.

The city features smart home automation, fiber optic connectivity, renewable energy systems, and intelligent traffic management. With its prime location just 9.2 km from New Islamabad International Airport, Capital Smart City provides excellent connectivity while maintaining a peaceful, green environment.

The development includes residential plots ranging from 5 marla to 2 kanal, commercial areas, educational institutions, healthcare facilities, and recreational spaces. Every aspect of the city is designed with sustainability in mind, from rainwater harvesting systems to solar energy infrastructure.`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800&h=600&fit=crop&q=80',
        source: 'turn0image0',
        alt: 'Capital Smart City aerial view'
      },
      {
        url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&q=80',
        source: 'turn0image1',
        alt: 'Capital Smart City central plaza'
      },
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80',
        source: 'turn0image3',
        alt: 'Capital Smart City smart infrastructure'
      },
      {
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&q=80',
        source: 'turn0image6',
        alt: 'Capital Smart City connectivity'
      }
    ],
    status: 'development',
    plot_sizes: ['5 Marla', '7 Marla', '10 Marla', '1 Kanal', '2 Kanal'],
    features: [
      'Smart Home Automation',
      'Fiber Optic Internet',
      'Solar Energy System',
      'Intelligent Traffic Management',
      'Green Building Standards',
      'Smart Water Management',
      'Electric Vehicle Charging',
      'Digital Security Systems',
      'Smart Street Lighting',
      'Waste Management System'
    ],
    cta_links: {
      details: '/projects/capital-smart-city',
      book: '#contact',
      plan: '#payment-plan'
    },
    map_coords: {
      lat: 33.5651,
      lng: 73.0169
    },
    source_urls: [
      'https://capitalsmartcity.pk',
      'https://fdh.com.pk'
    ],
    location: 'GT Road, Islamabad',
    city: 'Islamabad'
  },
  {
    id: 'bahria-town',
    developer: 'Bahria Town',
    name: 'Bahria Town',
    slug: 'bahria-town',
    short_desc: 'Premium gated community with world-class amenities and modern infrastructure',
    meta_desc: 'Bahria Town - Pakistan\'s largest private real estate developer offering luxury residential and commercial properties with international standards.',
    long_desc: `Bahria Town stands as Pakistan's most prestigious and largest private real estate development. With locations across major cities, Bahria Town has redefined urban living standards in Pakistan through its commitment to quality, security, and modern amenities.

Each Bahria Town project features international-standard infrastructure, including wide roads, underground utilities, 24/7 security, healthcare facilities, educational institutions, and commercial areas. The development prioritizes green spaces with beautifully landscaped parks, golf courses, and recreational facilities.

Bahria Town offers a complete lifestyle solution with shopping malls, restaurants, entertainment venues, and sports facilities. The community is designed to provide residents with everything they need within a secure, well-maintained environment that rivals international standards.`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=80',
        source: 'turn1image4',
        alt: 'Bahria Town entrance gate'
      },
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=80',
        source: 'turn1image3',
        alt: 'Bahria Town residential area'
      },
      {
        url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&q=80',
        source: 'turn1image2',
        alt: 'Bahria Town amenities'
      },
      {
        url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&q=80',
        source: 'turn1image8',
        alt: 'Bahria Town community center'
      }
    ],
    status: 'available',
    plot_sizes: ['5 Marla', '8 Marla', '10 Marla', '1 Kanal', '2 Kanal', '4 Kanal'],
    features: [
      '24/7 Gated Security',
      'International Golf Course',
      'Shopping Malls',
      'International Schools',
      'Healthcare Facilities',
      'Underground Utilities',
      'Wide Roads Network',
      'Landscaped Parks',
      'Sports Complexes',
      'Community Centers'
    ],
    cta_links: {
      details: '/projects/bahria-town',
      book: '#contact',
      plan: '#payment-plan'
    },
    map_coords: {
      lat: 33.5138,
      lng: 73.1358
    },
    source_urls: [
      'https://bahriatown.com',
      'https://bahria.pk'
    ],
    location: 'Multiple Locations',
    city: 'Lahore'
  },
  {
    id: 'dha',
    developer: 'Defence Housing Authority',
    name: 'DHA',
    slug: 'dha',
    short_desc: 'Pakistan\'s most trusted housing authority with premium residential developments',
    meta_desc: 'DHA - Defence Housing Authority offers premium residential plots and properties with excellent infrastructure and prime locations across Pakistan.',
    long_desc: `Defence Housing Authority (DHA) is Pakistan's most trusted and prestigious housing authority, known for developing premium residential communities that set the standard for quality and reliability. With over five decades of experience, DHA has consistently delivered projects that appreciate in value and provide residents with a superior living experience.

DHA developments are characterized by excellent infrastructure, strategic locations, and comprehensive planning. Each phase is carefully designed with wide roads, proper drainage systems, parks, commercial areas, and community facilities. The authority maintains strict quality standards and ensures timely delivery of utilities and services.

DHA properties are considered among the most secure investments in Pakistan's real estate market. The authority's reputation for transparency, quality construction, and professional management makes DHA the preferred choice for discerning buyers and investors.`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop&q=80',
        source: 'turn5image4',
        alt: 'DHA main boulevard'
      },
      {
        url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&q=80',
        source: 'turn5image2',
        alt: 'DHA residential sector'
      },
      {
        url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop&q=80',
        source: 'turn5image10',
        alt: 'DHA commercial area'
      },
      {
        url: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop&q=80',
        source: 'turn5image0',
        alt: 'DHA amenities'
      }
    ],
    status: 'available',
    plot_sizes: ['5 Marla', '10 Marla', '1 Kanal', '2 Kanal'],
    features: [
      'Prime Location',
      'Excellent Infrastructure',
      'High Security',
      'Planned Development',
      'Commercial Areas',
      'Educational Institutions',
      'Healthcare Facilities',
      'Parks & Recreation',
      'Reliable Utilities',
      'Investment Security'
    ],
    cta_links: {
      details: '/projects/dha',
      book: '#contact',
      plan: '#payment-plan'
    },
    map_coords: {
      lat: 31.4697,
      lng: 74.4056
    },
    source_urls: [
      'https://dhalahore.org',
      'https://dha.gov.pk'
    ],
    location: 'Multiple Phases',
    city: 'Lahore'
  },
  {
    id: 'rudn-enclave',
    developer: 'RUDN Group',
    name: 'RUDN Enclave',
    slug: 'rudn-enclave',
    short_desc: 'Modern residential community with international standards and prime location',
    meta_desc: 'RUDN Enclave - A modern residential development offering quality plots with excellent amenities and strategic location near Islamabad.',
    long_desc: `RUDN Enclave represents a modern approach to residential development, combining contemporary design with practical amenities. Located strategically near Islamabad, this development offers residents the perfect balance of urban convenience and peaceful suburban living.

The project features well-planned residential blocks with modern infrastructure, including wide roads, proper drainage, electricity, gas, and water supply. RUDN Enclave is designed to cater to modern families' needs with parks, commercial areas, and community facilities.

With its commitment to quality construction and timely delivery, RUDN Enclave has become a trusted name in real estate development. The project offers various plot sizes to accommodate different family needs and budgets, making it an attractive investment opportunity.`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&q=80',
        source: 'turn2image0',
        alt: 'RUDN Enclave entrance'
      },
      {
        url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop&q=80',
        source: 'turn2image2',
        alt: 'RUDN Enclave development'
      },
      {
        url: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop&q=80',
        source: 'turn2image5',
        alt: 'RUDN Enclave infrastructure'
      },
      {
        url: 'https://images.unsplash.com/photo-1596796971790-22aedaca2aba?w=800&h=600&fit=crop&q=80',
        source: 'turn2image11',
        alt: 'RUDN Enclave amenities'
      }
    ],
    status: 'pre-launch',
    plot_sizes: ['3 Marla', '5 Marla', '7 Marla', '10 Marla', '1 Kanal'],
    features: [
      'Modern Infrastructure',
      'Prime Location',
      'Quality Construction',
      'Affordable Pricing',
      'Easy Installments',
      'Community Parks',
      'Commercial Area',
      'Security System',
      'Utilities Available',
      'Investment Potential'
    ],
    cta_links: {
      details: '/projects/rudn-enclave',
      book: '#contact',
      plan: '#payment-plan'
    },
    map_coords: {
      lat: 33.6844,
      lng: 73.0479
    },
    source_urls: [
      'https://rudn.pk',
      'https://rudnenclave.com'
    ],
    location: 'Ring Road, Islamabad',
    city: 'Islamabad'
  },
  {
    id: 'new-city-wah',
    developer: 'New City Development',
    name: 'New City Wah',
    slug: 'new-city-wah',
    short_desc: 'Emerging urban development with modern amenities in Wah Cantt',
    meta_desc: 'New City Wah - A modern residential and commercial development in Wah Cantt offering quality plots with excellent connectivity.',
    long_desc: `New City Wah is an emerging urban development that represents the future of modern living in Wah Cantt. This carefully planned community offers residents a blend of contemporary amenities and strategic location advantages.

The development features well-designed residential and commercial areas with modern infrastructure including wide roads, underground utilities, and comprehensive planning. New City Wah is positioned to become a major residential hub with easy access to major cities while maintaining its own identity.

With competitive pricing and flexible payment plans, New City Wah offers an excellent opportunity for both end-users and investors. The project's phased development approach ensures steady growth and value appreciation over time.`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1587041024648-3d1d3e3d8e73?w=800&h=600&fit=crop&q=80',
        source: 'turn3image4',
        alt: 'New City Wah master plan'
      },
      {
        url: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=800&h=600&fit=crop&q=80',
        source: 'turn3image0',
        alt: 'New City Wah development'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80',
        source: 'turn3image6',
        alt: 'New City Wah infrastructure'
      },
      {
        url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop&q=80',
        source: 'turn3image8',
        alt: 'New City Wah amenities'
      }
    ],
    status: 'development',
    plot_sizes: ['3 Marla', '5 Marla', '7 Marla', '10 Marla'],
    features: [
      'Strategic Location',
      'Modern Planning',
      'Affordable Pricing',
      'Easy Accessibility',
      'Commercial Areas',
      'Residential Blocks',
      'Infrastructure Development',
      'Investment Opportunity',
      'Flexible Payment',
      'Growth Potential'
    ],
    cta_links: {
      details: '/projects/new-city-wah',
      book: '#contact',
      plan: '#payment-plan'
    },
    map_coords: {
      lat: 33.7976,
      lng: 72.7369
    },
    source_urls: [
      'https://newcitywah.com'
    ],
    location: 'Wah Cantt',
    city: 'Wah'
  },
  {
    id: 'new-city-paradise',
    developer: 'New City Development',
    name: 'New City Paradise',
    slug: 'new-city-paradise',
    short_desc: 'Premium residential development with luxury amenities and modern infrastructure',
    meta_desc: 'New City Paradise - Premium residential development offering luxury plots with world-class amenities and modern infrastructure.',
    long_desc: `New City Paradise elevates the standard of residential living with its premium development approach and luxury amenities. This exclusive community is designed for discerning families who appreciate quality, comfort, and modern conveniences.

The development features spacious plots, wide boulevards, landscaped green areas, and premium infrastructure. Every aspect of New City Paradise is planned to provide residents with a superior living experience that combines luxury with functionality.

With its focus on premium development and exclusive amenities, New City Paradise represents the pinnacle of modern residential living. The project offers various plot sizes to cater to different preferences while maintaining the highest standards throughout.`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&h=600&fit=crop&q=80',
        source: 'turn3image11',
        alt: 'New City Paradise entrance'
      },
      {
        url: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800&h=600&fit=crop&q=80',
        source: 'turn3image1',
        alt: 'New City Paradise luxury development'
      },
      {
        url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&h=600&fit=crop&q=80',
        source: 'turn3image3',
        alt: 'New City Paradise amenities'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80',
        source: 'turn3image7',
        alt: 'New City Paradise infrastructure'
      }
    ],
    status: 'pre-launch',
    plot_sizes: ['5 Marla', '7 Marla', '10 Marla', '1 Kanal'],
    features: [
      'Premium Development',
      'Luxury Amenities',
      'Spacious Plots',
      'Landscaped Areas',
      'Premium Infrastructure',
      'Exclusive Community',
      'Modern Planning',
      'Quality Construction',
      'Investment Value',
      'Prestigious Location'
    ],
    cta_links: {
      details: '/projects/new-city-paradise',
      book: '#contact',
      plan: '#payment-plan'
    },
    map_coords: {
      lat: 33.7976,
      lng: 72.7369
    },
    source_urls: [
      'https://newcityparadise.com'
    ],
    location: 'Awami Block, Wah',
    city: 'Wah'
  },
  {
    id: 'faisal-town',
    developer: 'Faisal Town Development',
    name: 'Faisal Town',
    slug: 'faisal-town',
    short_desc: 'Established residential community with proven track record and excellent amenities',
    meta_desc: 'Faisal Town - An established residential community offering quality plots with excellent amenities and proven development track record.',
    long_desc: `Faisal Town is an established residential community that has built a strong reputation for quality development and reliable delivery. With years of successful development experience, Faisal Town continues to expand and improve its offerings to residents.

The community features well-developed infrastructure, including paved roads, utilities, parks, and commercial areas. Faisal Town's commitment to maintaining high standards has made it a trusted choice for families seeking a reliable residential investment.

With its proven track record and ongoing development, Faisal Town offers both established amenities and future growth potential. The community provides a stable and secure environment for families while offering good investment returns.`,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=600&fit=crop&q=80',
        source: 'turn4image6',
        alt: 'Faisal Town residential area'
      },
      {
        url: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=600&fit=crop&q=80',
        source: 'turn4image0',
        alt: 'Faisal Town development'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop&q=80',
        source: 'turn4image3',
        alt: 'Faisal Town amenities'
      },
      {
        url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&q=80',
        source: 'turn4image9',
        alt: 'Faisal Town infrastructure'
      }
    ],
    status: 'available',
    plot_sizes: ['3 Marla', '5 Marla', '7 Marla', '10 Marla', '1 Kanal'],
    features: [
      'Established Community',
      'Proven Track Record',
      'Quality Infrastructure',
      'Reliable Development',
      'Commercial Areas',
      'Educational Facilities',
      'Parks & Recreation',
      'Secure Investment',
      'Family-Friendly',
      'Growth Potential'
    ],
    cta_links: {
      details: '/projects/faisal-town',
      book: '#contact',
      plan: '#payment-plan'
    },
    map_coords: {
      lat: 31.4504,
      lng: 74.3587
    },
    source_urls: [
      'https://faisaltown.com'
    ],
    location: 'Multiple Blocks',
    city: 'Lahore'
  }
];

export const companyProfileData: CompanyProfile = {
  id: 'excel-marketing-pvt-ltd',
  company_name: 'Excel Marketing Pvt Ltd',
  tagline: 'WE DON\'T JUST SELL — WE CONNECT, CREATE, AND CONVERT POTENTIAL INTO PERFORMANCE.',
  ceo: {
    name: 'Waheed ur Rehman Farooqui',
    title: 'Chief Executive Officer',
    bio: 'Waheed ur Rehman Farooqui, CEO of Excel Marketing Pvt Ltd, leads a specialized team in property management, sales, marketing, and leasing. The company is dedicated to exceptional results, seamless transactions, and building long-term relationships with property owners, tenants, and buyers.',
    image: '/src/assets/team/ceo-placeholder.jpg'
  },
  contact: {
    phone: '03348737244',
    email: 'waheedfarooki@gmail.com'
  },
  team: [
    {
      name: 'Qaiser ul Haq',
      role: 'Director Sales',
      image: '/src/assets/team/director-sales-placeholder.jpg'
    },
    {
      name: 'Farooq Sultan',
      role: 'Director Marketing',
      image: '/src/assets/team/director-marketing-placeholder.jpg'
    },
    {
      name: 'Ashraf Nazir',
      role: 'Director Legal',
      image: '/src/assets/team/director-legal-placeholder.jpg'
    },
    {
      name: 'Abdullah Farooqui',
      role: 'Director Technical',
      image: '/src/assets/team/director-technical-placeholder.jpg'
    }
  ],
  services: [
    'Deliver high-quality residential and commercial properties',
    'Maximize client satisfaction and investment value',
    'Build long-term trust through transparency and service',
    'Innovate in property solutions and market strategies',
    'Ensure sustainable growth and strong market presence'
  ]
};
