function CountryCard({ key, country }) {
  const {
    flags,
    name,
    population,
    region,
    capital,
  } = country;

  return (
    <article className="country-card" key={key}>
      <img
        className="country-card__flag"
        src={flags.svg}
        alt={`Flag of ${name.common}`}
      />

      <div className="country-card__content">
        <h2 className="country-card__name">
          {name.common}
        </h2>

        <p>
          <strong>Population:</strong>{" "}
          {population.toLocaleString()}
        </p>

        <p>
          <strong>Region:</strong> {region}
        </p>

        <p>
          <strong>Capital:</strong> {capital?.[0] ?? "N/A"}
        </p>
      </div>
    </article>
  );
}

export default CountryCard;
