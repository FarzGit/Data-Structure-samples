class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root;
  
      for (const char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
  
      node.isEndOfWord = true;
    }
  
    search(word) {
      let node = this.root;
  
      for (const char of word) {
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
  
      return ;
    }
  
    startsWith(prefix) {
      let node = this.root;
  
      for (const char of prefix) {
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
  
      return true;
    }
    prefixWord(word){
      let node = this.root
      let result = []
      
      for(let i=0; i<word.length; i++){
          const char = word[i]
          if(!node.child[char]){
              return result
          }
          node = node.child[char]
      }
      this.collectWords(node,word,result)
      return result
  }
  
  collectWords(node,currentWord,result){
      if(node.end){
          result.push(currentWord)
      }
      
      for(const char in node.child){
          this.collectWords(node.child[char],currentWord+char,result)
      }
      
  }
  }
  
  // Example usage:
  
  const trie = new Trie();
  trie.insert("apple");
  console.log(trie.search("apple"));   // true
  console.log(trie.search("app"));     // false
  console.log(trie.startsWith("app")); // true
  trie.insert("app");
  console.log(trie.search("app"));     // true
  