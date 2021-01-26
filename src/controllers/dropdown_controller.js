import {Controller} from "stimulus"
import {leave, toggle} from 'el-transition';

export default class extends Controller {
    static targets = ["menu", "button"]

    handleClickOutside(event) {
        const menuClicked = this.menuTarget.contains(event.target)
        const buttonClicked = this.buttonTarget.contains(event.target)
        const hidden = this.menuTarget.classList.contains('hidden')

        if (!menuClicked && !buttonClicked && !hidden ) {
            leave(this.menuTarget)
        }
    }

    connect() {
        document.addEventListener('click', this.handleClickOutside.bind(this));
    }

    disconnect() {
        document.removeEventListener('click', this.handleClickOutside.bind(this));
    }

    toggleMenu() {
        toggle(this.menuTarget)
    }

    hideMenu(event) {
    const buttonClicked = this.buttonTarget.contains(event.target)

    if (!buttonClicked) {
      leave(this.menuTarget)
    }
  }
}

