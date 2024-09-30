export default function Location() {
  return (
    <div>
      <h2
        id="location-heading"
        className="text-4xl font-extrabold tracking-tight text-gray-900"
      >
        Notre emplacement
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Nous sommes situés au cœur de la Suisse. Venez nous voir pour obtenir de
        l'aide pour l'achat ou la vente de votre voiture, ou explorez notre
        collection en ligne. Cliquez sur le lien ci-dessous pour nous trouver
        sur Google Maps.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 gap-x-8">
        {/* Location Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-3xl font-semibold text-gray-800">
            Cernier, Suisse
          </h3>
          <p className="mt-4 text-gray-600">
            Notre siège est situé à Cernier, offrant un service de qualité à
            tous nos clients en Suisse.
          </p>

          <div className="mt-6">
            <a
              href="https://goo.gl/maps/xyzswisslocation" // Remplacez par le lien Google Maps réel
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-600 font-medium hover:underline inline-flex items-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a6 6 0 00-6 6c0 4.99 6 10 6 10s6-5.01 6-10a6 6 0 00-6-6zM8.5 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
              <span>Voir sur Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
