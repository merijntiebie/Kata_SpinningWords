# Kata description:

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

# Atomic behaviors
- Split words
"Hey fellow warriors" -> ["Hey", "fellow", "warriors"]
" " -> ["", ""]
- Find out if the word is 5 or more characters long
 ✔ "Hey" -> false
 ✔ "Fellow" -> true
 ✔ "Fello" -> true
 ✔ "" -> false

- Reverse the letters in a word
✔"fellow" -> "wollef"

End-to-End:
🎈- "Hey fellow warriors" => "Hey wollef sroirraw"
- "This is a test" => "This is a test"