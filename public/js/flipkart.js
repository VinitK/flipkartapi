const search = (btn) => {
    const form = btn.parentNode.parentNode;
    const textbox = form.querySelector('input');
    window.open(`/result?product=${textbox.value}`);
}