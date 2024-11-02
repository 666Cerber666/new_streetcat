<template>
  <Header />
  <div class="flex items-center w-full">
    <HeadTitle id="headtitle" />
    <What id="what" />
    <HowWork id="how" />
    <OurPartners id="partners" />
    <Variants id="variants" />
    <FeedBack id="feedback" />
    <OurCol id="ourcol" />
    <WhyMe id="whyme" />
  </div>
  <Footer id="faq" />
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import HeadTitle from '../components/Head_Title.vue';
import HowWork from '../components/HowIsWork.vue';
import OurPartners from '../components/OurPartners.vue';
import FeedBack from '../components/FeedBack.vue';
import Variants from '../components/VariantsPicture.vue';
import OurCol from '../components/OurCol.vue';
import WhyMe from '../components/WhyMe.vue';
import What from '../components/WhatIsIt.vue';
import Footer from '../components/Footer.vue';
</script>