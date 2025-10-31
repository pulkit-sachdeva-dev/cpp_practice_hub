// Syntax Highlighting Integration for C++ Practice Hub
// This script ensures all code blocks have proper syntax highlighting

(function() {
    'use strict';

    /**
     * Apply syntax highlighting to code blocks in the modal
     */
    function applySyntaxHighlighting() {
        // Find all code blocks in pre tags
        const codeBlocks = document.querySelectorAll('pre code');
        
        codeBlocks.forEach(block => {
            // Add language class if not present
            if (!block.className || block.className.trim() === '') {
                block.className = 'language-cpp';
            } else if (!block.className.includes('language-')) {
                block.className = 'language-cpp ' + block.className;
            }
            
            // Highlight the code block
            if (typeof Prism !== 'undefined') {
                Prism.highlightElement(block);
            }
        });
    }

    /**
     * Initialize syntax highlighting on page load
     */
    function initSyntaxHighlighting() {
        if (typeof Prism !== 'undefined') {
            // Set manual mode to prevent auto-highlighting
            Prism.manual = true;
            
            // Apply highlighting after page load
            applySyntaxHighlighting();
        }
    }

    /**
     * Observer to watch for dynamically added code blocks (in modals)
     */
    function setupMutationObserver() {
        const observer = new MutationObserver((mutations) => {
            let shouldHighlight = false;
            
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) { // Element node
                            // Check if the added node contains code blocks
                            if (node.querySelector && (
                                node.querySelector('pre code') ||
                                node.tagName === 'CODE' ||
                                node.tagName === 'PRE'
                            )) {
                                shouldHighlight = true;
                            }
                        }
                    });
                }
            });
            
            if (shouldHighlight) {
                setTimeout(applySyntaxHighlighting, 100);
            }
        });

        // Observe the entire document for changes
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    /**
     * Enhance the existing openModal function to apply syntax highlighting
     */
    function enhanceModalFunctions() {
        // Store original openModal if it exists
        if (typeof window.openModal === 'function') {
            const originalOpenModal = window.openModal;
            
            window.openModal = function(...args) {
                // Call original function
                originalOpenModal.apply(this, args);
                
                // Apply syntax highlighting after modal opens
                setTimeout(() => {
                    applySyntaxHighlighting();
                }, 200);
            };
        }
    }

    /**
     * Initialize everything when DOM is ready
     */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initSyntaxHighlighting();
            setupMutationObserver();
            enhanceModalFunctions();
        });
    } else {
        initSyntaxHighlighting();
        setupMutationObserver();
        enhanceModalFunctions();
    }

    // Export functions for manual use if needed
    window.applySyntaxHighlighting = applySyntaxHighlighting;

})();

