import { lusitana } from '@/app/ui/fonts';

export default function Footer() {
    return (
        <footer className={`${lusitana.className} flex h-16 shrink-0 items-center justify-center bg-gray-100 text-sm text-gray-500`}>
        <p>© 2024 Acme Inc. All rights reserved.</p>
      </footer>
    );
}