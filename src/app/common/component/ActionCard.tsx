import Link from 'next/link';
import { ActionCardProps } from '../interfaces';

const ActionCard = ({
  title,
  description,
  buttonText,
  href,
  titleColor = 'text-indigo-700',
  buttonColor = 'bg-indigo-600',
  buttonHoverColor = 'hover:bg-indigo-700',
  children
}: ActionCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <h3 className={`text-xl font-semibold mb-3 ${titleColor}`}>{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={href}
        className={`inline-block px-6 py-2 ${buttonColor} text-white rounded-md ${buttonHoverColor} transition-colors`}>
        {buttonText}
      </Link>
      {children}
    </div>
  );
};

export default ActionCard;