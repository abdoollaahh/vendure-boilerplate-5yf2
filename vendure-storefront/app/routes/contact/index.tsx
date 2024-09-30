import { HeaderContact, ItemsContact } from './contacts';
import { json } from '@remix-run/node'; // Ensure you import the correct `json` helper from Remix

// Add this loader to handle the GET request
export const loader = async () => {
  return json({}); // No data needed, just return an empty object
};

export default function ContactPage() {
  return (
    <div>
      <div className="wrapper px-8 md:px-12 py-6 sm:py-12 lg:py-16 flex flex-col gap-6 sm:gap-16">
        <HeaderContact />
        <ItemsContact />
      </div>
    </div>
  );
}
