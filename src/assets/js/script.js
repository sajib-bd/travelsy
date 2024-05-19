const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animation")
        } {
            entry.target.classList.remove("animation")
        }
    })
})