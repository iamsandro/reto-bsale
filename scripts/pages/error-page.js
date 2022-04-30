function render() {
  return `
    <div class="message-error">
      <h1>we are having problems with our service, please reload the page or try again later.</h1>
      <img src="./assets/icons/working.svg" alt="icon-working" class="icon-working"/>
    </div>
  `;
}

function ErrorPage() {
  return {
    toString() {
      return render();
    },
  };
}

export default ErrorPage;
