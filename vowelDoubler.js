var vowelDoubler = function (array) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let countVowels = 0;
  let totalIndex = 0;
  
  array.forEach((item) => {
    if (vowels.includes(item)) {
      countVowels++;
    }
  });

  totalIndex = array.length + countVowels;

  for (let i = array.length-1; i >= 0; i--) {
    array[totalIndex] = array[i];
    totalIndex--;
    if (vowels.includes(array[i])) {
      array[totalIndex] = array[i];
      totalIndex--;
    }
  }

  return array;
};

var sample = ['w','h','a','t',' ','o','n',' ','e','a','r','t','h',' ','a','r','e',' ','y','o','u',' ','t','a','l','k','i','n','g',' ','a','b','o','u','t','?']
vowelDoubler(sample);