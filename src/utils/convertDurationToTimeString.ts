export const convertDurationToTimeString = (duration: number) => {
    const minutes = Math.floor((duration / 60));
    const seconds = duration % 60;

    const toTimeString = [ minutes, seconds ].map(unit => String(unit).padStart(2, '0')).join(':')

    return toTimeString;
}


