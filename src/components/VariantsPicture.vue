<template>
    <div class="variants_pictures flex flex-col justify-center items-center mt-10 p-8 w-full">
        <h2 class="w-full text-center">Варианты картин</h2>
        <span class="text-black px-16 text-lg text-center w-full">Выберите формат, который вам по душе: компактные и большие варианты, самосборные наборы или готовые картины.</span>

        <div class="flex flex-col md:flex-row items-center no-wrap gap-4 w-full">
            <div class="flex flex-col items-center w-full md:w-1/2 mt-10 gap-8">
                <img src="../assets/variants_pictures/picture.svg">
                <input class="but_buy" value="Купить">
            </div>

            <div class="flex flex-col w-full md:w-1/4 gap-4 mt-10">
                <div class="flex flex-col"><h4>Размерная сетка</h4><p>Наши картины доступны в трёх размерах: компактные (35 на 35), средние (40 на 40) или крупные (50 на 50) — выберите то, что подходит вам лучше всего</p></div>
                <div class="flex flex-col"><h4>Виды картин</h4><p>У нас есть как готовые к сборке наборы, так и самосборные, где вам предстоит самостоятельно вбить гвоздики в основу. Этот вариант идеально подойдёт для тех, кто хочет погрузиться в процесс творчества.</p></div>
                <div class="flex flex-col"><h4>Комплектация</h4><p>Набор поставляется в картонной коробке и включает всё необходимое: основу с гвоздями (в самосборном наборе гвозди идут отдельно), подставку для картины, катушку с нитями, держатель для нитей, подставку под телефон и подробную инструкцию.</p></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.variants_pictures{
    background: #EEEEEE;
}

h4{
    font-weight: 600;
}

.but_buy {
    width:235px;
  max-width: 250px;
  height: 73px;
  border-radius: 10px;
  font-weight: 700;
  text-align: center;
}

.but_buy {
  background-color: #FFEA00;
  color: black;
}

@media (max-width: 768px) {
    h2{
        font-size:32px;
    }
}

</style>