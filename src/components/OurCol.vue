<template>
    <div class="our_col">
        <div class="overlay"></div>
        <div class="absolute centered">
          <h2 class="text-white text-center">Наши цифры</h2>
          <div class="flex no-wrap gap-8 mt-20 w-full">
            <div class="flex flex-col w-1/3">
                <div class="border-b-2 text-center text-7xl font-bold number">{{ displayedNumbers[0] }}</div>
                <div><p class="text-white text-center">Столько картин мы уже продали!</p></div>
            </div>
            <div class="flex flex-col w-1/3">
                <div class="border-b-2 text-center text-7xl font-bold number">{{ displayedNumbers[1] }}</div>
                <div><p class="text-white text-center">Сделано инструкций на нашем сайте</p></div>
            </div>
            <div class="flex flex-col w-1/3">
                <div class="border-b-2 text-center text-7xl font-bold number">{{ displayedNumbers[2] }}</div>
                <div><p class="text-white text-center">Оставлено отзывов о нашем товаре</p></div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      targetNumbers: [127, 2173, 63],
      displayedNumbers: [0, 0, 0],
      duration: 2000, // Время анимации в миллисекундах
      interval: 20, // Уменьшаем интервал обновления цифр
    };
  },
  mounted() {
    this.animateNumbers();
  },
  methods: {
    animateNumbers() {
      const totalSteps = this.duration / this.interval;
      const stepValues = this.targetNumbers.map(target => Math.ceil(target / totalSteps));

      const intervalId = setInterval(() => {
        this.displayedNumbers = this.displayedNumbers.map((num, index) => {
          // Генерируем случайное значение для перебора
          const randomIncrement = Math.floor(Math.random() * stepValues[index] + 1);
          const newValue = Math.min(num + randomIncrement, this.targetNumbers[index]);
          return newValue;
        });

        // Проверяем, достигли ли мы целевых значений
        if (this.displayedNumbers.every((num, index) => num >= this.targetNumbers[index])) {
          clearInterval(intervalId);
        }
      }, this.interval);
    },
  },
};
</script>

<style scoped>
.our_col {
  position: relative; /* Устанавливаем позиционирование для родительского элемента */
  background-image: url(../assets/our_col/back_our_col.svg);
  width: 100vw;
  background-position: cover;
  height: 100vh;
  overflow: hidden; /* Прячем все, что выходит за пределы блока */
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Черный цвет с прозрачностью 0.5 для затемнения */
  z-index: 1; /* Устанавливаем z-index, чтобы затемнение было под текстом */
}

.absolute {
  position: absolute; /* Устанавливаем позиционирование для вложенного элемента */
  z-index: 2; /* Устанавливаем z-index, чтобы текст был выше затемнения */
}

.centered {
  top: 50%; /* Устанавливаем верхний отступ в 50% */
  left: 50%; /* Устанавливаем левый отступ в 50% */
  transform: translate(-50%, -50%); /* Смещаем элемент на половину его ширины и высоты */
}

/* Уменьшаем размер цифр на мобильных устройствах */
.number {
  font-size: 7rem; /* Размер шрифта для цифр */
}

@media (max-width: 768px) {
  .number {
    font-size: 4rem; /* Уменьшаем размер шрифта для мобильных устройств */
  }

  .centered {
    bottom: auto; /* Убираем нижний отступ для мобильных устройств */
    left : 50%; /* Устанавливаем левый отступ в 50% */
    transform: translate(-50%, -40%); /* Смещаем элемент на половину его ширины и немного вверх */
    width: 90%; /* Увеличиваем ширину на мобильных устройствах */
  }

  h2 {
    font-size: 24px; /* Уменьшаем размер шрифта заголовка */
    text-align: center; /* Центрируем текст заголовка */
  }
}
</style>