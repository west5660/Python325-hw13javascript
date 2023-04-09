//1
  $('#but1').click(function() { // назначаем обработчик клика на кнопку "Рассчитать"
    let dist = $('#inp1').val() // получаем значение расстояния из поля ввода и преобразуем его в число
    let time = $('#inp2').val() // получаем значение времени из поля ввода и преобразуем его в число
    let result = $('#result') // получаем элемент для вывода результата
    if (!dist || !time) { // проверяем, что оба поля были заполнены
      result.text('Пожалуйста, введите расстояние и время в числовом формате'); // выводим сообщение об ошибке, если хотя бы одно поле не заполнено
      return;
    }

    let speed = dist / time; // вычисляем скорость
    $('#result').html(`Необходимо двигаться со скоростью ${speed} км/ч`); // выводим результат с округлением до двух знаков после запятой
  });
$(document).ready(function() {
  $("#div1").hide();
  $("#but5").click(function() {
  $("#div1").show(1000);
  });
   $("#but5").click(function(){
    var div = $("#div1");
    div.animate({height: '400px', opacity: '0.4'}, "slow");
    div.animate({width: '900px', opacity: '1'}, "slow");
      });
});
$(document).ready(function(){
  $("#but6").click(function(){
    $("#div1").slideToggle("slow");
  });
});

//2
$(document).ready(function() {
      $('#but11').click(function() {
        var money = Number($('#inp11').val());
        var price = Number($('#inp22').val());
        var num_chocolates = Math.floor(money / price);
        var change = money - num_chocolates * price;
        var res = $('#result11')
         if (!money || !price) { // проверяем, что оба поля были заполнены
      res.text('Пожалуйста, введите цену и количество денег в числовом формате'); // выводим сообщение об ошибке, если хотя бы одно поле не заполнено
      return;
    }
        $('#result11').html('Вы можете купить ' + num_chocolates + ' шоколадок. У вас останется ' + change + ' руб.');
      });
    });

$(document).ready(function() {
  $("#div2").hide();
  $("#but55").click(function() {
  $("#div2").show(1000);
  });
   $("#but55").click(function(){
    var div = $("#div2");
    div.animate({height: '400px', opacity: '0.4'}, "slow");
    div.animate({width: '900px', opacity: '1'}, "slow");
      });
});
$(document).ready(function(){
  $("#but66").click(function(){
    $("#div2").slideToggle("slow");
  });
});

//3
$(document).ready(function() {
      $('#but3').click(function() {
        const a1 = 0.85; // Курс доллара к евро
        let dollars = $('#inp3').val(); // Получаем значение из поля ввода
        let euros = dollars * a1; // Рассчитываем количество евро
        $('#result1').text(euros.toFixed(2) + ' €'); // Выводим результат
     });
    });

$(document).ready(function() {
  $("#div3").hide();
  $("#but555").click(function() {
  $("#div3").show(1000);
  });
   $("#but555").click(function(){
    var div = $("#div3");
    div.animate({height: '400px', opacity: '0.4'}, "slow");
    div.animate({width: '900px', opacity: '1'}, "slow");
      });
});
$(document).ready(function(){
  $("#but666").click(function(){
    $("#div3").slideToggle("slow");
  });
});

//game старт !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


  $(document).ready(function() {
      $("#butgame5").click(function () {
          comp = Math.floor(Math.random() * 9) + 10;
          var message = "Выпавшие числа ПК: " + comp;
          $("#divgame11").text(message);
      });
const button = document.getElementById('butgame5');
const images = [document.getElementById('img1'), document.getElementById('img2'), document.getElementById('img3')];

button.addEventListener('click', () => {
  images.forEach(image => {
    image.style.animation = 'spin 1s linear';
    setTimeout(() => {
      image.style.animation = '';
    }, 1000);
  });
});
  })

function generateRandomNumbers() {
  const randomNumbers = [];
  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    randomNumbers.push(randomNumber);

  }
  return randomNumbers;
}
// получаем кнопку "Бросить кубики"
const rollButton = $('#butgame');

// добавляем обработчик клика на кнопку "Бросить кубики"
rollButton.on('click', function() {

  // генерируем 3 случайных числа
  const randomNumbers = generateRandomNumbers();
  sum = randomNumbers[0]+randomNumbers[1]+randomNumbers[2]
  // выводим каждое число на экран в соответствующий div
  $('#divgame111').text(randomNumbers[0]);
  $('#divgame112').text(randomNumbers[1]);
  $('#divgame113').text(randomNumbers[2]);
  $('#divgame114').text('Выпавшие ваши числа ' + sum)
});
// обработка кнопок переброса 1 2 3
const rerollButtons = [
  $('#butgame1'),
  $('#butgame2'),
  $('#butgame3')
];

// добавляем обработчик клика на каждую кнопку переброса
rerollButtons.forEach((rerollButton, index) => {
  rerollButton.on('click', function() {
    // генерируем новое случайное число для соответствующего кубика
    const newRandomNumber = Math.floor(Math.random() * 6) + 1;

    // выводим новое число на экран в соответствующий div
    $(`#divgame11${index + 1}`).text(newRandomNumber);

    // пересчитываем сумму чисел
    let sum = 0;
    for (let i = 1; i <= 3; i++) {
      sum += Number($(`#divgame11${i}`).text());
    }
    $('#divgame114').text('Выпавшие ваши числа ' + sum)
  });
});
//Проверка кто победил
rollButton.on('click', function() {
  // определяем победителя
  if (sum > comp) {
    $('#divgame2').text('Вы победили!');
  } else if (sum < comp) {
    $('#divgame2').text('Компьютер победил!');
  } else {
    $('#divgame2').text('Ничья!');
  }
});