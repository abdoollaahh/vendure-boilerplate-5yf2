import { DataFunctionArgs, json } from '@remix-run/server-runtime';
import { useState } from 'react';
import { Price } from '~/components/products/Price';
import { getProductBySlug } from '~/providers/products/products';
import {
  FetcherWithComponents,
  ShouldRevalidateFunction,
  useLoaderData,
  useOutletContext,
  MetaFunction,
} from '@remix-run/react';
import {
  CheckIcon,
  HeartIcon,
  PhoneIcon,
  PhotoIcon,
} from '@heroicons/react/24/solid';
import { Breadcrumbs } from '~/components/Breadcrumbs';
import { APP_META_TITLE } from '~/constants';
import { CartLoaderData } from '~/routes/api/active-order';
import { getSessionStorage } from '~/sessions';
import { ErrorCode, ErrorResult } from '~/generated/graphql';
import Alert from '~/components/Alert';
import { StockLevelLabel } from '~/components/products/StockLevelLabel';
import { ScrollableContainer } from '~/components/products/ScrollableContainer';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion'; // Import Framer Motion

export const meta: MetaFunction = ({ data }) => {
  return [
    {
      title: data?.product?.name
        ? `${data.product.name} - ${APP_META_TITLE}`
        : APP_META_TITLE,
    },
  ];
};

export async function loader({ params, request }: DataFunctionArgs) {
  const { product } = await getProductBySlug(params.slug!, { request });
  if (!product) {
    throw new Response('Not Found', {
      status: 404,
    });
  }
  const sessionStorage = await getSessionStorage();
  const session = await sessionStorage.getSession(
    request?.headers.get('Cookie'),
  );
  const error = session.get('activeOrderError');
  return json(
    { product: product!, error },
    {
      headers: {
        'Set-Cookie': await sessionStorage.commitSession(session),
      },
    },
  );
}

export const shouldRevalidate: ShouldRevalidateFunction = () => true;

export default function ProductSlug() {
  const { product, error } = useLoaderData<typeof loader>();
  const { activeOrderFetcher } = useOutletContext<{
    activeOrderFetcher: FetcherWithComponents<CartLoaderData>;
  }>();
  const { activeOrder } = activeOrderFetcher.data ?? {};
  const addItemToOrderError = getAddItemToOrderError(error);
  const { t } = useTranslation();

  const [selectedVariantId, setSelectedVariantId] = useState(
    product.variants[0].id,
  );
  const selectedVariant = product.variants.find(
    (v) => v.id === selectedVariantId,
  );
  const [showPhoneNumber, setShowPhoneNumber] = useState(false); // State to show phone number
  const [featuredAsset, setFeaturedAsset] = useState(
    selectedVariant?.featuredAsset,
  );

  const qtyInCart =
    activeOrder?.lines.find((l) => l.productVariant.id === selectedVariantId)
      ?.quantity ?? 0;

  if (!product) {
    return <div>{t('product.notFound')}</div>;
  }

  return (
    <div>
      {/* Breadcrumbs (Navigation) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 mt-4" // Adjusted position
      >
        <Breadcrumbs
          items={
            product.collections[product.collections.length - 1]?.breadcrumbs ??
            []
          }
        />
      </motion.div>

      {/* Product Name */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8 max-w-6xl mx-auto px-4"
      >
        {product.name}
      </motion.h2>

      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start mt-4 md:mt-12 max-w-6xl mx-auto px-4">
        {/* Image gallery */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full max-w-2xl mx-auto sm:block lg:max-w-none"
        >
          <span className="rounded-md overflow-hidden">
            <div className="w-full h-full object-center object-cover rounded-lg">
              <img
                src={
                  (featuredAsset?.preview || product.featuredAsset?.preview) +
                  '?w=800'
                }
                alt={product.name}
                className="w-full h-full object-center object-cover rounded-lg"
              />
            </div>
          </span>

          {product.assets.length > 1 && (
            <ScrollableContainer>
              {product.assets.map((asset) => (
                <div
                  key={asset.id}
                  className={`basis-1/3 md:basis-1/4 flex-shrink-0 select-none touch-pan-x rounded-lg ${
                    featuredAsset?.id == asset.id
                      ? 'outline outline-2 outline-primary outline-offset-[-2px]'
                      : ''
                  }`}
                  onClick={() => {
                    setFeaturedAsset(asset);
                  }}
                >
                  <img
                    draggable="false"
                    className="rounded-lg select-none h-24 w-full object-cover"
                    src={asset.preview + '?preset=full'}
                  />
                </div>
              ))}
            </ScrollableContainer>
          )}
        </motion.div>

        {/* Product info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0"
        >
          <div className="">
            <h3 className="sr-only">{t('product.description')}</h3>

            <div
              className="text-base text-gray-700"
              dangerouslySetInnerHTML={{
                __html: product.description,
              }}
            />
          </div>

          {/* Variant selection */}
          {product.variants.length > 1 ? (
            <div className="mt-4">
              <label
                htmlFor="option"
                className="block text-sm font-medium text-gray-700"
              >
                {t('product.selectOption')}
              </label>
              <select
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                id="productVariant"
                value={selectedVariantId}
                name="variantId"
                onChange={(e) => {
                  setSelectedVariantId(e.target.value);
                  const variant = product.variants.find(
                    (v) => v.id === e.target.value,
                  );
                  if (variant) {
                    setFeaturedAsset(variant.featuredAsset);
                  }
                }}
              >
                {product.variants.map((variant) => (
                  <option key={variant.id} value={variant.id}>
                    {variant.name}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <input type="hidden" name="variantId" value={selectedVariantId} />
          )}

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0">
            {/* Button to directly call Phone Number */}
            <a
              href="tel:+41791234567"
              className="max-w-xs flex-1 bg-primary-600 hover:bg-primary-700 transition-colors border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500 sm:w-full"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Call For Price
            </a>

            {/* Contact on WhatsApp Button */}
            <a
              href="https://wa.me/41767979217"
              className="ml-4 py-3 px-3 bg-green-600 hover:bg-green-700 rounded-md flex items-center justify-center text-white"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              <span className="ml-2">Contact On Whatsapp</span>
            </a>
          </div>

          <div className="mt-2 flex items-center space-x-2">
            <span className="text-gray-500">{selectedVariant?.sku}</span>
            <StockLevelLabel stockLevel={selectedVariant?.stockLevel} />
          </div>

          {addItemToOrderError && (
            <div className="mt-4">
              <Alert message={addItemToOrderError} />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export function CatchBoundary() {
  const { t } = useTranslation();

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8">
        {t('product.notFound')}
      </h2>
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start mt-4 md:mt-12">
        <div className="w-full max-w-2xl mx-auto sm:block lg:max-w-none">
          <span className="rounded-md overflow-hidden">
            <div className="w-full h-96 bg-slate-200 rounded-lg flex content-center justify-center">
              <PhotoIcon className="w-48 text-white"></PhotoIcon>
            </div>
          </span>
        </div>

        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <div className="">{t('product.notFoundInfo')}</div>
          <div className="flex-1 space-y-3 py-1">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getAddItemToOrderError(error?: ErrorResult): string | undefined {
  if (!error || !error.errorCode) {
    return undefined;
  }
  switch (error.errorCode) {
    case ErrorCode.OrderModificationError:
    case ErrorCode.OrderLimitError:
    case ErrorCode.NegativeQuantityError:
    case ErrorCode.InsufficientStockError:
      return error.message;
  }
}
