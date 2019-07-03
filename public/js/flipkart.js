const search = (btn) => {
    const form = btn.parentNode.parentNode;
    const textbox = form.querySelector('input');
    window.open(`http://localhost:8000/result?product=${textbox.value}`);
}