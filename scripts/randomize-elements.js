const nBoxes = 63;
const randBoxBox = [];
for (let i = 0; i < nBoxes; ++i)
{
  randBoxBox.push( i % 2 );
}
shuffleArray(randBoxBox);

const viewBoxes = document.getElementById('boxes');
const boxPluses =
`<div class="box-pluses">
  <div class="box-plus bp0"></div>
  <div class="box-plus bp1"></div>
  <div class="box-plus bp2"></div>
  <div class="box-plus bp3"></div>
</div>
`;

const boxBackgrounds =
[
  `<div class="box-backgrounds">
  <div class="box-background box-bg0-a"></div>
</div>`,
  `<div class="box-backgrounds">
  <div class="box-background box-bg0-b"></div>
</div>`,
  `<div class="box-backgrounds">
  <div class="box-background box-bg0-c"></div>
</div>`,
  `<div class="box-backgrounds">
  <div class="box-background box-bg0-d"></div>
</div>`,
  `<div class="box-backgrounds">
  <div class="box-background box-bg0-e"></div>
</div>`,
  `<div class="box-backgrounds">
  <div class="box-background box-bg0-f"></div>
</div>`,
  `<div class="box-backgrounds">
  <div class="box-background box-bg0-g"></div>
</div>`,
];
const randBoxBackgrounds = [];
for (let i = 0; i < nBoxes; ++i)
{
  randBoxBackgrounds.push( i % boxBackgrounds.length );
}
shuffleArray(randBoxBackgrounds);

const randBoxBackgroundsMid = [];
const nRandBoxBackgroundsMid = randInt(2, 12);
for (let i = 0; i < nBoxes; ++i)
{
  randBoxBackgroundsMid.push( i % nRandBoxBackgroundsMid );
}
shuffleArray(randBoxBackgroundsMid);


for (let i = 0; i < nBoxes; ++i)
{
  const alpha = randInt(5, 25);
  const a = alpha < 10 ? `0${alpha}` : `${alpha}`;
  const boxBox = randBoxBox[i] ? 'box-box' : '';
  const boxMid = randBoxBackgroundsMid[i] === 0 ? '<div class="box-backgroundb"><div class="box-mid"></div></div>' : '';

  viewBoxes.insertAdjacentHTML('beforeend',
    `<div class="box ${boxBox}" style="background-color: rgba(149,152,157,.${a})">
${boxPluses}
${boxBackgrounds[ randBoxBackgrounds[i] ]}
${boxMid}
</div>`);
}





const viewBackgroundLines = document.querySelectorAll('.background-lines > div.background-line');
const offsetsBackgroundLines = [ 15, 34, 53, 54, 57, 76, 95 ];
for (let i = 0; i < viewBackgroundLines.length; ++i)
{
  const nLines = 7;
  const preDiffValue = randInt(0, 2 * nLines);
  const diffValue = preDiffValue <= nLines ? -preDiffValue : preDiffValue % nLines;
  let tempOffsetValue =  offsetsBackgroundLines[i % nLines] + diffValue;
  let offsetValue = tempOffsetValue < 7 ? 7 : tempOffsetValue;
  offsetValue = tempOffsetValue > 92 ? 92 : tempOffsetValue;

  if (i < nLines)
  {
    viewBackgroundLines[i].style.left = `${ offsetValue }%`;
  }
  else
  {
    viewBackgroundLines[i].style.top = `${ offsetValue }%`;
  }
}