export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export const products: Product[] = [
  // Electronics
  {
    id: 'samsung-tv-50',
    name: 'Samsung 50" Smart TV',
    price: 598000,
    category: 'Electronics',
    image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/10/795128/1.jpg?5546',
    description: '4K Ultra HD Smart TV with Crystal Display, HDR, and built-in streaming apps.'
  },
  {
    id: 'hisense-tv-43',
    name: 'Hisense 43" Android TV',
    price: 310000,
    category: 'Electronics',
    image: 'https://fouanistore.com/_next/image?url=https%3A%2F%2Fsalva.ams3.cdn.digitaloceanspaces.com%2Fproduction%2Ftenants%2Ffouani%2Fpicture%2F2%2F2bf6bbf7-27d7-4c95-9b1d-9859decb9e67%2Fimage.png%3F_dc%3D1736532015&w=3840&q=75',
    description: 'Full HD Android TV with Google Assistant, Chromecast built-in, and voice control.'
  },
  {
    id: 'lg-soundbar',
    name: 'LG Soundbar 2.1Ch',
    price: 180000,
    category: 'Electronics',
    image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/9152673/1.jpg?4457',
    description: '2.1 Channel Soundbar with wireless subwoofer, Bluetooth connectivity, and DTS Virtual:X.'
  },
  {
    id: 'scanfrost-microwave',
    name: 'Scanfrost Microwave Oven',
    price: 125000,
    category: 'Electronics',
    image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/90/7926612/1.jpg?7899',
    description: '25L Digital Microwave Oven with 10 power levels and auto-cook functions.'
  },
  {
    id: 'panasonic-fan',
    name: 'Panasonic Standing Fan',
    price: 74500,
    category: 'Electronics',
    image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/5961483/2.jpg?7552',
    description: '16-inch Standing Fan with 3-speed settings and oscillating function.'
  },

  // Gadgets & Accessories
  {
    id: 'oraimo-smartwatch',
    name: 'Oraimo Smartwatch Pro',
    price: 69000,
    category: 'Gadgets & Accessories',
    image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/73/3894063/1.jpg?8895',
    description: 'Smart fitness tracker with heart rate monitor, GPS, and 7-day battery life.'
  },
  {
    id: 'anker-powerbank',
    name: 'Anker 20,000mAh Power Bank',
    price: 81500,
    category: 'Gadgets & Accessories',
    image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/01/1480314/1.jpg?1228',
    description: 'High-capacity portable charger with Power Delivery and multiple USB ports.'
  },
  {
    id: 'wireless-earbuds',
    name: 'Wireless Earbuds (Noise Cancelling)',
    price: 72000,
    category: 'Gadgets & Accessories',
    image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/73/2444304/1.jpg?8762',
    description: 'True wireless earbuds with active noise cancellation and 30-hour battery life.'
  },
  {
    id: 'usb-c-hub',
    name: 'USB-C Fast Charging Hub',
    price: 56000,
    category: 'Gadgets & Accessories',
    image: 'https://img.kwcdn.com/product/fancy/d804df21-67bc-45bf-b102-870a341d622f.jpg?imageView2/2/w/800/q/70/format/webp',
    description: '7-in-1 USB-C hub with HDMI, USB ports, SD card reader, and fast charging.'
  },
  {
    id: 'smart-bulbs',
    name: 'Smart WiFi Light Bulbs (4-Pack)',
    price: 48000,
    category: 'Gadgets & Accessories',
    image: 'https://img.kwcdn.com/product/fancy/33a71277-bc9f-4b82-b97d-a700b752e5c2.jpg?imageView2/2/w/800/q/70/format/webp',
    description: 'WiFi-enabled smart bulbs with 16 million colors and voice control compatibility.'
  },

  // Office & Utility Tech
  {
    id: 'hp-printer',
    name: 'HP DeskJet All-in-One Printer',
    price: 145000,
    category: 'Office & Utility Tech',
    image: 'https://www.hp.com/wcsstore/hpusstore/Treatment/category/images/HP-DeskJet-4255e-AiO-TasselPlus-588S6A-573x430.png?imwidth=270&imdensity=1',
    description: 'All-in-one printer with scan, copy, and wireless printing capabilities.'
  },
  {
    id: 'led-monitor',
    name: 'LED Monitor 24"',
    price: 162000,
    category: 'Office & Utility Tech',
    image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/1100272/1.jpg?2672',
    description: '24-inch Full HD LED monitor with HDMI and VGA connectivity.'
  },
  {
    id: 'bluetooth-keyboard',
    name: 'Bluetooth Keyboard + Mouse',
    price: 58000,
    category: 'Office & Utility Tech',
    image: 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/54/9794814/1.jpg?9183',
    description: 'Wireless keyboard and mouse combo with ergonomic design and long battery life.'
  },
  {
    id: 'surge-protector',
    name: 'Surge Protector 6-Way with USB',
    price: 55000,
    category: 'Office & Utility Tech',
    image: 'https://mercurydirect.com.ng/wp-content/uploads/2017/11/Surge-Protector-6-Socket-4-USB.jpg',
    description: '6-outlet surge protector with 2 USB charging ports and LED indicator.'
  },
  {
    id: 'portable-harddrive',
    name: 'Portable Hard Drive 1TB',
    price: 82000,
    category: 'Office & Utility Tech',
    image: 'https://i.ebayimg.com/images/g/IGYAAOSwFE5f29bL/s-l1600.webp',
    description: '1TB portable external hard drive with USB 3.0 and password protection.'
  }
];

export const categories = ['All', 'Electronics', 'Gadgets & Accessories', 'Office & Utility Tech']; 