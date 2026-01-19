import GalleryGrid from "../components/GalleryGrid";
import type { GalleryImage } from "../components/GalleryGrid";
// Example Usage Component
const Gallery: React.FC = () => {
  const galleryImages: GalleryImage[] = [
    {
      id: '1',
      src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      alt: 'Resort View 1',
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      alt: 'Resort View 2',
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80',
      alt: 'Resort View 3',
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      alt: 'Resort View 4',
    },
    {
      id: '5',
      src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80',
      alt: 'Resort View 5',
    },
    {
      id: '6',
      src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
      alt: 'Resort View 6',
    },
    {
      id: '7',
      src: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80',
      alt: 'Resort View 7',
    },
    {
      id: '8',
      src: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1200&q=80',
      alt: 'Resort View 8',
    },
    {
      id: '9',
      src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80',
      alt: 'Resort View 9',
    },
    {
      id: '10',
      src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80',
      alt: 'Resort View 10',
    },
    {
      id: '11',
      src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80',
      alt: 'Resort View 11',
    },
    {
      id: '12',
      src: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
      alt: 'Resort View 12',
    },
    {
      id: '13',
      src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80',
      alt: 'Resort View 13',
    },
    {
      id: '14',
      src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80',
      alt: 'Resort View 14',
    },
    {
      id: '15',
      src: 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80',
      alt: 'Resort View 15',
    },
    {
      id: '16',
      src: 'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Resort View 16',
    },
    {
      id: '17',
      src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
      alt: 'Resort View 17',
    },
    {
      id: '18',
      src: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80',
      alt: 'Resort View 18',
    },
  ];

  const resortOptions = [
    { name: 'Ecoliving Homes Saligao, Goa', value: 'saligao' },
    { name: 'Ecoliving Homes Velha, Goa', value: 'velha' },
    { name: 'Ecoliving Homes Cuelim, Goa', value: 'cuelim' },
    { name: 'Ecoliving Homes Hideaway, Netravali, Goa', value: 'hideaway' },
  ];

  return (
    <GalleryGrid
      images={galleryImages}
      resortName="Ecoliving Homes Saligao, Goa"
      heroImage="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2000&q=80"
      resortOptions={resortOptions}
      onResortChange={(value) => console.log('Resort changed:', value)}
    />
  );
};

export default Gallery;