import secrets from '../../.secrets';

export const fetchRatings = async (movieTitle, releaseYear) => {
  const queryStrings = new URLSearchParams([
    ['type', 'movie'],
    ['t', movieTitle],
    ['y', releaseYear],
    ['apikey', secrets.omdbApiKey],
  ]);

  const response = await fetch(`https://www.omdbapi.com?${queryStrings.toString()}`);
  const data = await response.json();

  return data.Ratings.map((rating) => ({
    source: rating.Source,
    value: rating.Value,
  }));
};
