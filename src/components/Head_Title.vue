<template>
    <div class="head_title">
        <div class="absolute bottom-24 left-24 w-full">
          <h2 class="text-black">Картина нитью из любой фотографии</h2>
          <div class="flex no-wrap gap-8 mt-20 w-full">
            <input type="submit" class="but_buy" value="Купить">
            <input type="submit" class="but_create" value="Создать инструкцию">
          </div>
        </div>
      </div>
</template>

<style scoped>
.head_title {
  background-image: url(../assets/head_title/head_title_back.svg);
  width: 100vw;
  background-position: cover;
  height: 100vh;
}

.but_buy, .but_create {
    width:235px;
  max-width: 250px;
  height: 73px;
  border-radius: 10px;
  font-weight: 700;
}

.but_buy {
  background-color: #FFEA00;
  color: black;
}

.but_create {
  background-color: white;
  color: black;
}

/* Медиазапрос для мобильных устройств */
@media (max-width: 768px) {
  .absolute {
    bottom: 200px; /* Уменьшаем отступ снизу */
    left: 30px; /* Уменьшаем отступ слева */
    width: 90%; /* Увеличиваем ширину на мобильных устройствах */
  }

  h2 {
    font-size: 48px; /* Уменьшаем размер шрифта заголовка */
    text-align: center; /* Центрируем текст заголовка */
  }

  .but_buy, .but_create {
    width: 100%; /* Кнопки занимают всю ширину */
    height: 50px; /* Уменьшаем высоту кнопок */
    margin-bottom: 10px; /* Добавляем отступ между кнопками */
  }
}
</style>