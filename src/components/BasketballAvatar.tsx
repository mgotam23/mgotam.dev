interface BasketballAvatarProps {
    initials: string;
}

const BasketballAvatar = ({ initials }: BasketballAvatarProps) => (
    <div className="relative w-48 h-48 mx-auto">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin [animation-duration:15s]">
            <circle cx="50" cy="50" r="48" fill="#F97316" />
            <path d="M50,2 A48,48 0 0,1 50,98 M50,2 A48,48 0 0,0 50,98" stroke="#111827" strokeWidth="2" fill="none" />
            <path d="M2,50 A48,48 0 0,0 98,50 M2,50 A48,48 0 0,1 98,50" stroke="#111827" strokeWidth="2" fill="none" />
            <path d="M25,15 A40,40 0 0,1 75,15" stroke="#111827" strokeWidth="2" fill="none" />
            <path d="M25,85 A40,40 0 0,0 75,85" stroke="#111827" strokeWidth="2" fill="none" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold font-heading text-gray-900 select-none">
            {initials}
        </div>
    </div>
);

export { BasketballAvatar };