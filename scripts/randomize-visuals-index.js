const randColDividerText = () =>
{
  const alfa = 'abcdefghijklmnopqrstuvwxyz';

  return `<div class="line-text">${randInt(0,9)}${alfa[randInt(0, alfa.length-1)]}${alfa[randInt(0, alfa.length-1)]}</div>`;
};

const mainColDividerLines = document.querySelectorAll('.main-col-divider > .lines');
const mainColDividerHeight = 150;
for (const mcdl of mainColDividerLines)
{
  for (let i = 0; i < mainColDividerHeight; i += 3)
  {
    const width = randInt(3, 21);
    const lineText = width > 10 ? randColDividerText() : '';

    mcdl.insertAdjacentHTML('beforeend', `<div class="line" style="width: ${width}px">${lineText}</div>`);
  }
}

