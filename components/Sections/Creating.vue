<template>
  <div class="border-bottom">
    <section class="section section-creating">
      <div class="container">
        <SectionTitle title="Creating Organization" light/>
        <ul class="steps-bar">
          <li class="is-active"><span>Create via your profile page</span></li>
          <li class="is-active"><span>Wait for verification</span></li>
          <li class="is-active"><span>Ready to publish posts</span></li>
        </ul>
      </div>
    </section>

    <section class="section section-adding">
      <div class="container">
        <div class="columns">
          <div class="column">
            <SectionTitle title="Adding Organization Information" bottom-left/>
            <div class="section-body">
              <ul class="todo-list">
                <li>
                  Update your organization's information: <br>
                  <p style="margin-top: 1rem;"><strong>Name</strong></p>
                  <p><strong>Organization logo</strong></p>
                  <p><strong>Description</strong></p>
                </li>
                <li>Add a Google Analytics tracking ID to enable collecting organization statistics.</li>
                <li>Add a description about your organization to let visitors know your history and vision.</li>
                <li>Add technologies which your organization is working on to attract visitors' interest.</li>
              </ul>
            </div>
          </div>

          <div class="column flex-center">
            <div class="column-inner" style="margin-top: 2.4rem;">
              <img src="~/assets/images/preview-01.png">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
  .border-bottom {
    border-bottom: solid 1px #ebebeb;
  }
  .section-creating {
    background: #1983f4;
    overflow-x: hidden;
    .steps-bar {
      display: flex;
      margin-top: 4rem;
      margin-bottom: 2rem;
      @media screen and (max-width: 599px) {
        flex-direction: column;
      }
      li {
        display: flex;
        flex: 1;
        flex-direction: column;
        color: #ffffff;
        font-size: 1.25rem;
        font-weight: 600;
        text-align: center;
        position: relative;
        @media screen and (max-width: 599px) {
          flex-direction: row;
          align-items: center;
          span {
            margin-left: 1rem;
            width: calc(100% - 120px);
          }
        }
        &:before {
          align-self: center;
          background-position: center !important;
          background-size: contain !important;
          content: '';
          display: inline-block;
          z-index: 20;
          @media screen and (max-width: 599px) {
            width: 120px;
            height: 159px;
          }
          @media screen and (min-width: 600px) and (max-width: 899px) {
            width: 150px;
            height: 159px;
          }
          @media screen and (min-width: 900px) {
            width: 231px;
            height: 246px;
          }
        }
        &:not(:last-child):after {
          content: '';
          height: 15px;
          width: 100%;
          background: #5be0e0;
          position: absolute;
          top: 40%;
          left: 50%;
          z-index: 10;
          @media screen and (max-width: 599px) {
            height: 100%;
            width: 15px;
            left: 55px;
            top: 50%;
          }
          @media screen and (min-width: 600px) and (max-width: 899px) {
            top: 75px;
          }
          @media screen and (min-width: 900px) {
            top: 116px;
          }
        }
        &:first-child:before {
          background: url(~assets/icons/step-01.png) no-repeat;
        }
        &:nth-child(2):before {
          background: url(~assets/icons/step-02.png) no-repeat;
        }
        &:nth-child(3):before {
          background: url(~assets/icons/step-03.png) no-repeat;
        }
      }
    }
  }
  .section-adding {
    .todo-list {
      li {
        + li {
          margin-top: 1.25rem;
        }
        p {
          line-height: 2;
          margin-left: 1rem;
        }
      }
      li:before {
        display: inline-block;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        content: '';
        width: 1rem;
        height: 1rem;
        background: #5be0e0;
        position: relative;
        top: 2px;
        margin-right: 0.3rem;
      }
    }
  }
</style>
