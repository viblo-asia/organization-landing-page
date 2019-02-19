<template>
  <section class="section section-publishing">
    <div class="container">
      <SectionTitle :title="$t('main_menu.managing')"/>

      <div class="columns">
        <div class="column flex-center">
          <div class="column-inner">
            <SectionTitle class="pt-0" :title="$t('managing.titles.adding_collaborators')" bottom-left/>
            <div class="section-body mt-1">
              <p>
                <strong>{{$t('managing.contents.two_roles')}}</strong>
              </p>
              <ul>
                <li><strong>{{$t('managing.contents.writer')}}:</strong> {{$t('managing.contents.writer_explain')}}</li>
                <li><strong>{{$t('managing.contents.editor')}}:</strong> {{$t('managing.contents.editor_explain')}}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="column-inner wow slideInRight fast">
            <img src="~/assets/images/preview-05.jpg">
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="column-inner wow slideInLeft fast">
            <img src="~/assets/images/preview-02.png">
          </div>
        </div>
        <div class="column">
          <SectionTitle class="pt-0" :title="$t('managing.titles.submit_by_writers')" bottom-left/>
          <div class="section-body mt-1">
            <p>{{$t('managing.contents.will_be_reviewed')}}</p>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column flex-center">
          <div class="column-inner">
            <SectionTitle class="pt-0" :title="$t('managing.titles.publishing_posts')" bottom-left/>
            <div class="section-body mt-1">
              <p>{{$t('managing.contents.published_in_organization')}}</p>
              <ul class="mt-1">
                <li>- {{$t('managing.contents.shown_in_both')}}</li>
                <li>- {{$t('managing.contents.credited_as_post_appears')}}</li>
                <li>- {{$t('managing.contents.ga_tracking')}}</li>
                <li>- {{$t('managing.contents.edit_post')}}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="column-inner wow slideInRight fast">
            <img src="~/assets/images/preview-03.png">
          </div>
        </div>
      </div>

      <CreateNowButton :text="$t('button.create_now')" class="mt-4 mb-4"/>
    </div>
  </section>
</template>
