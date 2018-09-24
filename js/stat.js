'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {

  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP / 2, GAP - 10);
  ctx.fillText('Список результатов:', CLOUD_X + GAP / 2, GAP + 10);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - 15);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime - 45);
    ctx.fillStyle = (names[i] !== 'Вы' ? 'rgba(0, 0, Math.floor(Math.random() * 225), 1)' : 'rgba(255, 0, 0, 1)');
    ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - 35, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
  }

};
