// https://sv443.net/jokeapi/v2/

enum JokeType {
  Single = 'single',
  Twopart = 'twopart',
}

interface Joke {
  id: number;
  lang: string;
  safe: boolean;
  error: boolean;
  category: string;
  type: JokeType;
  joke: string;
  delivery: string;
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  };
}