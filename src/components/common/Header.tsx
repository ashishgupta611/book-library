import Link from 'next/link';
import { HeaderProps } from '../../interfaces';

const Header = ({ title, className = '', children }: HeaderProps) => {
    return (
        <header className={`bg-white shadow-sm ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-1xl font-bold leading-tight text-gray-900">
                        <Link href="/" className="text-gray-600 hover:text-gray-900">
                            HOME
                        </Link>
                        {children}
                    </h1>
                    <h2 className="text-2xl font-bold leading-tight text-gray-900">{title}</h2>
                </div>
            </div>
        </header>
    );
};

export default Header;