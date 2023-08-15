function getNodes() {
  const langSwitcherClose = document.querySelector('#js-lang-switcher-close');
  const langSwitcherTrigger = document.querySelector('#lang-switcher-trigger');

  return {
    langSwitcherClose,
    langSwitcherTrigger,
  };
}

function onClose(switcherTrigger) {
  if (switcherTrigger.checked) switcherTrigger.checked = false;
}

function setHandlers(nodes = {}) {
  const { langSwitcherClose, langSwitcherTrigger } = nodes;
  if (langSwitcherClose && langSwitcherTrigger) {
    langSwitcherClose.addEventListener('click', () =>
      onClose(langSwitcherTrigger)
    );
  }
}

function init() {
  const nodes = getNodes();
  setHandlers(nodes);
}

init();
