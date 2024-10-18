import { useLoaderData } from '@remix-run/react';
import { getCollections } from '~/providers/collections/collections';
import { CollectionCard } from '~/components/collections/CollectionCard';
import { LoaderArgs } from '@remix-run/server-runtime';
import { useTranslation } from 'react-i18next';
import HeroBox from './HeroBox';
import HeaderImage from '../../public/sellCar.jpg';
import PromotionImage from '../../public/promotion.jpeg';
import Locations from './Locations';
import GoogleReviews from './GoogleReviews';

export async function loader({ request }: LoaderArgs) {
  const collections = await getCollections(request, { take: 20 });
  return {
    collections,
  };
}

export default function Index() {
  const { collections } = useLoaderData<typeof loader>();
  const { t } = useTranslation();
  const headerImage = collections[0]?.featuredAsset?.preview;

  return (
    <>
      <div className="relative">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          {headerImage && (
            <img className="absolute w-full" src={HeaderImage} alt="header" />
          )}
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-50"
        />
        <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0"></div>
      </div>
      <HeroBox />

      <section
        aria-labelledby="category-heading"
        className="pt-24 sm:pt-32 sm:px-2 xl:max-w-7xl xl:mx-auto xl:px-8"
      >
        <div className="px-4 sm:px-6 lg:px-8 xl:px-0">
          {/* Promotions Heading */}
          <h2
            id="category-heading"
            className="text-4xl font-extrabold tracking-tight text-gray-900"
          >
            Promotions
          </h2>
        </div>

        <div className="mt-12">
          {/* Card and Text Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Card on the left */}
            <div className="w-full">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={PromotionImage} // Ensure the correct image path is used here
                  alt="Promotion Car"
                  className="w-full h-[10rems] object-fill"
                />
                <div className="p-6">
                  <div className="mt-4">
                    <a
                      href="/collections/promotions"
                      className="text-indigo-600 font-medium hover:text-indigo-400"
                    >
                      Learn more &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Promotional Text on the right */}
            <div className="w-full">
              <div className="text-gray-700">
                <h3 className="text-4xl font-semibold">
                  Voitures incroyables en promotion
                </h3>
                <p className="mt-4 text-lg leading-relaxed">
                  Découvrez une grande variété de voitures neuves, d'occasion et
                  de location actuellement en promotion. Que vous cherchiez les
                  derniers modèles ou des options fiables et économiques, nous
                  avons ce qu'il vous faut. Profitez de ces offres exclusives
                  avant qu'elles ne disparaissent !
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                  Visitez notre page promotions pour obtenir des informations
                  détaillées sur les réductions, les options de financement et
                  d'autres offres en édition limitée. Repartez au volant de la
                  voiture de vos rêves dès aujourd'hui !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section
        aria-labelledby="locations-heading"
        className="pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8"
      >
        <Locations />
      </section>

      {/* Stats Section */}
      <section
        aria-labelledby="stats-heading"
        className="pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8 py-7"
      >
        <GoogleReviews />
      </section>
    </>
  );
}
