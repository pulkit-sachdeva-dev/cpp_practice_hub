// Progress Tracking System for C++ Practice Hub
// Handles exercise completion status and statistics

const ProgressTracker = {
    // Storage key for localStorage
    STORAGE_KEY: 'cpp_practice_hub_progress',

    // Initialize progress tracking
    init() {
        this.loadProgress();
        this.updateAllStats();
    },

    // Load progress from localStorage
    loadProgress() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            if (data) {
                return JSON.parse(data);
            }
        } catch (error) {
            console.error('Error loading progress:', error);
        }
        return this.getDefaultProgress();
    },

    // Get default progress structure
    getDefaultProgress() {
        return {
            exerciseProgress: {},
            stats: {
                totalSolved: 0,
                totalAttempted: 0,
                lastUpdated: new Date().toISOString()
            }
        };
    },

    // Save progress to localStorage
    saveProgress(progressData) {
        try {
            progressData.stats.lastUpdated = new Date().toISOString();
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(progressData));
            return true;
        } catch (error) {
            console.error('Error saving progress:', error);
            return false;
        }
    },

    // Get status of a specific exercise
    getExerciseStatus(exerciseId) {
        const progress = this.loadProgress();
        return progress.exerciseProgress[exerciseId] || { status: 'not-started' };
    },

    // Mark exercise with a status
    markExercise(exerciseId, status) {
        const progress = this.loadProgress();
        const timestamp = new Date().toISOString();

        if (!progress.exerciseProgress[exerciseId]) {
            progress.exerciseProgress[exerciseId] = {};
        }

        progress.exerciseProgress[exerciseId].status = status;
        
        if (status === 'solved') {
            progress.exerciseProgress[exerciseId].solvedAt = timestamp;
        } else if (status === 'attempted') {
            progress.exerciseProgress[exerciseId].attemptedAt = timestamp;
        }

        // Update stats
        this.updateStats(progress);
        
        if (this.saveProgress(progress)) {
            this.updateAllStats();
            return true;
        }
        return false;
    },

    // Update statistics
    updateStats(progress) {
        let totalSolved = 0;
        let totalAttempted = 0;

        Object.values(progress.exerciseProgress).forEach(exercise => {
            if (exercise.status === 'solved') {
                totalSolved++;
            } else if (exercise.status === 'attempted') {
                totalAttempted++;
            }
        });

        progress.stats.totalSolved = totalSolved;
        progress.stats.totalAttempted = totalAttempted;
    },

    // Get overall statistics
    getOverallStats() {
        const progress = this.loadProgress();
        return progress.stats;
    },

    // Get statistics by category
    getStatsByCategory(exercises) {
        const progress = this.loadProgress();
        const categoryStats = {};

        exercises.forEach(exercise => {
            const category = exercise.category;
            if (!categoryStats[category]) {
                categoryStats[category] = {
                    total: 0,
                    solved: 0,
                    attempted: 0
                };
            }

            categoryStats[category].total++;
            
            const status = progress.exerciseProgress[exercise.id];
            if (status) {
                if (status.status === 'solved') {
                    categoryStats[category].solved++;
                } else if (status.status === 'attempted') {
                    categoryStats[category].attempted++;
                }
            }
        });

        return categoryStats;
    },

    // Get statistics by difficulty
    getStatsByDifficulty(exercises) {
        const progress = this.loadProgress();
        const difficultyStats = {
            easy: { total: 0, solved: 0, attempted: 0 },
            medium: { total: 0, solved: 0, attempted: 0 },
            hard: { total: 0, solved: 0, attempted: 0 }
        };

        exercises.forEach(exercise => {
            const difficulty = exercise.difficulty;
            if (difficultyStats[difficulty]) {
                difficultyStats[difficulty].total++;
                
                const status = progress.exerciseProgress[exercise.id];
                if (status) {
                    if (status.status === 'solved') {
                        difficultyStats[difficulty].solved++;
                    } else if (status.status === 'attempted') {
                        difficultyStats[difficulty].attempted++;
                    }
                }
            }
        });

        return difficultyStats;
    },

    // Calculate completion percentage
    getCompletionPercentage(total) {
        const stats = this.getOverallStats();
        if (total === 0) return 0;
        return Math.round((stats.totalSolved / total) * 100);
    },

    // Reset all progress
    resetProgress() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            localStorage.removeItem(this.STORAGE_KEY);
            this.updateAllStats();
            return true;
        }
        return false;
    },

    // Export progress as JSON
    exportProgress() {
        const progress = this.loadProgress();
        const dataStr = JSON.stringify(progress, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `cpp-practice-hub-progress-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        URL.revokeObjectURL(url);
    },

    // Update all statistics displays on the page
    updateAllStats() {
        // This will be called to refresh UI elements
        if (typeof updateProgressDisplay === 'function') {
            updateProgressDisplay();
        }
    }
};

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ProgressTracker.init());
} else {
    ProgressTracker.init();
}

