export interface Project {
  id: string;
  title: string;
  category: "commercial" | "events" | "portraits";
  subcategory?: string;
  description: string;
  thumbnail: string;
  images: string[];
  featured?: boolean;
}

// Modified helper function to handle different extensions in filesystem
const generateImagePaths = (
  folder: string,
  projectFolder: string,
  prefix: string,
  count: number,
  hasSuffix: boolean = false,
  extension: string = "jpg"
) => {
  const paths = [];
  for (let i = 1; i <= count; i++) {
    const fileName = `${prefix}${i}${hasSuffix ? ")" : ""}.${extension}`;
    const fullPath = `/assets/${folder}/${projectFolder}/${fileName}`;
    paths.push(fullPath);
    console.log(`Generated path: ${fullPath}`); // Debug output
  }
  return paths;
};

// Function to get extension from file path
const getExtension = (path: string): string => {
  const parts = path.split(".");
  return parts[parts.length - 1].toLowerCase();
};

// Function to normalize image paths for consistent extensions
const normalizeImagePath = (path: string): string => {
  // Keep the original path but handle it properly in the frontend
  return path;
};

export const projects: Project[] = [
  {
    id: "kristina",
    title: "Kristina",
    category: "portraits",
    description:
      "Soft natural light, urban aesthetics, and storytelling elements come together in portraits that blend technical precision with emotional depth.",
    thumbnail: "/assets/Portraits/Kristina/Kristina (1).JPG",
    images: generateImagePaths(
      "Portraits",
      "Kristina",
      "Kristina (",
      11,
      true,
      "JPG"
    ),
    featured: true,
  },
  {
    id: "jazzie-doc",
    title: "Jazzie Doc",
    category: "commercial",
    description:
      "Documenting the journey of a physician through compassionate visual storytelling, where dedication meets humanity in the healing profession.",
    thumbnail: "/assets/Commercial/Jazzie doc/Jazzie-1.jpg",
    images: Array.from(
      { length: 11 },
      (_, i) => `/assets/Commercial/Jazzie doc/Jazzie-${i + 1}.jpg`
    ),
    featured: true,
  },
  {
    id: "doctors-university",
    title: "Doctors of Perpetual University",
    category: "commercial",
    description:
      "Portraying the dedication and expertise of those who shape tomorrow's healers through a blend of formal portraiture and candid documentary photography.",
    thumbnail:
      "/assets/Commercial/Doctor faculties of perpetual university/Doctor-1.JPG",
    images: Array.from(
      { length: 21 },
      (_, i) =>
        `/assets/Commercial/Doctor faculties of perpetual university/Doctor-${
          i + 1
        }.JPG`
    ),
  },
  {
    id: "mtg-company",
    title: "MTG Company",
    category: "commercial",
    description:
      "Elevating corporate imagery beyond the conventional through strategic composition and lighting that captures both professionalism and the playful spirit of gaming culture.",
    thumbnail: "/assets/Commercial/MTG company/MTG-1.JPG",
    images: Array.from(
      { length: 12 },
      (_, i) => `/assets/Commercial/MTG company/MTG-${i + 1}.JPG`
    ),
  },
  {
    id: "mentoring-program",
    title: "Mentoring Program",
    category: "commercial",
    description:
      "Visualizing the powerful exchange of knowledge and wisdom through intimate photography that honors the mentorship journey.",
    thumbnail: "/assets/Commercial/Mentoring program/Mentoring (1).JPG",
    images: generateImagePaths(
      "Commercial",
      "Mentoring program",
      "Mentoring (",
      24,
      true,
      "JPG"
    ),
  },
  {
    id: "medical-mission",
    title: "Medical Mission",
    category: "commercial",
    description:
      "Documenting healthcare outreach with sensitivity and purpose, capturing moments of impact where medicine meets compassion.",
    thumbnail: "/assets/Commercial/Medical mission/Medical (1).JPG",
    images: generateImagePaths(
      "Commercial",
      "Medical mission",
      "Medical (",
      19,
      true,
      "JPG"
    ),
  },
  {
    id: "international-hangout",
    title: "International Hangout",
    category: "commercial", // Should this be "events"?
    description:
      "Celebrating global connections through vibrant imagery that transcends borders, capturing the joy of cross-cultural friendship and exchange.",
    thumbnail: "/assets/Commercial/International hangout/International (1).JPG",
    images: generateImagePaths(
      "Commercial",
      "International hangout",
      "International (",
      22,
      true,
      "JPG"
    ),
    featured: true,
  },
  {
    id: "graduation",
    title: "Graduation",
    category: "events", // Corrected from "commercial"
    description:
      "Memorializing academic achievement through photography that balances formal tradition with authentic emotion, marking the transition from student to professional.",
    thumbnail: "/assets/Commercial/Graduation/Graduation (1).JPG",
    images: generateImagePaths(
      "Commercial",
      "Graduation",
      "Graduation (",
      7,
      true,
      "JPG"
    ),
  },
  {
    id: "isa-meeting",
    title: "ISA Meeting",
    category: "events", // Corrected from "commercial"
    description:
      "Capturing the energy of international collaboration through event photography that emphasizes diversity, engagement, and the exchange of ideas.",
    thumbnail: "/assets/Commercial/ISA meeting/ISA (1).jpeg",
    images: generateImagePaths(
      "Commercial",
      "ISA meeting",
      "ISA (",
      22,
      true,
      "jpeg"
    ),
  },
  {
    id: "sana-bday",
    title: "Sana Bday",
    category: "events",
    description:
      "Capturing the joy and intimacy of birthday celebrations through a documentary approach that preserves genuine moments of happiness.",
    thumbnail: "/assets/Events/Sana bday/Sana (1).jpg",
    images: generateImagePaths(
      "Events",
      "Sana bday",
      "Sana (",
      14,
      true,
      "jpg"
    ),
  },
  {
    id: "holi",
    title: "Holi",
    category: "events",
    description:
      "Celebrating the vibrant festival of colors through dynamic photography that captures motion, joy, and cultural traditions in a riot of hues.",
    thumbnail: "/assets/Events/Holi/Holi (1).JPG",
    images: generateImagePaths("Events", "Holi", "Holi (", 28, true, "JPG"),
    featured: true,
  },
  {
    id: "uni-week",
    title: "Uni Week",
    category: "events",
    description:
      "Documenting university traditions with an artistic eye, weaving together academic pride with cultural celebration in a unique campus experience.",
    thumbnail: "/assets/Events/Uni week/Uni (1).JPG",
    images: generateImagePaths("Events", "Uni week", "Uni (", 36, true, "JPG"),
  },
  {
    id: "arjun",
    title: "Arjun",
    category: "portraits",
    description:
      "Studio and environmental portraits with artistic depth, focusing on authentic character and emotional storytelling through thoughtful composition.",
    thumbnail: "/assets/Portraits/Arjun/Arjun (1).JPG",
    images: generateImagePaths("Portraits", "Arjun", "Arjun (", 2, true, "JPG"),
    featured: true,
  },
  {
    id: "mtg-shirts",
    title: "MTG Shirts",
    category: "commercial",
    description:
      "Bringing Magic: The Gathering's fantastical world into wearable art through vibrant product photography that captures both detail and imagination.",
    thumbnail: "/assets/Commercial/Mtg shirts/MTG-1.jpg",
    images: Array.from(
      { length: 4 },
      (_, i) => `/assets/Commercial/Mtg shirts/MTG-${i + 1}.jpg`
    ),
  },
  {
    id: "bagavat",
    title: "Bagavat",
    category: "portraits",
    description:
      "High-contrast, unconventional angles, and experimental approaches define these portrait sessions that push creative boundaries.",
    thumbnail: "/assets/Portraits/Bagavat/Bagavat (1).JPG",
    images: generateImagePaths(
      "Portraits",
      "Bagavat",
      "Bagavat (",
      5,
      true,
      "JPG"
    ),
    featured: true,
  },
];

// Function to normalize file extensions for frontend display
export const getProjectsWithNormalizedPaths = () => {
  return projects.map((project) => {
    // Create a new object to avoid modifying the original data
    return {
      ...project,
      // Add a srcset with multiple possible extension formats
      thumbnail: project.thumbnail,
      // For each image, add fallback extensions
      images: project.images.map((img) => img),
    };
  });
};

// Function to create a srcset with multiple extension options
export const createImageSrcSet = (path: string) => {
  // Extract the base path without extension
  const basePath = path.substring(0, path.lastIndexOf("."));

  // Create srcset with multiple extensions
  return {
    original: path,
    srcSet: [`${basePath}.jpg`, `${basePath}.JPG`, `${basePath}.jpeg`],
  };
};

// Function to handle image loading with fallbacks
export const getImageWithFallback = (imagePath: string) => {
  return {
    src: imagePath,
    onError: (e: any) => {
      const imgElement = e.target;
      const currentSrc = imgElement.src;

      // Try different extensions if the current one fails
      if (currentSrc.toLowerCase().endsWith(".jpg")) {
        imgElement.src = currentSrc.replace(/\.jpg$/i, ".JPG");
      } else if (currentSrc.toLowerCase().endsWith(".jpg")) {
        imgElement.src = currentSrc.replace(/\.jpg$/i, ".jpeg");
      } else if (currentSrc.toLowerCase().endsWith(".jpeg")) {
        imgElement.src = currentSrc.replace(/\.jpeg$/i, ".JPG");
      } else if (currentSrc.toLowerCase().endsWith(".jpg")) {
        imgElement.src = currentSrc.replace(/\.jpg$/i, ".png");
      }
    },
  };
};

export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);

export const getProjectsByCategory = (category: Project["category"]) =>
  projects.filter((project) => project.category === category);

export const getProjectById = (id: string) =>
  projects.find((project) => project.id === id);

// Categories with descriptions
export const categories = [
  {
    id: "commercial",
    title: "Commercial",
    description:
      "Professional photography for businesses, products, and commercial use, including corporate portraits, product shots, and marketing materials.",
    image: "/assets/Commercial/Mentoring program/Mentoring (3).JPG",
  },
  {
    id: "events",
    title: "Events",
    description:
      "Capturing special moments at celebrations, corporate functions, cultural festivals, and academic ceremonies.",
    image: "/assets/Events/Uni week/Uni (3).JPG",
  },
  {
    id: "portraits",
    title: "Portraits",
    description:
      "Artistic portraits that capture personality and emotion, whether in studio settings or natural environments.",
    image: "/assets/Portraits/Kristina/Kristina (1).JPG",
  },
];

// Asset directory map for reference or additional functionality
export const assetDirectoryMap = {
  Commercial: {
    "Mtg shirts": {
      prefix: "MTG-",
      count: 4,
      hasSuffix: false,
      extension: "jpg",
    },
    "Jazzie doc": {
      prefix: "Jazzie-",
      count: 11,
      hasSuffix: false,
      extension: "jpg",
    },
    "Doctor faculties of perpetual university": {
      prefix: "Doctor-",
      count: 21,
      hasSuffix: false,
      extension: "JPG",
    },
    "MTG company": {
      prefix: "MTG-",
      count: 12,
      hasSuffix: false,
      extension: "JPG",
    },
    "Mentoring program": {
      prefix: "Mentoring (",
      count: 24,
      hasSuffix: true,
      extension: "JPG",
    },
    "Medical mission": {
      prefix: "Medical (",
      count: 19,
      hasSuffix: true,
      extension: "JPG",
    },
    "International hangout": {
      prefix: "International (",
      count: 22,
      hasSuffix: true,
      extension: "JPG",
    },
    Graduation: {
      prefix: "Graduation (",
      count: 7,
      hasSuffix: true,
      extension: "JPG",
    },
    "ISA meeting": {
      prefix: "ISA (",
      count: 22,
      hasSuffix: true,
      extension: "jpeg",
    },
  },
  Events: {
    "Sana bday": {
      prefix: "Sana (",
      count: 14,
      hasSuffix: true,
      extension: "jpg",
    },
    Holi: { prefix: "Holi (", count: 28, hasSuffix: true, extension: "JPG" },
    "Uni week": {
      prefix: "Uni (",
      count: 36,
      hasSuffix: true,
      extension: "JPG",
    },
  },
  Portraits: {
    Arjun: { prefix: "Arjun (", count: 2, hasSuffix: true, extension: "JPG" },
    Kristina: {
      prefix: "Kristina (",
      count: 11,
      hasSuffix: true,
      extension: "JPG",
    },
    Bagavat: {
      prefix: "Bagavat (",
      count: 5,
      hasSuffix: true,
      extension: "JPG",
    },
  },
};
