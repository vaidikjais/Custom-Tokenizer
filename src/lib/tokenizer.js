import { commonWords } from './vocabulary.js';

class CustomTokenizer {
  constructor() {
    this.stoi = {}; // string-to-integer
    this.itos = {}; // integer-to-string
    this.vocab = new Set();
    
    // 1. Add special tokens first
    const specialTokens = ['<PAD>', '<UNK>', '<BOS>', '<EOS>'];
    specialTokens.forEach(token => this.addToken(token));

    // 2. Add common words from our custom vocabulary
    commonWords.forEach(word => this.addToken(word));

    // 3. Add all individual characters for fallback
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ \n";
    characters.split('').forEach(char => this.addToken(char));
  }

  addToken(token) {
    if (!this.vocab.has(token)) {
      const index = this.vocab.size;
      this.vocab.add(token);
      this.stoi[token] = index;
      this.itos[index] = token;
    }
  }

  encode(text) {
    const tokens = [];
    // Regex to split by words, numbers, spaces, or single punctuation characters
    const regex = /(\w+)|(\s+)|([^\w\s])/g;
    const parts = text.match(regex) || [];

    for (const part of parts) {
      const lowerPart = part.toLowerCase();
      if (this.vocab.has(lowerPart)) {
        // If it's a known word or a single character, add its ID
        tokens.push(this.stoi[lowerPart]);
      } else {
        // If it's an unknown word, fall back to character-by-character encoding
        for (const char of part) {
          tokens.push(this.stoi[char.toLowerCase()] ?? this.stoi['<UNK>']);
        }
      }
    }
    return tokens;
  }

  decode(ids) {
    return ids.map(id => this.itos[id] ?? '').join('');
  }
  
  // A helper to get the token strings, not just IDs
  getTokens(text) {
    const tokens = [];
    const regex = /(\w+)|(\s+)|([^\w\s])/g;
    const parts = text.match(regex) || [];

    for (const part of parts) {
      const lowerPart = part.toLowerCase();
      if (this.vocab.has(lowerPart)) {
        tokens.push(lowerPart);
      } else {
        tokens.push(...part.toLowerCase().split(''));
      }
    }
    return tokens;
  }
}

export default CustomTokenizer;