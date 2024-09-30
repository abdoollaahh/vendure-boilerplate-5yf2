const HeaderContact = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-8">
      <h1 className="text-3xl lg:text-5xl font-semibold text-center text-blue-600">
        Contact us
      </h1>
      <h2 className="text-xl text-justify sm:text-center font-light">
        Space-Car
      </h2>
      <p className="text-base sm:text-lg text-left">
        We are here to assist you with any questions or concerns you may have
        about our services. Whether you need help with booking, have inquiries
        about our fleet, or need support with your existing reservations, our
        team is ready to help. Reach out to us through the contact form below,
        or give us a call at our customer service number. We look forward to
        hearing from you!
      </p>
      <p className="text-base sm:text-lg max-w-2xl">
        Our customer service hours are Monday to Friday, 9 AM to 6 PM. We strive
        to respond to all inquiries within 24 hours. Thank you for choosing
        Space-Car!
      </p>
    </div>
  );
};

export default HeaderContact;
