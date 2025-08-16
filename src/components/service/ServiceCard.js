

function ServiceCard({ icon, title, children }) {
  return (
      <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center space-x-4 mb-4">
                {icon}
                <h3 className="text-2xl font-bold">{title}</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
                {children}
            </ul>
        </div>
  );
}

export default ServiceCard;
