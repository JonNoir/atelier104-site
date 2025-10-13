
export const FONT_STACK = '"Sofia Pro", "Avenir Next", "Proxima Nova", Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'

export const SERIES = [
  {
    id: "serie-104",
    serie: "1.04",
    works: [
      {
        id: "w104a",
        title: "Glass & Light",
        year: 2025,
        medium: "Ballpoint pen on cotton rag",
        size: "80 × 60 cm",
        image: "https://images.unsplash.com/photo-1513569771920-c9e1d31714af?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "w104b",
        title: "Dune Study",
        year: 2025,
        medium: "Ballpoint pen on cotton rag",
        size: "80 × 60 cm",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
      },
    ],
    edition: {
      label: "Giclée Prints",
      medium: "Giclée on cotton rag, archival pigment",
      size: "A2 (59.4 × 42 cm)",
      price: 320,
      editionSize: 25,
      numbers: Array.from({ length: 25 }, (_, i) => ({
        no: i + 1,
        status: [2, 7, 13].includes(i + 1) ? "sold" : "available",
      })),
      certificateNote: "Hand-signed, numbered, embossed studio seal and digital COA.",
    },
  },
  {
    id: "serie-105",
    serie: "1.05",
    works: [
      {
        id: "w105a",
        title: "Quiet Hour",
        year: 2025,
        medium: "Ballpoint pen on cotton rag",
        size: "60 × 42 cm",
        image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "w105b",
        title: "Field Study",
        year: 2025,
        medium: "Ballpoint pen on cotton rag",
        size: "60 × 42 cm",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
      },
    ],
    edition: {
      label: "Giclée Prints",
      medium: "Giclée on cotton rag, archival pigment",
      size: "A3 (42 × 29.7 cm)",
      price: 240,
      editionSize: 25,
      numbers: Array.from({ length: 25 }, (_, i) => ({
        no: i + 1,
        status: [1, 3, 8, 21].includes(i + 1) ? "sold" : "available",
      })),
      certificateNote: "Hand-signed, numbered, embossed studio seal and digital COA.",
    },
  },
]

export const CONTACT = {
  email: "studio@atelier104.com",
  instagram: "https://instagram.com/atelier1.04",
  location: "Paris — Prague",
}
