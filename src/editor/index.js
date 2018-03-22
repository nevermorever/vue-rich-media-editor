import VueRichMediaEditor from "./vue-rich-media-editor"

const rmeditor = {
    install (Vue, options) {
        Vue.component(VueRichMediaEditor.name, VueRichMediaEditor)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(paykeyboard);
}

export default rmeditor 
