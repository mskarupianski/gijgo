﻿/** 
  * @widget Dialog 
  * @plugin Foundation
  */
gj.dialog.plugins.foundation = {
    config: {
        style: {
            modal: 'reveal-modal-bg',
            content: 'reveal-modal gj-dialog-fd-content',
            header: '',
            headerTitle: 'gj-dialog-fd-title gj-unselectable',
            headerCloseButton: 'close-reveal-modal right gj-dialog-fd-close',
            body: 'gj-dialog-fd-body',
            footer: 'gj-dialog-footer gj-dialog-fd-footer'
        }
    },

    'configure': function ($dialog) {
        if ($dialog.data('uiLibrary') === 'foundation') {
            $dialog.data('style', gj.dialog.plugins.foundation.config.style);
        }
    }
};