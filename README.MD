1. Why change the data before sending it?

The Useless Facts API sends a lot of extra stuff, like id, source, and links. My client only needs the fact. So I send just the fact.

Benefits:

It is smaller and faster.
It is easy to read and use.
If the other API changes, I only fix my server. The client stays the same.
2. Why send a simple error message?

The real axios error has private details, like internal URLs and settings. I don't want users to see that, because it is unsafe and confusing. So I send a simple message: "Could not fetch fun fact". I still log the real error in my terminal, so I can fix it.

3. How to get a fact in another language?

I would take the language from the URL, like ?language=de. Then I would pass it to the other API. If no language is given, I would use English.

javascript

const language = req.query.language || 'en';

const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random', {
  params: { language: language }
});