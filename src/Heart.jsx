import styled from 'styled-components';

const Checkbox = ({liked}) => {
  return (
    <StyledWrapper>
      <label className="ui-like">
        <input type="checkbox" checked={liked} />
        <div className="like">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill><g strokeWidth={0} id="SVGRepo_bgCarrier" /><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" /><g id="SVGRepo_iconCarrier"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z" /></g></svg>
        </div>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .ui-like {
    --icon-size: 40px;
    --icon-secondary-color: rgb(211, 205, 205);
    --icon-hover-color: rgb(240, 115, 115);
    --icon-primary-color: rgb(230, 26, 26);
    --icon-circle-border: 1px solid var(--icon-primary-color);
    --icon-circle-size: 45px;
    --icon-anmt-duration: 0.5s;
  }

  .ui-like input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: none;
  }

  .ui-like .like {
    width: var(--icon-size);
    height: auto;
    fill: var(--icon-secondary-color);
    cursor: pointer;
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    -webkit-transform-origin: top;
    -ms-transform-origin: top;
    transform-origin: top;
  }

  .like::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    -webkit-box-shadow: 0 30px 0 -4px var(--icon-primary-color),
      30px 0 0 -4px var(--icon-primary-color),
      0 -30px 0 -4px var(--icon-primary-color),
      -30px 0 0 -4px var(--icon-primary-color),
      -22px 22px 0 -4px var(--icon-primary-color),
      -22px -22px 0 -4px var(--icon-primary-color),
      22px -22px 0 -4px var(--icon-primary-color),
      22px 22px 0 -4px var(--icon-primary-color);
    box-shadow: 0 30px 0 -4px var(--icon-primary-color),
      30px 0 0 -4px var(--icon-primary-color),
      0 -30px 0 -4px var(--icon-primary-color),
      -30px 0 0 -4px var(--icon-primary-color),
      -22px 22px 0 -4px var(--icon-primary-color),
      -22px -22px 0 -4px var(--icon-primary-color),
      22px -22px 0 -4px var(--icon-primary-color),
      22px 22px 0 -4px var(--icon-primary-color);
    border-radius: 50%;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
  }

  .like::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    border: var(--icon-circle-border);
    opacity: 0;
  }

  /* actions */

  .ui-like:hover .like {
    fill: var(--icon-hover-color);
  }

  .ui-like input:checked + .like::after {
    -webkit-animation: circles var(--icon-anmt-duration)
      cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    animation: circles var(--icon-anmt-duration)
      cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    -webkit-animation-delay: var(--icon-anmt-duration);
    animation-delay: var(--icon-anmt-duration);
  }

  .ui-like input:checked + .like {
    fill: var(--icon-primary-color);
    -webkit-animation: like var(--icon-anmt-duration) forwards;
    animation: like var(--icon-anmt-duration) forwards;
    -webkit-transition-delay: 0.3s;
    -o-transition-delay: 0.3s;
    transition-delay: 0.3s;
  }

  .ui-like input:checked + .like::before {
    -webkit-animation: circle var(--icon-anmt-duration)
      cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    animation: circle var(--icon-anmt-duration)
      cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    -webkit-animation-delay: var(--icon-anmt-duration);
    animation-delay: var(--icon-anmt-duration);
  }

  @-webkit-keyframes like {
    50% {
      -webkit-transform: scaleY(0.6);
      transform: scaleY(0.6);
    }

    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
    }
  }

  @keyframes like {
    50% {
      -webkit-transform: scaleY(0.6);
      transform: scaleY(0.6);
    }

    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
    }
  }

  @-webkit-keyframes circle {
    from {
      width: 0;
      height: 0;
      opacity: 0;
    }

    90% {
      width: var(--icon-circle-size);
      height: var(--icon-circle-size);
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  @keyframes circle {
    from {
      width: 0;
      height: 0;
      opacity: 0;
    }

    90% {
      width: var(--icon-circle-size);
      height: var(--icon-circle-size);
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  @-webkit-keyframes circles {
    from {
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    40% {
      opacity: 1;
    }

    to {
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
      opacity: 0;
    }
  }

  @keyframes circles {
    from {
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    40% {
      opacity: 1;
    }

    to {
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
      opacity: 0;
    }
  }`;

export default Checkbox;
