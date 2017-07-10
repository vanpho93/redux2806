export function showAll() {
    return { type: 'FILTER_SHOW_ALL' };
}

export function showMemorized() {
    return { type: 'FILTER_SHOW_MEMORIZED' };
}

export function showNeedPractice() {
    return { type: 'FILTER_NEED_PRACTICE' };
}

export function toggleMemorized(id) {
    return { type: 'TOGGLE_MEMORIZED', id };
}
