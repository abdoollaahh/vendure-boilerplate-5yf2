import { motion } from 'framer-motion';

export default function GoogleReviews() {
  const reviews = [
    {
      name: 'Jean Dupont',
      rating: 5,
      review:
        "Service excellent ! J'ai acheté ma voiture ici et l'expérience a été fluide. Fortement recommandé !",
      date: '12 juillet 2023',
    },
    {
      name: 'Marie Dubois',
      rating: 4,
      review:
        "Superbes offres sur les voitures de location. Le personnel était très serviable, et je n'ai eu aucun problème tout au long du processus.",
      date: '5 août 2023',
    },
    {
      name: 'Michel Martinet',
      rating: 5,
      review:
        'Équipe professionnelle et excellent service client. Je suis très satisfait de mon achat. Merci !',
      date: '10 septembre 2023',
    },
  ];

  return (
    <div>
      <h2
        id="reviews-heading"
        className="text-4xl font-extrabold tracking-tight text-gray-900"
      >
        Avis <span className="text-blue-600">G</span>
        <span className="text-red-600">o</span>
        <span className="text-yellow-500">o</span>
        <span className="text-blue-600">g</span>
        <span className="text-green-600">l</span>
        <span className="text-red-600">e</span>
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }} // Animation starts with opacity 0 and below view
            whileInView={{ opacity: 1, y: 0 }} // Animation to full visibility when in view
            transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered delay for each card
            viewport={{ once: true }} // Triggers animation once when in view
          >
            <div className="flex items-center mb-4">
              <div className="text-2xl font-semibold text-gray-800">
                {review.name}
              </div>
              <div className="ml-auto text-yellow-500">
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <svg
                    key={idx}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.953h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.445 1.287 3.952c.3.921-.755 1.688-1.539 1.11L10 13.611l-3.367 2.446c-.783.578-1.837-.189-1.539-1.11l1.287-3.952-3.367-2.445c-.784-.57-.38-1.81.588-1.81h4.162l1.287-3.953z" />
                  </svg>
                ))}
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4">{review.review}</p>
            <p className="text-xs text-gray-400">{review.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
