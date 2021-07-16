import Slider from '@material-ui/core/Slider';
import Lottie from 'react-lottie'
import animationData from '../../../public/playing.json'

import styles from './music-player.module.scss'

import { IoMdPlay } from 'react-icons/io'
import { IoPlaySkipForwardSharp, IoPlaySkipBackSharp, IoPause, IoChevronDownSharp } from 'react-icons/io5'
import { MdKeyboardArrowUp } from "react-icons/md";
import { useEffect } from 'react';
import { UsePlayer } from '../../contexts/player-context/player.context';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';
import { UseLanguage } from '../../contexts/language-context/language.context';

export const MusicPlayer = () => {

    const {
        musicsList,
        currentMusicIndex,
        isPlaying,
        togglePlay,
        playNext,
        playPrev,
        audioRef,
        progress,
        setupProgressListener,
        handleSlideChange,
        setCurrentMusicIndex,
        showWindow,
        setShowWindow } = UsePlayer()
    const { language } = UseLanguage()

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play()
            return
        }
        if (!isPlaying){
            audioRef.current.pause()
            return
        }
    }, [isPlaying, currentMusicIndex])

    useEffect(() => {
        if (document) {
            const body = document.body
            if (showWindow) {
                body.setAttribute("style", "overflow-y: hidden")
                return
            }
            body.setAttribute("style", "")

        }

    }, [showWindow])

    
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    const currentMusic = musicsList[currentMusicIndex]

    const selectMusic = (index:number) => {
        if (!isPlaying) {
            togglePlay()
        }
        audioRef.current.currentTime = 0
        setCurrentMusicIndex(index)
    }

    return (
            <>
            <footer className={showWindow ?  `${styles.container} ${styles.barHidden}` : `${styles.container}`}>
                <div className={styles.barItem}>
                    <span>{`${currentMusic.id}. ${currentMusic.name}`}</span>
                </div>
                <div className={styles.barItem}>
                        <IoPlaySkipBackSharp className={styles.skipButton} onClick={playPrev}/>
                        {isPlaying ? (
                        <IoPause className={styles.pausebutton} onClick={togglePlay}/>
                        ) : (
                        <IoMdPlay className={styles.playbutton} onClickCapture={togglePlay}/>
                        )}
                        <IoPlaySkipForwardSharp className={styles.skipButton} onClick={playNext}/>
                </div>
                <div className={styles.barItem}>
                    <span>{convertDurationToTimeString(progress)}</span>   
                    <Slider 
                    className={styles.slider}
                    max={currentMusic.duration}
                    value={progress}
                    onChange={(e, n:number) => handleSlideChange(n)}
                    />
                    <span>{convertDurationToTimeString(currentMusic.duration)}</span>
                    <MdKeyboardArrowUp className={styles.arrowUp} onClick={() => setShowWindow(true)}/>
                </div>
                <MdKeyboardArrowUp className={styles.hiddenArrow} onClick={() => setShowWindow(true)}/>
                <audio 
                    src={`${currentMusic.url}`}
                    ref={audioRef}
                    onLoadedMetadata={setupProgressListener}
                    onEnded={playNext}
                />
            </footer>

            {/* Player Window */}
            <div className={showWindow ? `${styles.windowContainer} ${styles.showWindowContainer}` : styles.windowContainer}>
                <IoChevronDownSharp className={styles.closeIcon} onClick={() => setShowWindow(false)}/>                            

                <div className={styles.musicCard}>
                    <img  src={`${currentMusic.image}`} alt="No image=/"/>

                </div>
                <div className={styles.musicControllers}>
                    <div className={styles.musicProgress}>
                        <span>{convertDurationToTimeString(progress)}</span>   
                        <Slider 
                        className={styles.slider}
                        max={currentMusic.duration}
                        value={progress}
                        onChange={(e, n:number) => handleSlideChange(n)}
                        />
                        <span>{convertDurationToTimeString(currentMusic.duration)}</span>
                    </div>
                    <div className={styles.musicActions}>
                        <IoPlaySkipBackSharp className={styles.skipButton} onClick={playPrev}/>
                        {isPlaying ? (
                        <IoPause className={styles.pausebutton} onClick={togglePlay}/>
                        ) : (
                        <IoMdPlay className={styles.playbutton} onClickCapture={togglePlay}/>
                        )}
                        <IoPlaySkipForwardSharp className={styles.skipButton} onClick={playNext}/>
                    </div>
                </div>

                <div className={styles.tableContainer}>
                    <div className={styles.tableHeader}>
                        <span></span>
                        <span className={styles.title}>{language === "pt" ? "Música" : "Music"}</span>
                        <span></span>
                        <span className={styles.title}>{language === "pt" ? "Duração" : "Duration"}</span>
                    </div>
                    <div className={styles.scrollMusics}>
                        {musicsList.map(music => {
                            return (
                            <div className={styles.tableBody} key={`${music.id}`}>
                                <div className={styles.image}>
                                    <img 
                                    src={`${music.image}`} 
                                    alt="No image =/" />
                                </div>
                                <div 
                                className={currentMusic.id === music.id ? `${styles.name} ${styles.current}` : styles.name}
                                onClick={() => selectMusic((Number(music.id) - 1))}
                                ><p>{music.name}</p></div>
                                <div>
                                    {currentMusic.id === music.id && isPlaying ? (
                                        <Lottie
                                        options={defaultOptions}
                                        height={40}
                                        width={40}
                                        isStopped={false}
                                        isPaused={false}
                                        />
                                    ):null}
                                </div>
                                <div className={styles.durantion}>{convertDurationToTimeString(music.duration)}</div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            </>
    )
}