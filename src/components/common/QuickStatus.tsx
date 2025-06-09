import { QuickStatusProps } from '../../interfaces';

const QuickStatus = ({title, total, read, pending, children}: QuickStatusProps) => {

    return (
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-medium text-gray-800 mb-3">{title}</h3>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">{total}</div>
              <div className="text-sm text-gray-500">Total Books</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{read}</div>
              <div className="text-sm text-gray-500">Books Read</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">{pending}</div>
              <div className="text-sm text-gray-500">To Read</div>
            </div>
            {children}
          </div>
        </div>
    );
};

export default QuickStatus;
