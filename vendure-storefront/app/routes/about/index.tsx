import { MetaFunction } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { name: 'title', content: 'À propos de nous' },
    { name: 'description', content: 'En savoir plus sur notre entreprise.' },
  ];
};

export default function About() {
  return (
    <div className="bg-gray-50 py-16">
      {/* Section Héro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900">
          À propos de nous
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Bienvenue dans notre entreprise. Nous nous engageons à fournir le
          meilleur service et à vous aider à trouver les solutions adaptées à
          vos besoins.
        </p>
      </div>

      {/* Section Mission */}
      <div className="mt-12 bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Notre mission</h2>
            <p className="mt-4 text-lg text-gray-600">
              Nous nous efforçons de fournir un service exceptionnel en
              proposant des solutions innovantes qui répondent aux besoins de
              nos clients. Notre mission est de créer des relations durables
              basées sur la confiance, la fiabilité et la qualité.
            </p>
          </div>
          <div>
            <img
              src="/spacecar.jpeg"
              alt="Notre Mission"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Section Valeurs */}
      <div className="mt-12 bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Nos valeurs</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800">
                Intégrité
              </h3>
              <p className="mt-4 text-gray-600">
                Nous croyons en l'honnêteté, l'éthique et la transparence dans
                toutes nos relations.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800">
                Orientation client
              </h3>
              <p className="mt-4 text-gray-600">
                Nos clients sont au cœur de tout ce que nous faisons. Nous
                visons à dépasser leurs attentes.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800">
                Innovation
              </h3>
              <p className="mt-4 text-gray-600">
                Nous adoptons la créativité et les nouvelles idées pour
                améliorer continuellement nos services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
