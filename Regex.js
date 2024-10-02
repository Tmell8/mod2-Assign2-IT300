// This function FindCount returns the number of matches of searchstr found in target.

function FindCount(target, searchstr) {
  const regex = new RegExp(searchstr, 'g');
  const matches = target.match(regex);
  return matches ? matches.length : 0;
}

// FindReplace function Replaces all occurrences of find in target with replacements.

function FindReplace(target, find, replacement) {
  const regex = new RegExp(find, 'g');
  return target.replace(regex, replacement);
}
//ReplaceDouble function Replaces all double occurrences of a word in the target with a single occurrence.

function ReplaceDouble(target, replacement) {
  const regex = /\b(\w+)\s+\1\b/g;
  return target.replace(regex, replacement);
}

// StartCap  function  Makes the first character of every sentence a capital letter.

function StartCap(target) {
  const regex = /(?:^|\.\s+)([a-z])/g;
  return target.replace(regex, (match, p1) => match.replace(p1, p1.toUpperCase()));
}

//RemoveExtraSpaces Removes extra spaces between words.
function RemoveExtraSpaces(target) {
  const regex = /\s+/g;
  return target.trim().replace(regex, ' ');
}function RemoveExtraSpaces(target) {
  const regex = /\s+/g;
  return target.trim().replace(regex, ' ');
}