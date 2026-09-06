import './globals.css';
export const dynamic = 'force-static';
export const metadata = { title: 'The Duck | London, remarkably reimagined', description: 'A new perspective on the City. Discover The Duck, an extraordinary new address beside the Tower of London.' };
export default function RootLayout({children}: {children: React.ReactNode}) { return <html lang="en"><body>{children}</body></html> }
