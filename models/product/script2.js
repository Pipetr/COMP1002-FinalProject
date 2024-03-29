const toggle_btn= document.querySelector('.toggle_button')
        const toggle_btn_icon= document.querySelector('.toggle_button i')
        const dropdown= document.querySelector('.drop_down')

        toggle_btn.onclick = function() {
            dropdown.classList.toggle('open')
            const isOpen = dropdown.classList.contains('open')

            toggle_btn_icon.classList = isOpen
                ? "fa-solid fa-xmark"
                : "fa-solid fa-bars"
        }