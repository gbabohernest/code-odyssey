const checkBtn = document.getElementById('check-btn');

const inputEle = document.getElementById('text-input');

const result = document.getElementById('result');

const compare = (strArr) => {
  let lastChar = strArr.length - 1;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== strArr[lastChar]) {
      return false;
    }
    lastChar--;
  }
  return true;
};

const handlePalindromeCheck = () => {
  const value = inputEle.value.trim();

  if (!value) {
    alert('Please input a value.');
    return;
  }

  const sanitize = value.replace(/[^a-z0-9]/gi, '').toLowerCase();

  const strArr = sanitize.split('');
  const isPalindrome = compare(strArr);
  inputEle.value = '';

  if (isPalindrome) {
    result.innerText = `${value} is a palindrome.`;
  } else {
    result.innerText = `${value} is not a palindrome.`;
  }

  result.style.display = 'block';
  result.scrollIntoView({ behavior: 'smooth' });
};

checkBtn.addEventListener('click', handlePalindromeCheck);
