export const SELECTED_MUSIC = "SELECTED_MUSIC";


export const selectMusic = (cardMusic) => ({
    type: SELECTED_MUSIC,
    payload: cardMusic
})