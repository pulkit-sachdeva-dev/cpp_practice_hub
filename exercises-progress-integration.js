// Progress Tracking Integration for exercises.js
// Add this code to your exercises.js file

// Global variable to track current exercise ID
let currentExerciseId = null;

// Function to update progress display
function updateProgressDisplay() {
    if (typeof exerciseDatabase === 'undefined') return;
    
    const stats = ProgressTracker.getOverallStats();
    const total = exerciseDatabase.length;
    const percentage = ProgressTracker.getCompletionPercentage(total);
    
    // Update stats display
    const totalSolvedEl = document.getElementById('totalSolved');
    const progressBarFillEl = document.getElementById('progressBarFill');
    const progressPercentageEl = document.getElementById('progressPercentage');
    
    if (totalSolvedEl) totalSolvedEl.textContent = `${stats.totalSolved}/${total}`;
    if (progressBarFillEl) progressBarFillEl.style.width = `${percentage}%`;
    if (progressPercentageEl) progressPercentageEl.textContent = `${percentage}%`;
    
    // Update exercise cards with status indicators
    updateExerciseCardStatuses();
}

// Function to update exercise card statuses
function updateExerciseCardStatuses() {
    const exerciseCards = document.querySelectorAll('.exercise-card');
    
    exerciseCards.forEach(card => {
        const exerciseId = card.dataset.id;
        if (!exerciseId) return;
        
        const status = ProgressTracker.getExerciseStatus(exerciseId);
        
        // Remove existing status badges
        const existingBadge = card.querySelector('.status-badge');
        if (existingBadge) existingBadge.remove();
        
        // Add new status badge
        if (status.status !== 'not-started') {
            const badge = document.createElement('div');
            badge.className = `status-badge status-${status.status}`;
            
            if (status.status === 'solved') {
                badge.innerHTML = '✓ Solved';
                badge.style.background = 'linear-gradient(45deg, #10b981, #059669)';
            } else if (status.status === 'attempted') {
                badge.innerHTML = '⏱ Attempted';
                badge.style.background = 'linear-gradient(45deg, #f59e0b, #d97706)';
            }
            
            badge.style.color = 'white';
            badge.style.padding = '0.3rem 0.8rem';
            badge.style.borderRadius = '12px';
            badge.style.fontSize = '0.75rem';
            badge.style.fontWeight = '600';
            badge.style.position = 'absolute';
            badge.style.top = '1rem';
            badge.style.right = '1rem';
            badge.style.zIndex = '10';
            badge.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
            
            card.style.position = 'relative';
            card.appendChild(badge);
        }
    });
}

// Function to mark exercise status
function markExerciseStatus(status) {
    if (!currentExerciseId) return;
    
    const success = ProgressTracker.markExercise(currentExerciseId, status);
    
    if (success) {
        // Show feedback
        showStatusFeedback(status);
        
        // Update button states
        updateStatusButtons(status);
        
        // Update progress display
        updateProgressDisplay();
        
        // Update the current card
        updateExerciseCardStatuses();
    }
}

// Function to show status feedback
function showStatusFeedback(status) {
    const messages = {
        'solved': '🎉 Great job! Exercise marked as solved!',
        'attempted': '⏱ Exercise marked as attempted. Keep practicing!',
        'not-started': '🔄 Status reset successfully!'
    };
    
    const message = messages[status] || 'Status updated!';
    
    // Create toast notification
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #667eea, #764ba2);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        font-weight: 600;
    `;
    
    document.body.appendChild(toast);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Function to update status button states
function updateStatusButtons(currentStatus) {
    const solvedBtn = document.getElementById('markSolvedBtn');
    const attemptedBtn = document.getElementById('markAttemptedBtn');
    const resetBtn = document.getElementById('markResetBtn');
    
    // Reset all buttons
    [solvedBtn, attemptedBtn, resetBtn].forEach(btn => {
        if (btn) {
            btn.style.opacity = '1';
            btn.style.transform = 'scale(1)';
        }
    });
    
    // Highlight current status
    if (currentStatus === 'solved' && solvedBtn) {
        solvedBtn.style.opacity = '0.7';
        solvedBtn.style.transform = 'scale(0.95)';
    } else if (currentStatus === 'attempted' && attemptedBtn) {
        attemptedBtn.style.opacity = '0.7';
        attemptedBtn.style.transform = 'scale(0.95)';
    }
}

// Function to reset progress
function resetProgress() {
    if (ProgressTracker.resetProgress()) {
        updateProgressDisplay();
        showStatusFeedback('not-started');
    }
}

// Modified openModal function - ADD THIS TO YOUR EXISTING openModal
function openModalWithProgress(exercise) {
    currentExerciseId = exercise.id;
    
    // Your existing openModal code here...
    // Then add:
    
    // Update status buttons based on current status
    const status = ProgressTracker.getExerciseStatus(exercise.id);
    updateStatusButtons(status.status);
}

// Enhanced filter function to include solved/unsolved
function filterExercisesByProgress(filterType) {
    if (!exerciseDatabase) return;
    
    const filteredExercises = exerciseDatabase.filter(exercise => {
        const status = ProgressTracker.getExerciseStatus(exercise.id);
        
        if (filterType === 'solved') {
            return status.status === 'solved';
        } else if (filterType === 'unsolved') {
            return status.status !== 'solved';
        }
        return true;
    });
    
    return filteredExercises;
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize progress display when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateProgressDisplay);
} else {
    updateProgressDisplay();
}

// Update display when exercises are rendered
const originalRenderFunction = window.renderExercises;
if (originalRenderFunction) {
    window.renderExercises = function(...args) {
        originalRenderFunction.apply(this, args);
        setTimeout(updateProgressDisplay, 100);
    };
}

