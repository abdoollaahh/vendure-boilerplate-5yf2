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
        Pour venir découvrir les véhicules d’occasions ainsi que les véhicules
        neufs pendant le week-end, il est préférable de téléphoner pour prendre
        un rendez-vous avant de vous présenter sur place. Merci pour votre
        compréhension.
      </p>
      <p className="text-base sm:text-lg max-w-2xl">
        Nos horaires de service sont les suivants :
        <br />• Lundi à Jeudi, Dimanche : 7h30 – 12h00 / 13h30 – 18h00 <br />•
        Vendredi : 7h30 – 12h00 / 13h30 – 17h00 <br />• Samedi : Sur rendez-vous
        <br />
        Nous nous efforçons de répondre à toutes les demandes dans un délai de
        24 heures. Merci de choisir Space-Car !
      </p>
    </div>
  );
};

export default HeaderContact;
