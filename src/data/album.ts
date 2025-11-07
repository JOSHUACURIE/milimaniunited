export interface AlbumImage {
  id: number;
  imageUrl: string;
  featured: boolean;
}

export interface Album {
  id: number;
  title: string;
  coverImage: string;
  photoCount: number;
  date: string;
  category: string;
  featured: boolean;
  images: AlbumImage[];
}

// Extract albums with just image file names
export const albums: Album[] = [
  {
    id: 1,
    title: "Annual Community Festival 2024",
    coverImage: "/mazingira.jpg",
    photoCount: 45,
    date: "2024-03-15",
    category: "Community Events",
    featured: true,
    images: [
      {
        id: 8,
        imageUrl: "/energy.jpg",
        featured: true
      }
    ]
  },
  {
    id: 2,
    title: "Education Transformation",
    coverImage: "/transformation.jpg",
    photoCount: 45,
    date: "2024-03-10",
    category: "Education",
    featured: false,
    images: [
      {
        id: 2,
        imageUrl: "/class.jpg",
        featured: false
      }
    ]
  },
  {
    id: 3,
    title: "Women Empowerment",
    coverImage: "/women.jpg",
    photoCount: 32,
    date: "2024-02-28",
    category: "Economic Empowerment",
    featured: false,
    images: [
      {
        id: 4,
        imageUrl: "/vocational.jpg",
        featured: false
      },
      {
        id: 11,
        imageUrl: "/women.jpg",
        featured: false
      }
    ]
  },
  {
    id: 4,
    title: "Green Communities",
    coverImage: "/green.jpg",
    photoCount: 28,
    date: "2024-02-15",
    category: "Environment & Sustainability",
    featured: false,
    images: [
      {
        id: 6,
        imageUrl: "/tree.jpg",
        featured: true
      },
      {
        id: 7,
        imageUrl: "/energy.jpg",
        featured: false
      }
    ]
  },
  {
    id: 5,
    title: "Annual Events 2023",
    coverImage: "/sports.jpg",
    photoCount: 67,
    date: "2023-12-20",
    category: "Community Events",
    featured: false,
    images: [
      {
        id: 9,
        imageUrl: "/communit.jpg",
        featured: false
      }
    ]
  },
  {
    id: 6,
    title: "Digital Literacy Program",
    coverImage: "/digital.jpg",
    photoCount: 38,
    date: "2024-01-25",
    category: "Education",
    featured: false,
    images: []
  },
  {
    id: 7,
    title: "Youth Development 2024",
    coverImage: "/sports.jpg",
    photoCount: 25,
    date: "2024-01-30",
    category: "Youth Programs",
    featured: false,
    images: [
      {
        id: 12,
        imageUrl: "/sports.jpg",
        featured: true
      },
      {
        id: 13,
        imageUrl: "/leaders.jpg",
        featured: false
      }
    ]
  }
];

// Helper functions
export const getFeaturedAlbums = (): Album[] => {
  return albums.filter(album => album.featured);
};

export const getAlbumsByCategory = (category: string): Album[] => {
  return albums.filter(album => album.category === category);
};

export const getAlbumById = (id: number): Album | undefined => {
  return albums.find(album => album.id === id);
};

export const getAlbumImages = (albumId: number): AlbumImage[] => {
  const album = albums.find(album => album.id === albumId);
  return album ? album.images : [];
};

export const getAllAlbumImages = (): AlbumImage[] => {
  return albums.flatMap(album => album.images);
};

export const getRecentAlbums = (count: number = 6): Album[] => {
  return albums
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

// Extract all unique image file names
export const allImageFiles: string[] = [
  // Cover images
  "/annual.jpg",
  "/transformation.jpg",
  "/women.jpg",
  "/green.jpg",
  "/sports.jpg",
  "/digital.jpg",
  
  // Album images
  "/sing.jpg",
  "/health.jpg",
  "/class.jpg",
  "/vocational.jpg",
  "/tree.jpg",
  "/energy.jpg",
  "/communit.jpg",
  "/leaders.jpg"
];

// Category cover images
export const categoryCoverImages = {
  "Education": "/classroom.jpg",
  "Economic Empowerment": "/economic.jpg",
  "Environment & Sustainability": "/environment.jpg",
  "Community Events": "/community.jpg",
  "Health & Wellness": "/health.jpg",
  "Youth Programs": "/yudhe.jpg"
};