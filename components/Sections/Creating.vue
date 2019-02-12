<template>
  <div class="border-bottom">
    <section class="section section-creating">
      <div class="container">
        <SectionTitle title="Creating Organization" light/>
        <ul class="steps-bar">
          <li class="is-active">Create via your profile page</li>
          <li class="is-active">Wait for verification</li>
          <li class="is-active">Ready to publish posts</li>
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
      li {
        display: flex;
        flex: 1;
        flex-direction: column;
        color: #ffffff;
        font-size: 1.25rem;
        font-weight: 600;
        text-align: center;
        position: relative;
        &:before {
          align-self: center;
          z-index: 20;
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
        }
        &:first-child:before {
          content: url(~assets/icons/step-01.png);
        }
        &:nth-child(2):before {
          content: url(~assets/icons/step-02.png);
        }
        &:nth-child(3):before {
          content: url(~assets/icons/step-03.png);
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
