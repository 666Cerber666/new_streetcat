<template>
  <header class="fixed-header">
    <div class="flex items-center justify-center h-full gap-6 flex-wrap px-2">
      <div class="nav_link px-2 text-center" @click="scrollToSection('what')">что это</div>
      <div class="nav_link px-2 text-center" @click="scrollToSection('partners')">маркетплейсы</div>
      <div class="nav_link px-2 text-center" @click="scrollToSection('variants')">варианты</div>
      <div class="nav_link px-2 text-center" @click="scrollToSection('feedback')">отзывы</div>
      <div class="nav_link px-2 text-center" @click="scrollToSection('faq')">ответы на вопросы</div>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.fixed-header {
  position: fixed; /* Фиксируем заголовок */
  top: 0; /* Располагаем его в верхней части экрана */
  left: 0; /* Выравниваем по левому краю */
  right: 0; /* Выравниваем по правому краю */
  z-index: 1000; /* Устанавливаем высокий z-index, чтобы заголовок был над другими элементами */
  background-color: black; /* Задаем фон, чтобы заголовок был виден */
}

.nav_link {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: Roboto;
  font-size: 18px; /* Стандартный размер шрифта */
  font-weight: 700;
  text-align: center;
  transition: color 0.3s ease, background-color 0.3s ease;
  min-width: 50px;
  max-width: 100%;
}

.nav_link:hover {
  cursor: pointer;
  color: yellow;
  background-color: rgba(145, 145, 145, 0.74);
}

/* Медиазапрос для мобильных устройств */
@media (max-width: 768px) {
  .nav_link {
    font-size: 16px; /* Уменьшаем размер шрифта для мобильных устройств */
    padding: 8px; /* Уменьшаем отступы для мобильных устройств */
  }
}
</style>