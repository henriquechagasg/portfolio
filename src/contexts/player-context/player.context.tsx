import React from 'react'
import musics from "../context-data/musics";

import {createContext, ReactNode, useContext, useState, useRef, Dispatch, SetStateAction} from 'react'

type MusicsList = {
    id: String,
    name: String,
    image: String,
    url: String,
    duration: number
}

type PlayerContextData = {
    musicsList: MusicsList[],
    currentMusicIndex: number,
    isPlaying: boolean,
    togglePlay: () => void,
    playNext: () => void,
    playPrev: () => void,
    audioRef: any,
    progress: number,
    setupProgressListener: () => void,
    handleSlideChange: (amount: number) => void,
    setCurrentMusicIndex: any,
    showWindow: boolean,
    setShowWindow: Dispatch<React.SetStateAction<boolean>>

}

export const PlayerContext = createContext({} as PlayerContextData)

type PlayerContextProviderProps = {
    children: ReactNode
}

export const PlayerContextProvider = ({ children }: PlayerContextProviderProps) => {
    const musicsList: MusicsList[] = musics;
    const audioRef = useRef<HTMLAudioElement>(null);

    const [currentMusicIndex, setCurrentMusicIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0);
    const [showWindow, setShowWindow] = useState(false);



    const togglePlay = () => {
        if (!isPlaying && progress === 0){
            setupProgressListener()
        }

        setIsPlaying(!isPlaying)
    }

    const playNext = () => {
        if (!isPlaying){
            togglePlay()
        }
        if (currentMusicIndex === (musicsList.length - 1)){
            setCurrentMusicIndex(0)
            return
        }
        setCurrentMusicIndex((currentMusicIndex + 1))
    }

    const playPrev = () => {
        if (!isPlaying){
            togglePlay()
        }

        if (currentMusicIndex === 0){
            setCurrentMusicIndex((musicsList.length -1))
            return
        }
        setCurrentMusicIndex((currentMusicIndex -1))
    }

    const setupProgressListener = () => {
        audioRef.current.currentTime = 0;
        audioRef.current.addEventListener('timeupdate', () => {
            setProgress(Math.floor(audioRef.current.currentTime));
        })
    }

    const handleSlideChange = (amount: number) => {
        audioRef.current.currentTime = amount,
        setProgress(amount)
    } 

    return (
        <PlayerContext.Provider
        value={{
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
            setShowWindow
        }}
        >
        {children}
        </PlayerContext.Provider>
    )
    
}

export const UsePlayer = () => {
    return useContext(PlayerContext)
}