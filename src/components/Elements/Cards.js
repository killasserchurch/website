import styled from 'styled-components'

export const Card = styled.section`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.3);
  transition-duration: 0.3s;
  transition-property: box-shadow;
  display: block;
  background-color: none;
  margin: 1rem 0;

  a:link {
    button {
      margin-left: auto;
      background-color: #6c7ae0;
    }

    section {
      height: 162px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      padding: 0 !important;
      display: block;
      overflow: hidden;
      position: relative;

      div {
        background: rgba(0, 0, 0, 0.54);
        bottom: 0;
        position: absolute;
        width: 100%;
        z-index: 1;

        div {
          padding-bottom: 2.4rem;
          padding-top: 2.4rem;
          align-items: center;
          display: flex;
          padding: 1.6rem;

          h2 {
            font-size: 1.2rem;
            line-height: 1.42857;
            margin: 0;
            white-space: normal;
            font-weight: normal;
          }
        }
      }
    }
  }
`

export const CardTitle = styled.div`
  align-items: center;
  display: flex;
  padding: 1.6rem;

  .card-calendar {
    flex-shrink: 0;
    margin-right: 1.6rem;
    background: #616161;
    color: #f5f5f5;
    border: 1px solid rgba(0, 0, 0, 0.12);
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    text-align: center;
    width: 40px;
    display: inline-block;
    vertical-align: bottom;

    div {
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: center;
      width: 100%;

      i {
        font-size: 24px;
        text-align: center;
        transition-duration: 0.15s;
        transition-property: color;
        user-select: none;
      }
    }
  }

  .pub-date {
    h2 {
      color: #ccc !important;
      font-size: 1.2rem;
    }
  }
`

export const CardContent = styled.section`
  padding-bottom: 24px;
  font-size: 14px;
  padding: 16px;
  color: #000;
`
