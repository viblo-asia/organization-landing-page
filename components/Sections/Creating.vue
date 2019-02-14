<template>
  <section class="section section-creating">
    <div class="container">
      <SectionTitle :title="$t('main_menu.creating')" class="wow bounce" data-wow-delay="0.2s" light/>

      <ul class="steps-bar">
        <li class="wow bounce" data-wow-delay="1s"><span>{{$t('creating.steps.1')}}</span></li>
        <li class="wow bounce" data-wow-delay="2s"><span>{{$t('creating.steps.2')}}</span></li>
        <li class="wow bounce" data-wow-delay="3s"><span>{{$t('creating.steps.3')}}</span></li>
      </ul>
    </div>
  </section>
</template>
